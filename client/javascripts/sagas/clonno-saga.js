import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_CLONNO } from '../actions/types';
import { updateClonno } from '../actions';
import { getClonnoData } from '../api/clonno';

export const getClonno = function* () {
  try {
    const clonnoData = yield call(getClonnoData);
    yield put(updateClonno(clonnoData));
  } catch (error) {
    yield put(updateClonno({}));
  }
};

export default /* istanbul ignore next */ function* navSaga() /* istanbul ignore next */ {
  yield takeEvery(FETCH_CLONNO, getClonno);
}