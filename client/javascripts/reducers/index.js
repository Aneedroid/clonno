import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import content from './content-reducer';
import swapi from './swapi-reducer';
import clonno from './clonno-reducer';

export const reducers = {
  content,
  swapi,
  clonno,
};

export default combineReducers(reducers);
