import React from 'react';
import Overview from 'client/javascripts/components/Overview/Overview';

import './App.css';

const App = () => {
  return (
    <div>
      <Overview title={'Clonno'} subTitle={'A minimalist list making application for team collaboration activities'}/>
      {/* <Nav/> */}
    </div>
  );
};

export default App;
