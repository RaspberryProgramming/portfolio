import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Github from './Github';
import About from './About';
import Social from './Social';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/github" component={Github} />
          <Route path="/about" component={About} />
          <Route path="/social" component={Social} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
