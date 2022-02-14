import React from 'react';
import { Link } from 'react-router-dom';
import './css/About.css';
import Theater from './subcomponents/Theater';
import Card from './subcomponents/Card';
import GithubRepos from './subcomponents/GithubRepos';


class About extends React.Component {
  /**
   * About - About page
   * This component doesn't require any props to be passed down.
   * Using different components, about is a page that displays about information.
   */
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

        <Card title="College Experience" image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Marist_College_Seal_-_Vector.svg/1200px-Marist_College_Seal_-_Vector.svg.png">
          Throughout my college experience I've been able to improve my understanding of how computers work and how to design different software.
          I have completed my A.S. degree from Orange County Community College in Computer Science. In the past 2 years I've been working towards my
          Bachelors degree in computer science at Marist College in Poughkeepsie. Throughout my college experience I've been able to work with others in
          teams and I am currently as of the Fall 2021 Semester been working on a team for a Capstone Project which I can hopefully list on this website
          at the end of this semester.
        </Card>

        <Card title="Camerin Figueroa" image="/img/profile.webp">
          You can find a few of my projects on my
          <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noreferrer"> Github</a> or look through a list of projects on this website
          at the <Link to="/github"> Github Page</Link>. You can email me at <a href="mailto:cam@camscode.com">cam@camscode.com</a>. You can also find more
          social media below, just click the image and it'll bring you to the selected website.
        </Card>

        <Card title="Github"link="/github">
          <p>You can access a list of github repositories that I've created directly on this site.</p>
          <Link className='btn' to='/github'>Learn More</Link>
        </Card>



        <div className="social">

          <div className="title">
            Social Media:
          </div>

          <div className="links">

            <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/github.webp" alt="Github"/>
            </a>

            <a href="https://www.linkedin.com/in/camerin-figueroa-2662bb157/" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/linkedin.webp" alt="LinkedIn"/>
            </a>

            <a href="https://www.hackerrank.com/figueroa0609" target="_blank" rel="noreferrer" className="link">
              <img src="/img/hackerrank.webp" alt="Hacker Rank"/>
            </a>
            <a href="https://app.hackthebox.eu/profile/734741" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/hackthebox.webp" alt="Hack The Box"/>
            </a>
            <a href="https://www.udemy.com/user/camerin-figueroa/" target="_blank" rel="noreferrer" className="link">
              <img src="/img/udemy.webp" alt="Udemy"/>
            </a>

          </div>

        </div>

      </div>
    );
  }
}

export default About;