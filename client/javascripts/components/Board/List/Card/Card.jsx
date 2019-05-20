import React from 'react';
import PropTypes from 'prop-types';

import './Card.style.scss';

const Card = ({ title, description, comments }) => {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
    </div>
  );
};

Card.defaultProps = {
  comments: [],
  description: '',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.string),
};

export default Card;