import {
  FETCH_CLONNO,
  UPDATE_CLONNO,
  UPDATE_LIST,
  UPDATE_BOARD,
  UPDATE_CARD,
  UPDATE_CLONNO_TO_MONGO,
  UPDATE_COMMENT,
  DROP_CARD,
} from './types';

export const fetchClonno = () => {
  return { type: FETCH_CLONNO };
};

export const updateClonno = clonnoData => {
  return { type: UPDATE_CLONNO, clonnoData };
};

export const updateCard = (boardId, listId, cardId, cardData) => {
  return { type: UPDATE_CARD, boardId, listId, cardId, cardData };
};

export const dropCard = (boardId, listId, cardId, cardData) => {
  return { type: DROP_CARD, boardId, listId, cardId, cardData };
};

export const updateBoard = (boardId, boardData) => {
  return { type: UPDATE_BOARD, boardId, boardData };
};

export const updateList = (boardId, listId, listData) => {
  return { type: UPDATE_LIST, boardId, listId, listData };
};

export const updateClonnoToMongo = saveClonno => {
  return { type: UPDATE_CLONNO_TO_MONGO, saveClonno };
};

export const updateComment = (boardId, listId, cardId, commentId, commentData) => {
  return { type: UPDATE_COMMENT, boardId, listId, cardId, commentId, commentData };
};