import React from 'react';
import './css/Social.css';
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
            <img src="/img/github.webp" alt="Github"/>
          </a>

          <a href="https://www.linkedin.com/in/camerin-figueroa-2662bb157/" target="_blank" rel="noreferrer">
            <img src="/img/linkedin.webp" alt="linked in"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;