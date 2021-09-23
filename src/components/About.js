import React from 'react';
import { Link } from 'react-router-dom';
import './css/About.css';
import Theater from './subcomponents/Theater';
import Card from './subcomponents/Card';


class About extends React.Component {
  componentDidMount () {
    document.title = "About";
  }

  render() {
    return (
      <div className="About">
        <Theater title="About" description="This page has information about me and about this site." extraClasses="h-50v" background="/img/sunset.webp"/>
        <Card title="Build with React" image="/img/react.webp">
          This website is created with <a href="https://reactjs.org/">React</a>, a javascript library for creating user interfaces and webapps.
          React uses a component based design to help developers create easily re-usable code, and to help streamline the development process.
          JSX is a part of react which makes it easy to design websites directly in javascript code.
        </Card>

        <Card title="Camerin Figueroa" image={"/img/profile.webp"}>
          I am a computer science student at Marist College in Poughkeepsie, NY. I'm closing in on my Bachelors Degree in Computer Science.
          I went to Orange County Community College for my Associates Degree in Computer Science. You can find a few of my projects on my
          <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noreferrer"> Github</a> or look through a list in the
          <Link to="/github"> Github Page</Link>. You can email me at <a href="mailto:camerin@camsprojects.online">camerin@camsprojects.online</a>
        </Card>
      </div>
    );
  }
}

export default About;