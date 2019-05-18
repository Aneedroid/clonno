import co from 'co';
import * as sideEffects from 'redux-saga/effects';

import { getClonnoData as fetchClonnoData } from '../../../../../client/javascripts/api/clonno';
import { updateClonno } from '../../../../../client/javascripts/actions';
import { FETCH_CLONNO } from '../../../../../client/javascripts/actions/types';

jest.mock('redux-saga/effects');

describe('Clonno Saga', () => {
  let getClonno;
  const clonnoData = [{
    title: 'SomeTitle',
    lists: [],
  }];

  beforeEach(() => {
    sideEffects.call.mockClear();
    sideEffects.put.mockClear();
    sideEffects.takeEvery.mockClear();
    getClonno = require('../../../../../client/javascripts/sagas/clonno-saga').getClonno;
  });

  test('should update the clonno data from the API', () => {
    sideEffects.call.mockResolvedValue(clonnoData);
    sideEffects.put.mockResolvedValue();
    return co(function* () {
      yield getClonno();
      expect(sideEffects.call).lastCalledWith(fetchClonnoData);
      expect(sideEffects.put).lastCalledWith(updateClonno(clonnoData));
    });
  });

  test('should update the feature flags with nothing when the API fails', () => {
    const error = {
      message: 'Oops!',
    };
    sideEffects.call.mockRejectedValue(error);
    sideEffects.put.mockResolvedValue();
    return co(function* () {
      yield getClonno();
      expect(sideEffects.put).lastCalledWith(updateClonno({}));
    });
  });
});
