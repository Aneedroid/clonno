import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import ItemAdder from '../ItemAdder';

import './Board.style.scss';

const mapBoardsAndRender = () => {};

const renderBoard = (board, updateCard, updateList, updateClonnoToMongo, updateComment) => {
  const lists = board && board.lists ? board.lists : [];
  // Assume board Index as 0 for now
  return (
    <div className="board">
      <div className="board-top">
        <div className="board-top__name">{board.title}</div>
        <button className="board-top__save" onClick={() => updateClonnoToMongo(board)}>Save</button>
      </div>
      <div className="board__lists">
        {lists.map((list, index) => {
          return <List
            key={index}
            title={list.title}
            cards={list.cards}
            updateCard={updateCard}
            boardId={0}
            listId={index}
            updateComment={updateComment}
            updateList={updateList}
          />;
        })}
        <ItemAdder type={'List'} updateList={updateList} boardId={0} lastIndex={lists.length} />
      </div>
    </div>
  );
};

const Board = ({ clonno, updateCard, updateList, updateClonnoToMongo, updateComment }) => {
  const boards = clonno && clonno.boards ? clonno.boards : [];
  return (
    <div>
      { boards.length !== 0 ? boards.length > 1 ? mapBoardsAndRender() : renderBoard(clonno.boards[0], updateCard, updateList, updateClonnoToMongo, updateComment) : null }
    </div>
  );
};

Board.propTypes = {
  clonno: PropTypes.any,
  updateList: PropTypes.func,
  updateCard: PropTypes.func,
  updateClonnoToMongo: PropTypes.func,
  updateComment: PropTypes.func,
};

export default Board;
