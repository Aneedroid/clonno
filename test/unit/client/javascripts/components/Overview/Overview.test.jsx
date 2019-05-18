import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'semantic-ui-react';

import Overview from '../../../../../../client/javascripts/components/Overview';

describe('<Overview />', () => {
  describe('Rendering Tests', () => {
    test('should render component', () => {
      const wrapper = shallow(<Overview title={'Amazee!'} subTitle={'Veryy amazeee!'} />);
      expect(wrapper.exists()).toBeTruthy();
      expect(wrapper.find('.overview-container').exists()).toBeTruthy();
      expect(wrapper.find(Header)).toHaveLength(2);
    });
  });
});
