import * as selectors from '../../../../../client/javascripts/utils/redux-selectors';

describe('Redux Selectors Util', () => {
  describe('Clonno', () => {
    test('should select clonno details', () => {
      const state = {
        clonno: [{ title: 'Magic' }],
      };
      expect(selectors.getClonno(state)).toEqual(state.clonno);
    });
  });
});