import { combineReducers } from 'redux';
import clonno from './clonno-reducer';

export const reducers = {
  clonno,
};

export default combineReducers(reducers);
