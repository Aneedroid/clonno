import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import ItemAdder from '../ItemAdder';

import './Board.style.scss';


class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  mapBoardsAndRender = () => {};

  renderBoard = (board) => {
    const { updateCard, updateList } = this.props;
    const lists = board && board.lists ? board.lists : [];
    // Assume board Index as 0 for now
    return (
      <div className="board">
        <div className="board-top">
          <div className="board-top__name">{board.title}</div>
          <button className="board-top__save">Save</button>
        </div>
        <div className="board__lists">
          {lists.map((list, index) => {
            return <List key={index} title={list.title} cards={list.cards} updateCard={updateCard} boardId={0} listId={index} />;
          })}
          <ItemAdder type={'List'} updateList={updateList} boardId={0} lastIndex={lists.length} />
        </div>
      </div>
    );
  };

  render = () => {
    const { clonno } = this.props;
    const boards = clonno && clonno.boards ? clonno.boards : [];
    return (
      <div>
        { boards.length !== 0 ? boards.length > 1 ? this.mapBoardsAndRender() : this.renderBoard(clonno.boards[0]) : null }
      </div>
    );
  };
}

Board.propTypes = {
  clonno: PropTypes.any,
  updateList: PropTypes.func,
  updateCard: PropTypes.func,
};

export default Board;
