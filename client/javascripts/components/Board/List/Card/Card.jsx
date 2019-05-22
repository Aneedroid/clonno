import React from 'react';
import PropTypes from 'prop-types';

import { ItemTypes } from '../../../../constants/';
import { DragSource, DropTarget } from 'react-dnd';

import Comment from './Comment';
import './Card.style.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isTitlePressed: false,
      title: props.title,
      isDescPressed: false,
      desc: props.description,
    };
  }

  renderTitleInput = () => {
    const { updateCard, boardId, listId, cardId } = this.props;
    return (
      <div className="card__active__upper-edit">
        <input
          autoFocus
          type="text"
          onBlur={(e) => {
            this.setState({isTitlePressed: false});
            updateCard(boardId, listId, cardId, {title: this.state.title});
          }}
          defaultValue={this.state.title}
          onChange={(e) => this.setState({title: e.target.value})}
        />
      </div>
    );
  };

  renderDescInput = () => {
    const { updateCard, boardId, listId, cardId } = this.props;
    return (
      <div className="card-active-description-edit">
        <input
          className={'card-active-description-input'}
          autoFocus
          type="text"
          onBlur={(e) => {
            this.setState({isDescPressed: false});
            this.state.desc ? updateCard(boardId, listId, cardId, {description: this.state.desc}) : null;
          }}
          defaultValue={this.state.desc}
          onChange={(e) => this.setState({desc: e.target.value})}
        />
      </div>
    );
  };

  renderDesc = () => {
    const { description } = this.props;
    return (
      <div className="card__active-description"
        role="presentation"
        onClick={() => this.setState({isDescPressed: true})}>
        {description}
      </div> 
    );
  }

  renderPassive = () => {
    const { title } = this.props;
    return (
      <div className="card__passive-title" role="presentation" onClick={() => this.setState({isActive: true})}>{title}</div>
    );
  }

  renderActive = () => {
    const { title, description, comments, boardId, listId, cardId, updateComment, updateCard } = this.props;
    return (
      <div className="card__active">
        <div className="card__active__upper">
          {this.state.isTitlePressed ? this.renderTitleInput()
            : <div role="presentation" className="card__active__upper-title" onClick={() => this.setState({isTitlePressed: true})}>{title}</div>}
          <div className="card__active__upper-close" role="presentation" onClick={() => this.setState({isActive: false})}>X</div>
        </div>
        <div className="card__active-description-title">Description</div>
        {this.state.isDescPressed ? this.renderDescInput() : description ? this.renderDesc() : this.renderDescInput()}
        <Comment comments={comments} boardId={boardId} listId={listId} cardId={cardId} updateComment={updateComment} />
        <div className="card__active-delete" role="presentation" onClick={() => updateCard(boardId, listId, cardId)}>Delete</div>
      </div>
    );
  }

  render = () => {
    const { connectDragSource, connectDropTarget } = this.props;
    return connectDropTarget(connectDragSource(
      <div className="card">
        {this.state.isActive ? this.renderActive() : this.renderPassive()}
      </div>
    ));
  };
}

Card.defaultProps = {
  comments: [],
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.string),
  boardId: PropTypes.number,
  listId: PropTypes.number,
  cardId: PropTypes.number,
  updateComment: PropTypes.func,
  updateCard: PropTypes.func,
  dropCard: PropTypes.func,
};

export default DropTarget(
  ItemTypes.CARD,
  {
    drop(props, monitor) {
      const constructCard = (title, description, comments) => {
        return {
          title,
          description,
          comments,
        };
      }
  
      const dragBoardId = monitor.getItem().boardId;
      const dragListId = monitor.getItem().listId;
      const dragCardId = monitor.getItem().cardId;

      const dropBoardId = props.boardId;
      const dropListId = props.listId;
      const dropCardId = props.cardId;

      // Don't replace items with themselves
      if (dragListId === dropListId && dragCardId === dropCardId) {
        return;
      }

      // First take card off from the source list.
      props.updateCard(dragBoardId, dragListId, dragCardId);

      // Add the card to the new destination list.
      const dragCardTitle = monitor.getItem().title;
      const dragCardDescription = monitor.getItem().description;
      const dragCardComments = monitor.getItem().comments;
      const dropCard = constructCard(dragCardTitle, dragCardDescription, dragCardComments);
      props.dropCard(dropBoardId, dropListId, dropCardId, dropCard);
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    ItemTypes.CARD,
    {
      beginDrag: (props) => {
        return {
          boardId: props.boardId,
          cardId: props.cardId,
          listId: props.listId,
          title: props.title,
          description: props.description,
          comments: props.comments,
        };
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
);