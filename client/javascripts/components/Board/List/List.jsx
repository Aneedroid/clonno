import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import './List.style.scss';

const List = ({ title, cards }) => {
  return (
    <div className="list">
      <div className="list__title">{title}</div>
      <div className="list__cards">
        {cards.map((card, index) => {
          return <Card key={index} title={card.title} description={card.description} comments={card.comments} />
        })}
      </div>
    </div>
  );
};

List.defaultProps = {
  cards: [],
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.any,
};

export default List;