import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';
import { HouseDoor, FileEarmarkPerson, Github, Youtube } from 'react-bootstrap-icons';

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <Link to="/">
        Home
        <HouseDoor />
      </Link>
      <Link to="/github">
        Github Repos
        <Github />
      </Link>
      <Link to="/youtube">
        Youtube Videos
        <Youtube />
      </Link>
      <Link to="/about">
        About
        <FileEarmarkPerson />
      </Link>
    </div>
  );
}


export default Navigation;
