import React from 'react';
import { Outlet } from 'react-router-dom';
import Page from './components/parts/Page';

const App = () => {
  return (
    <div className="App">
      <Page>
        <Outlet />
      </Page>
    </div>
  );
}

export default App;
