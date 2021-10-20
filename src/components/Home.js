import React from 'react';
import Theater from './subcomponents/Theater';
import './css/Home.css';

const Home = (props) => {
  document.title = "Welcome to my Portfolio";
  const title = "Welcome to my Portfolio";
  const description = 
    <div>
      This website helps you access the projects that I've worked on. You can navigate
      at the top to different locations in the site. Within you can find information about me,
      my github repositories, and some youtube videos I've posted. This website is coded with
      React/Redux and hosted over Vercel. You can email me at <a href="mailto:cam@camcodes.com">cam@camcodes.com</a>.
    </div>;

  return (
    <div className="Home">
      <Theater title={title} description={description} extraClasses="h-100"/>
    </div>
  );
}

export default Home;
