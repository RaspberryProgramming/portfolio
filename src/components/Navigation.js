import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function App() {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/github">
            Github Repos
          </Link>
        </li>
        <li>
          <Link to="/youtube">
            Youtube Videos
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default App;
