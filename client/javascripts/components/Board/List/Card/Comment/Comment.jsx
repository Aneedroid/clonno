import React from 'react';
import PropTypes from 'prop-types';

import ItemAdder from '../../../../ItemAdder';
import './Comment.style.scss';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentOpen: false,
    }
  }

    renderComment = (comment, key) => {
      return (
        <li key={key}><div key={key} className="comments-content">{comment}</div></li>
      );
    }

    render = () => {
      const { comments, updateComment, boardId, listId, cardId } = this.props;
      return (
        <div className="comments">
          <div className="comments-list">
            <div className="comments-title">Comments</div>
            <ul>{ comments.map((comment, key) => this.renderComment(comment, key)) }</ul>
            <ItemAdder
              type={'Comment'}
              updateComment={updateComment}
              boardId={boardId}
              listId={listId}
              cardId={cardId}
              commentId={comments.length}
              lastIndex={comments.length}
            />
          </div>
        </div>
      );
    }
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
  updateComment: PropTypes.func,
  boardId: PropTypes.number,
  listId: PropTypes.number,
  cardId: PropTypes.number,
};

export default Comment;
