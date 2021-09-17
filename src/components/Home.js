import React from 'react';
import Theater from './Theater';
import './css/Home.css';

const Home = (props) => {

  const title = "Welcome to my Portfolio";
  const description = 
    <p>
      This website helps you access the projects that I've worked on. You can navigate
      at the top to different locations in the site. Within you can find information about me,
      my github repositories, and some youtube videos I've posted. This website is coded with
      React/Redux and hosted over Vercel. You can email me at <a href="mailto:camerin@camsprojects.online">camerin@camsprojects.online</a>.
    </p>;

  return (
    <div className="Home">
      <Theater title={title} description={description} />
    </div>
  );
}

export default Home;
