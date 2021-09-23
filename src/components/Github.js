import React from 'react';
import { connect } from 'react-redux';
import './css/Github.css';
import {getRepos, getRepoLanguages} from '../actions';
import Theater from './subcomponents/Theater';
import _ from 'lodash';
class Github extends React.Component {

  componentDidMount() {

    document.title = "Github Repos";

    if (!this.props.repos) {

      this.props.getRepos(); // Receive the repos at start
    }
    
  }

  renderLanguages(name) {

    // Given that we've already received the repo's languages
    if (this.props.repoLanguages && this.props.repoLanguages[name]) {

      // Create a bubble for each language
      return Object.keys(this.props.repoLanguages[name]).map(language=>{

        return <div className="language" key={language}>{language}</div>; // Language bubble JSX

      });
    }

  }

  renderRepos() {

    if (this.props.repos) { // If the repos have been received

      // Render each repo
      const render = this.props.repos.map((repo) =>{

        return (
          <div className="repo" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="title">{repo.name}</a>
            <div className="content">
              <p className="description">{repo.description ? repo.description : "No Description"}</p>
              { 
                repo.homepage ? // If the repo has a homepage, render a button
                  <a href={repo.homepage} target="_blank" rel="noreferrer" className="website"> Project Website </a>:
                  ""
              }
            </div>
            <div className="languages">
              Languages:
                
                {
                  this.renderLanguages(repo.name) // Render each language for the repo
                }
            </div>
          </div>
          
        );
      });
      return <div className="repo-list">{render}</div>;
    }

    // Return nothing if repos haven't been received

    return <div></div>;
  }

  render() {
    
    if (_.isEmpty(this.props.repoLanguages) && this.props.repos) {
      

      // Attempt to request languages for all repos once the list of repos is received
      this.props.repos.map((repo) => {

        this.props.getRepoLanguages(repo.name);
  
        return true;
  
      });

    }

    return (
      <div className="Github">

        <Theater
          title="Github"
          description="This is a list of projects that I've uploaded to github. 
            You can check them out, fork them, and maybe give them a 
            star. Any projects that have a website will have a button 
            that will bring you right to the site"
          background="/img/space.webp"
          extraClasses="peak"
        />

        <div>
          {this.renderRepos()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { repos: state.github.repos, repoLanguages: state.github.repoLanguages};
}

export default connect(mapStateToProps, { getRepos, getRepoLanguages })(Github);