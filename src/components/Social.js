import React from 'react';
import { Link } from 'react-router-dom';
import './css/Social.css';
import Card from './subcomponents/Card';
import Theater from './subcomponents/Theater';


class Social extends React.Component {
  componentDidMount () {
    document.title = "Social Media";
  }

  render() {
    return (
      <div className="Social">
        <Theater
          title="Social Media"
          background="/img/social.webp"
          extraClasses="h-50v"
        />
        <div className="links">
          <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noreferrer">
            <img src="/img/github.webp"/>
          </a>

          <a href="https://www.linkedin.com/in/camerin-figueroa-2662bb157/" target="_blank" rel="noreferrer">
            <img src="/img/linkedin.webp"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;