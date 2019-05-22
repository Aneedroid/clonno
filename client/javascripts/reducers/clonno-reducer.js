import { UPDATE_CLONNO, UPDATE_CARD, UPDATE_LIST, UPDATE_COMMENT, DROP_CARD, UPDATE_BOARD } from '../actions/types';

const clonno = {};

export default (state = clonno, action) => {
  switch (action.type) {
    case UPDATE_CLONNO: {
      let newState = { ...state };
      newState = action.clonnoData;
      return newState;
    }
    case UPDATE_BOARD: {
      let newState = {...state};
      let boardToUpdate = newState && newState.boards && newState.boards.length > 0 ? newState.boards[action.boardId] : [];
      const boardData = action.boardData;

      const newBoardContents = {
        ...boardToUpdate,
        ...boardData,
      };

      if (boardToUpdate.length > 0) {
        newState.boards[action.boardId] = newBoardContents;
      } else {
        newState.boards = [];
        newState.boards[action.boardId] = newBoardContents;
      }
      return newState;
    }
    case UPDATE_CARD: {
      let newState = { ...state };      
      const boardToUpdate = action.boardId ? newState.boards[action.boardId] : newState.boards[0];
      const listToUpdate = boardToUpdate.lists[action.listId];
      const cardData = action.cardData;

      if (cardData) {
        if (action.cardId > 0) {
          const newCardContents = {
            ...listToUpdate.cards[action.cardId],
            ...cardData,
          };
          listToUpdate.cards[action.cardId] = newCardContents;
        } else {
          if (!listToUpdate.cards) {
            listToUpdate.cards = [];
          }
          const newCardContents = {
            ...listToUpdate.cards[action.cardId],
            ...cardData,
          };
          listToUpdate.cards[action.cardId] = newCardContents;
        }
      } else {
        listToUpdate.cards.splice(action.cardId, 1);
      }
      return newState;
    }
    case DROP_CARD: {
      let newState = { ...state };      
      const boardToUpdate = action.boardId ? newState.boards[action.boardId] : newState.boards[0];
      const listToUpdate = boardToUpdate.lists[action.listId];
      const cardData = action.cardData;

      if (action.cardId > 0) {
        const newCardContents = {
          ...listToUpdate.cards[action.cardId],
          ...cardData,
        };
        listToUpdate.cards.splice(action.cardId, 0, newCardContents);
      } else {
        if (!listToUpdate.cards) {
          listToUpdate.cards = [];
        }
        const newCardContents = {
          ...listToUpdate.cards[action.cardId],
          ...cardData,
        };
        listToUpdate.cards.splice(action.cardId + 1, 0, newCardContents);
      }
      return newState;
    }
    case UPDATE_LIST: {
      let newState = { ...state };
      const boardToUpdate = newState.boards[action.boardId];
      const listData = action.listData;

      if (listData) {
        if (action.listId > 0) {
          const newListContents = {
            ...boardToUpdate.lists[action.listId],
            ...listData,
          };
          boardToUpdate.lists[action.listId] = newListContents;
        } else {
          if (!boardToUpdate.lists) {
            boardToUpdate.lists = [];
          }
          const newListContents = {
            ...boardToUpdate.lists[action.listId],
            ...listData,
          };
          boardToUpdate.lists[action.listId] = newListContents;
        }
      } else {
        boardToUpdate.lists.splice(action.listId, 1);
      }

      return newState;
    }
    case UPDATE_COMMENT: {
      let newState = { ...state };
      const boardToUpdate = newState.boards[action.boardId];
      const listToUpdate = boardToUpdate.lists[action.listId];
      const cardToUpdate = listToUpdate.cards[action.cardId];

      if (action.commentId > 0) {
        cardToUpdate.comments[action.commentId] = action.commentData;
      } else {
        cardToUpdate.comments = [];
        cardToUpdate.comments[action.commentId] = action.commentData;
      }
      return newState;
    }
    default:
      return state;
  }
};
