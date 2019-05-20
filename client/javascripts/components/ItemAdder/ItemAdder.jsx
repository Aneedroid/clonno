import React from 'react';
import PropTypes from 'prop-types';

import './ItemAdder.style.scss';

class ItemAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAdd: false,
      inputValue: '',
      lastBoxIndex: 0,
    };
  }

  componentDidMount = () => {
    this.setState({
      lastBoxIndex: this.props.lastIndex ? this.props.lastIndex : 0,
    });
  };

  onAddhandler = () => {
    const { type, boardId, listId, updateCard, updateList } = this.props;
    const { inputValue, lastBoxIndex } = this.state;
    const body = {
      title: inputValue,
    };

    if (type === 'Card' && updateCard) {
      updateCard(boardId, listId, lastBoxIndex, body);
    }
    if (type === 'List' && updateList) {
      updateList(boardId, lastBoxIndex, body);
    }

    this.setState({
      lastBoxIndex: this.state.lastBoxIndex + 1,
      openAdd: false,
      inputValue: '',
    });
  };

  adderOnChangeHandler = (e) => {
    this.setState({inputValue: event.target.value});
  };

  renderAdderActive = () => {
    const { type } = this.props;
    return (
      <div className="item-adder-active">
        <input type="text" 
          placeholder="Enter a title ..."
          onChange={(e) => this.adderOnChangeHandler(e)}
          value={this.state.inputValue} 
        />
        <div className="item-adder-active__bottom">
          <button onClick={() => this.onAddhandler()}>Add {type}</button>
          <div className="item-adder-active__bottom-close"
            role="presentation"
            onClick={() => this.setState({openAdd: false})}>
              X
          </div>
        </div>
      </div>
    );
  }

  renderAdderPassive = () => {
    return (
      <div className="item-adder-passive"
        onClick={() => this.setState({ openAdd: true })}
        role="presentation">
            + Add another {this.props.type}
      </div>
    );
  };

  render = () => {
    return (
      <div className="item-adder">
        { this.state.openAdd ? this.renderAdderActive() : this.renderAdderPassive() }
      </div>
    )
  }
}

ItemAdder.propTypes = {
  type: PropTypes.string.isRequired,
  boardId: PropTypes.number,
  listId: PropTypes.number,
  updateCard: PropTypes.func,
  updateList: PropTypes.func,
};

export default ItemAdder;