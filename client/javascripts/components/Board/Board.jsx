import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import './Board.style.scss';

const renderBoard = (board) => {
  const lists = board && board.lists ? board.lists : [];
  return (
    <div className="board">
      <div className="board__name">{board.title}</div>
      <div className="board__lists">
        {lists.map((list, index) => {
          return <List key={index} title={list.title} cards={list.cards} />
        })}
      </div>
    </div>
  );
};

const mapBoardsAndRender = () => {};

const Board = ({clonno}) => {
  const boards = clonno && clonno.boards ? clonno.boards : [];
  return (
    <div>
      { boards.length !== 0 ? boards.length > 1 ? mapBoardsAndRender() : renderBoard(clonno.boards[0]) : null }
    </div>
  );
};

Board.propTypes = {
  clonno: PropTypes.any,
};

export default Board;
