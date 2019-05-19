import React from 'react';
import { shallow } from 'enzyme';

import Board from '../../../../../../client/javascripts/components/Board/Board';
import List from '../../../../../../client/javascripts/components/Board/List/List';

describe('<Board />', () => {
  describe('Rendering Tests', () => {
    const clonno = {
      boards: [{
        title: 'SomeTitle',
      }],
    };

    test('should render component', () => {
      const wrapper = shallow(<Board clonno={clonno} />);
      expect(wrapper.exists()).toBeTruthy();
    });

    test('should not render when board length is 0', () => {
      const clonnoWithoutBoards = { ...clonno };
      delete clonnoWithoutBoards.boards;

      const wrapper = shallow(<Board clonno={clonnoWithoutBoards} />);
      expect(wrapper.find('.board').exists()).toBeFalsy();
    });

    test('should render lists when present', () => {
      const clonnoWithLists = {...clonno};
      clonnoWithLists.boards[0].lists = [{
        title: 'List title',
        cards: [],
      }];
      const wrapper = shallow(<Board clonno={clonnoWithLists} />);
      expect(wrapper.find('.board').exists()).toBeTruthy();
      expect(wrapper.find('.board__name').exists()).toBeTruthy();
      expect(wrapper.find(List)).toHaveLength(1);
    });
  });
});
