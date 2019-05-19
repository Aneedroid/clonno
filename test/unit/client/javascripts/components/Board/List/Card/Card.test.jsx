import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../../../../../../../client/javascripts/components/Board/List/Card';

describe('<Card />', () => {
  describe('Rendering Tests', () => {
    test('should render component', () => {
      const comments = ['Waoow!'];  
      const wrapper = shallow(<Card title={'SomeListTitle'} description={'Amazing description'} comments={comments} />);
      expect(wrapper.exists()).toBeTruthy();
      expect(wrapper.find('.card').exists()).toBeTruthy();
      expect(wrapper.find('.card__title').exists()).toBeTruthy();
    });
  });
});
