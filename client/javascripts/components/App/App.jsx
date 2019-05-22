import React from 'react';
import PropTypes from 'prop-types';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <Overview title={'Clonno'} subTitle={'A minimalist list making application for distributed team collaboration activities'}/>
          <div className="app__board"><Board /></div>
        </div>
      </DragDropContextProvider>
    );
  }
}

App.propTypes = {
  setupApp: PropTypes.func.isRequired,
};

export default App;
