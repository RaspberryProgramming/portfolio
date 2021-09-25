import React from 'react';
import { connect } from 'react-redux';
import './css/Github.css';
import {getRepos, getUser, getRepoLanguages} from '../actions';
import Theater from './subcomponents/Theater';
import _ from 'lodash';

class Github extends React.Component {
  /**
   * Github - github repository list of a specific user.
   * Github doesn't take any props and is
   * a main component that will be directly displayed in the App component.
   * Github will run an action that grabs a list of repositories, then displays them.
   * Each language is requested once and listed for each repository.
   */

  username = "RaspberryProgramming";

  componentDidMount() {

    document.title = "Github Repos";

    if (!this.props.repos) {

      this.props.getUser(this.username); // Receive the repos at start
      this.props.getRepos(this.username); // Receive the repos at start

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

      if (this.props.repos.length > 0) {
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

        return <div className="repo-list">{render}</div>; // display the repo list with the rendered repos
      
      } else {

        return <div className="loading">User doesn't have any repositories</div>
      
      }

    }

    // Return nothing if repos haven't been received

    return <div className="loading"> Loading Repositories... </div>; // Return nothing if repos haven't been collected
  }

  render() {
    
    if (_.isEmpty(this.props.repoLanguages) && this.props.repos) {
      

      // Attempt to request languages for all repos once the list of repos is received
      this.props.repos.map((repo) => {

        this.props.getRepoLanguages(this.username, repo.name);
  
        return true;
  
      });

    }

    return (
      <div className="Github">

        <Theater
          title={this.username}
          description={
            <div>
              <img alt='avatar_pic' className="avatar" src={this.props.user ? this.props.user.avatar_url:''} />
              {this.props.user ? this.props.user.bio : ''}
            </div>
            }
          background="/img/space.webp"
          extraClasses="peak"
        />

        <div className="content">
          {this.renderRepos()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { repos: state.github.repos, repoLanguages: state.github.repoLanguages, user: state.github.user};
}

export default connect(mapStateToProps, { getRepos, getRepoLanguages, getUser })(Github);