import React from 'react';
import { Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import history from '../history';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
