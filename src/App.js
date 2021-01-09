import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { theme } from './styles';

import './App.css';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
