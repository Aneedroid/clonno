import { UPDATE_CLONNO, UPDATE_CARD, UPDATE_LIST } from '../actions/types';

const clonno = {};

export default (state = clonno, action) => {
  switch (action.type) {
    case UPDATE_CLONNO: {
      let newState = { ...state };
      newState = action.clonnoData;
      return newState;
    }   
    case UPDATE_CARD: {
      let newState = { ...state };
      const boardToUpdate = newState.boards[action.boardId];
      const listToUpdate = boardToUpdate.lists[action.listId];
      if (action.cardId > 0) {
        listToUpdate.cards[action.cardId] = action.cardData;
      } else {
        listToUpdate.cards = [];
        listToUpdate.cards[action.cardId] = action.cardData;
      }
      return newState;
    }
    case UPDATE_LIST: {
      let newState = { ...state };
      const boardToUpdate = newState.boards[action.boardId];
      boardToUpdate.lists[action.listId] = action.listData;
      return newState;
    }
    default:
      return state;
  }
};
