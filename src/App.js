import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
