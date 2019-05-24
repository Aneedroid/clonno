import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import List from './List';
import ItemAdder from '../ItemAdder';

import './Board.style.scss';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTitlePressed: false,
      title: props && props.clonno && props.clonno.boards && props.clonno.boards[0].title ? props.clonno.boards[0].title : 'Sample Board',
    };
  }

   renderBoard = (board, updateCard, updateList, updateClonnoToMongo, updateComment, dropCard) => {
     const { updateBoard, isAppLoading } = this.props;
     const lists = board && board.lists ? board.lists : [];
     // Assume board Index as 0 for now
     return (
       <div className="board">
         <div className="board-top">
           { !this.state.isTitlePressed ? <div className="board-top__name" role="presentation" onClick={() => this.setState({isTitlePressed: true})}>
             {board.title ? board.title : 'Sample Board'}
           </div>
             : <div className="board-top__name">
               <input autoFocus defaultValue={this.state.title} type="text" onChange={(e) => this.setState({title: e.target.value})}
                 onBlur={(e) => {
                   this.setState({isTitlePressed: false});
                   updateBoard(0, {title: this.state.title});
                 }}/>
             </div> 
           }
           <Button loading={isAppLoading} size="large" color="grey" onClick={() => updateClonnoToMongo(board)}>Save</Button>
         </div>
         <div className="board__lists">
           {lists.map((list, index) => {
             return <List
               key={index}
               title={list && list.title ? list.title : 'Untitled list'}
               cards={list && list.cards ? list.cards : []}
               updateCard={updateCard}
               boardId={0}
               listId={index}
               updateComment={updateComment}
               updateList={updateList}
               dropCard={dropCard}
             />;
           })}
           <ItemAdder type={'List'} updateList={updateList} boardId={0} lastIndex={lists.length} />
         </div>
       </div>
     );
   };

  render = () => {
    const { clonno, updateCard, updateList, updateClonnoToMongo, updateComment, dropCard } = this.props;
    const boards = clonno && clonno.boards ? clonno.boards : [];
    return (
      <div>
        { boards.length !== 0 ? this.renderBoard(boards[0], updateCard, updateList, updateClonnoToMongo, updateComment, dropCard) : null}
      </div>
    );
  };
}

Board.propTypes = {
  clonno: PropTypes.any,
  updateList: PropTypes.func,
  updateCard: PropTypes.func,
  updateClonnoToMongo: PropTypes.func,
  updateComment: PropTypes.func,
  dropCard: PropTypes.func,
  updateBoard: PropTypes.func,
  isAppLoading: PropTypes.bool,
};

export default Board;
