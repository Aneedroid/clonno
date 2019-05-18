import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../../../../client/javascripts/components/App/App';

describe('<App />', () => {
  describe('Rendering Tests', () => {
    test('should render component', () => {
      const props = {
        setupApp: () => {},
      };
      const wrapper = shallow(<App {...props} />);
      expect(wrapper.exists()).toBeTruthy();
      expect(wrapper.find('Overview').exists()).toBeTruthy();
      expect(wrapper.find('Board').exists()).toBeTruthy();
    });
  });

  describe('Lifecycle Methods Tests', () => {
    test('should fire setupApp on componentDidMount', () => {
      const props = {
        setupApp: jest.fn(),
      };
      const wrapper = shallow(<App {...props} />);
      wrapper.instance().componentDidMount();
      expect(props.setupApp).toHaveBeenCalled();
    });
  });
});
