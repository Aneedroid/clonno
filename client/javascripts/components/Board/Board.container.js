import { connect } from 'react-redux';
import { getClonno } from '../../utils/redux-selectors';
import { updateBoard, updateCard, updateList } from '../../actions';

const mapStateToProps = state => {
  return {
    clonno: getClonno(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCard: (boardId, listId, cardId, cardData) => dispatch(updateCard(boardId, listId, cardId, cardData)),
    updateList: (boardId, listId, listData) => dispatch(updateList(boardId, listId, listData)),
    updateBoard: (boardId, boardData) => dispatch(updateBoard(boardId, boardData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
