import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About Me
      </Link>
      <Link to="/github">
        Github Repos
      </Link>
      <Link to="/youtube">
        Youtube Videos
      </Link>
    </div>
  );
}


export default Navigation;
