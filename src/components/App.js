import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Github from './Github';

const App = (props) => {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/github" component={Github} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default App;
