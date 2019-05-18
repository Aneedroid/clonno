import React from 'react';
import { shallow } from 'enzyme';

import Board from '../../../../../../client/javascripts/components/Board/Board';

describe('<Board />', () => {
  describe('Rendering Tests', () => {
    test('should render component', () => {
      const wrapper = shallow(<Board />);
      expect(wrapper.exists()).toBeTruthy();
    });
  });
});
