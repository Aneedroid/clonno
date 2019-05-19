import React from 'react';
import { shallow } from 'enzyme';

import List from '../../../../../../../client/javascripts/components/Board/List';

describe('<List />', () => {
  describe('Rendering Tests', () => {
    test('should render component', () => {
      const cards = [{
        title: 'Card Title',
        description: 'This is a good card',
        comments: ['100/100 card!']
      }];
      const wrapper = shallow(<List title={'SomeListTitle'} cards={cards} />);
      expect(wrapper.exists()).toBeTruthy();
      expect(wrapper.find('.list__title').exists()).toBeTruthy();
      expect(wrapper.find('.list__cards').exists()).toBeTruthy();
      expect(wrapper.find('Card').exists()).toBeTruthy();
    });
  });
});
