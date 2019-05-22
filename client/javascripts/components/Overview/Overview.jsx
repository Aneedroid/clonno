import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Overview.style.scss';

const Overview = ({ title, subTitle }) => {
  return (
    <div className="overview-container" align="center">
      <Header as="h1" inverted color="blue" block>
        { title }
      </Header>
      <Header size="tiny" >
        { subTitle }
      </Header>
    </div>
  );
};

Overview.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Overview;