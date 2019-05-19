import {fork} from 'redux-saga/effects';
import clonnoSaga from './clonno-saga.js';

export default function* rootSaga() {
  yield [
    fork(clonnoSaga),
  ];
}