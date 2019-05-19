import React from 'react';
import PropTypes from 'prop-types';

import Overview from '../Overview';
import Board from '../Board';

import './App.style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.setupApp();
  }

  render = () => {
    return (
      <div>
        <Overview title={'Clonno'} subTitle={'A minimalist list making application for team collaboration activities'}/>
        <Board />
      </div>
    );
  }
}

App.propTypes = {
  setupApp: PropTypes.func.isRequired,
};

export default App;
