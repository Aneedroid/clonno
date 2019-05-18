import {fork} from 'redux-saga/effects';
import swapiSaga from './swapi-saga.js';
import clonnoSaga from './clonno-saga.js';

export default function* rootSaga() {
  yield [
    fork(swapiSaga),
    fork(clonnoSaga),
  ];
}