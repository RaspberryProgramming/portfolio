import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./css/App.css";
import Navigation from './Navigation';
import Home from './Home';
import Github from './Github';
import About from './About';
import Intro from './Intro';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/github" render={(props) => <Github {...props} />} />
          <Route path="/about" component={About} />
          <Route path="/intro" component={Intro} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
