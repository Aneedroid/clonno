import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_CLONNO, UPDATE_CLONNO_TO_MONGO } from '../actions/types';
import { updateClonno } from '../actions';
import { getClonnoData, putClonnoData } from '../api/clonno';

export const getClonno = function* () {
  try {
    const clonnoData = yield call(getClonnoData);
    yield put(updateClonno(clonnoData));
  } catch (error) {
    yield put(updateClonno({}));
  }
};

export const updateClonnoToMongo = function* (action) {
  try {
    yield call(putClonnoData, action.saveClonno);
  } catch (err) {}
};

export default /* istanbul ignore next */ function* navSaga() /* istanbul ignore next */ {
  yield takeEvery(FETCH_CLONNO, getClonno);
  yield takeEvery(UPDATE_CLONNO_TO_MONGO, updateClonnoToMongo);
}