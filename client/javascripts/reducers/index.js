import { combineReducers } from 'redux';
import clonno from './clonno-reducer';
import app from './app-reducer';

export const reducers = {
  clonno,
  app,
};

export default combineReducers(reducers);
