import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import ItemAdder from '../../ItemAdder';

import './List.style.scss';

const List = ({ title, cards, updateCard, boardId, listId }) => {
  return (
    <div className="list">
      <div className="list__title">{title}</div>
      <div className="list__cards">
        {cards.map((card, index) => {
          return <Card key={index} title={card.title} description={card.description} comments={card.comments} />;
        })}
      </div>
      <ItemAdder type={'Card'} updateCard={updateCard} boardId={boardId} listId={listId} lastIndex={cards.length} />
    </div>
  );
};

List.defaultProps = {
  cards: [],
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.any,
  updateCard: PropTypes.func,
  boardId: PropTypes.number,
  listId: PropTypes.number,
};

export default List;