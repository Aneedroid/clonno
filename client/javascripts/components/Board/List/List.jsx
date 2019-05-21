import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import ItemAdder from '../../ItemAdder';

import './List.style.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTitlePressed: false,
      title: props.title,
    };
  }

  render = () => {
    const { title, cards, updateCard, boardId, listId, updateComment, updateList } = this.props;
    return (
      <div className="list">
        {!this.state.isTitlePressed ? 
          <div className="list__upper">
            <div className="list__upper-title" role="presentation" onClick={() => this.setState({isTitlePressed: true})}>{title}</div>
            <div className="list__upper-remove"
              role="presentation"
              onClick={() => updateList(boardId, listId)}
            >-</div>
          </div>
          : <div className="list__edit-title">
            <input
              autoFocus
              type="text"
              onBlur={(e) => {
                this.setState({isTitlePressed: false});
                updateList(boardId, listId, {title: this.state.title});
              }}
              defaultValue={this.state.title}
              onChange={(e) => this.setState({title: e.target.value})}
            />
          </div>
        }
        <div className="list__cards">
          {cards.map((card, index) => {
            return <Card
              key={index}
              title={card.title}
              description={card.description}
              comments={card.comments}
              boardId={boardId}
              listId={listId}
              cardId={index}
              updateComment={updateComment}
              updateCard={updateCard}
            />;
          })}
        </div>
        <ItemAdder type={'Card'} updateCard={updateCard} boardId={boardId} listId={listId} lastIndex={cards.length} />
      </div>
    );
  };
}

List.defaultProps = {
  cards: [],
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.any,
  updateCard: PropTypes.func,
  updateList: PropTypes.func,
  boardId: PropTypes.number,
  listId: PropTypes.number,
  updateComment: PropTypes.func,
};

export default List;