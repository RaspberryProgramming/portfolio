import React from 'react';
import { connect } from 'react-redux';
import {getRepos, getUser, getRepoLanguages} from '../../actions';
import _ from 'lodash';

class GithubRepos extends React.Component {

    componentDidMount() {

    document.title = "Github Repos";

    if (!this.props.repos) {

      this.props.getUser(this.props.username); // Receive the repos at start
      this.props.getRepos(this.props.username); // Receive the repos at start

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
          let updated = (new Date (repo.updated_at)).toLocaleString();
          let created = (new Date (repo.created_at)).toLocaleString();

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
              <div className="times">
                  Last Updated: {updated}
                  <br/>
                  Created: {created}
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
        return (<div>{this.renderRepos()}</div>);
    }

}


const mapStateToProps = (state) => {
    return { repos: state.github.repos, repoLanguages: state.github.repoLanguages};
}
  
export default connect(mapStateToProps, { getRepos, getRepoLanguages, getUser })(GithubRepos);