import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/App.css";
import "./css/Buttons.css";
import Navigation from './Navigation';
import Github from './Github';
import Articles from './Articles';
import ArticleEditor from './ArticleEditor';
import About from './About';
import Intro from './Intro';
import Bai from './Bai';
import DadjokesAI from './DadjokesAI';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="app-content">
          <Routes>
            <Route path="/" exact element={<Intro />} />
            <Route path="/github" element={<Github />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Articles />} />
            <Route path="/bai" element={<Bai />} />
            <Route path="/dadjokes" element={<DadjokesAI />} />
            <Route path="/articleEditor" element={<ArticleEditor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
