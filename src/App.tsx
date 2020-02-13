import React from 'react';
import GlobalStyle from './theme/global.style';
import RouteSwitch from './components/RouteSwitch';

import {
  HOME_PAGE,
} from './routes'

import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RouteSwitch
          routes={{
            [HOME_PAGE]: HomePage,
          }}
        />
      </div>
    </>
  );
}

export default App;
