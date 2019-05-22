import React from 'react';
import PropTypes from 'prop-types';

import { ItemTypes } from '../../constants';
import { DropTarget } from 'react-dnd';

import './CardDropper.style.scss';

const squareTarget = {
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
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }
}

const CardDropper = ({connectDropTarget}) => {
  return connectDropTarget(
    <div className="card-dropper"></div>
  );
};

CardDropper.propTypes = {
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

export default DropTarget(ItemTypes.CARD, squareTarget, collect)(CardDropper);
