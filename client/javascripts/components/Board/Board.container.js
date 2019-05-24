import { connect } from 'react-redux';
import { getClonno, getAppLoading } from '../../utils/redux-selectors';
import { updateBoard, updateCard, updateList, updateClonnoToMongo as putToMongo, updateComment, dropCard } from '../../actions';

const mapStateToProps = state => {
  return {
    clonno: getClonno(state),
    isAppLoading: getAppLoading(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateComment: (boardId, listId, cardId, commentId, commentData) => dispatch(updateComment(boardId, listId, cardId, commentId, commentData)),
    updateCard: (boardId, listId, cardId, cardData) => dispatch(updateCard(boardId, listId, cardId, cardData)),
    dropCard: (boardId, listId, cardId, cardData) => dispatch(dropCard(boardId, listId, cardId, cardData)),
    updateList: (boardId, listId, listData) => dispatch(updateList(boardId, listId, listData)),
    updateBoard: (boardId, boardData) => dispatch(updateBoard(boardId, boardData)),
    updateClonnoToMongo: (saveClonno) => dispatch(putToMongo(saveClonno)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);