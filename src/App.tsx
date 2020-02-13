import React from 'react';
import GlobalStyle from './theme/global.style';
import RouteSwitch from './components/RouteSwitch';

import {
  HOME_PAGE,
  NEW_ACCOUNT_PAGE,
  DISQUALIFICATION_PAGE,
} from './routes'

import HomePage from './pages/HomePage/HomePage';
import NewAccountPage from './pages/NewAccountPage/NewAccountPage';
import DisqualificationPage from './pages/DisqualificationPage/DisqualificationPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <RouteSwitch
          routes={{
            [HOME_PAGE]: HomePage,
            [NEW_ACCOUNT_PAGE]: NewAccountPage,
            [DISQUALIFICATION_PAGE]: DisqualificationPage,
          }}
        />
      </div>
    </>
  );
}

export default App;
