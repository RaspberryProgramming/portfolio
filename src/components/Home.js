import React from 'react';
import './css/Home.css';

const Home = (props) => {
  return (
    <div className="Home">
      <div className="theater">
        <div className="theater-bg" />
        <div className="theater-content">
          <h1>Welcome to my Portfolio</h1>
          <p>
            This website helps you access the projects that I've worked on. You can navigate
            at the top to different locations in the site. Within you can find information about me,
            my github repositories, and some youtube videos I've posted. This website is coded with
            React/Redux and hosted over Vercel. You can email me at <a href="mailto:camerin@camsprojects.online">camerin@camsprojects.online</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
