import clonnoReducer from '../../../../../client/javascripts/reducers/clonno-reducer';
import { updateClonno } from '../../../../../client/javascripts/actions/creators';

describe('Clonno Reducer', () => {
  let state = {};

  describe('UPDATE_CLONNO', () => {
    beforeEach(() => {
    });

    test('should update the state with the clonno data', () => {
      const clonnoData = [{
        title: 'Sample',
        lists: [],
      }];

      expect(clonnoReducer(state, updateClonno(clonnoData))).toEqual(clonnoData);
    });
  });

  describe('Default State', () => {
    test('should return the current state', () => {
      expect(clonnoReducer(undefined, { type: undefined })).toEqual(state);
    });
  });
});
