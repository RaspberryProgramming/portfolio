import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./css/App.css";
import Navigation from './Navigation';
import Github from './Github';
import Articles from './Articles';
import About from './About';
import Intro from './Intro';
import Bai from './Bai';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/github" render={(props) => <Github {...props} />} />
            <Route path="/about" component={About} />
            <Route path="/articles" component={Articles} />
            <Route path="/bai" component={Bai} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
