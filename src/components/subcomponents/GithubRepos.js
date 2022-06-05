import React from 'react';
import { connect } from 'react-redux';
import {getRepos, getUser, getRepoLanguages, nextPage} from '../../actions';

class GithubRepos extends React.Component {
    perPage = 5;

    componentDidMount() {

    document.title = "Github Repos";

    if (!this.props.repos) {

      this.props.getUser(this.props.username); // Receive the repos at start
      this.props.getRepos(this.props.username); // Receive the repos at start

    }
    
  }

  renderLanguages(name) {
    this.props.getRepoLanguages(this.props.username, name);

    // Given that we've already received the repo's languages
    if (this.props.repoLanguages && this.props.repoLanguages[name]) {

      // Create a bubble for each language
      return Object.keys(this.props.repoLanguages[name]).map(language=>{

        return <div className="language" key={language}>{language}</div>; // Language bubble JSX

      });
    }

  }

  roundUp(num) {
    return num%1 === 0? num : num-(num%1)+1
  }

  renderRepos() {

    if (this.props.repos) { // If the repos have been received

      if (this.props.repos.length > 0) {
        // Render each repo
        let repos = this.props.single ? [this.props.repos[0]] : this.props.repos

        let pages = this.roundUp(repos.length/this.perPage);

        const render = repos.slice(0, this.props.page*this.perPage).map((repo) =>{
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
              <div className="time">
                Last Updated: {updated}
              </div>
              <div className="time">
                Created: {created}
              </div>
            </div>
            
          );
        });
        
        return (
          <div className="repo-list">
            {render}
            {this.props.page < pages ?
              <div className="btn" onClick={()=>this.props.nextPage()}>Load More ({this.props.page}/{pages})</div>
              : ""
            }
          </div>
        ); // display the repo list with the rendered repos
      
      } else {

        return <div className="loading">User doesn't have any repositories</div>
      
      }

    }

    // Return nothing if repos haven't been received

    return <div className="loading"> Loading Repositories... </div>; // Return nothing if repos haven't been collected
  }

  render = () => {
      return (<div>{this.renderRepos()}</div>);
  }

}


const mapStateToProps = (state) => {
    return { repos: state.github.repos, repoLanguages: state.github.repoLanguages, page: state.github.page};
}
  
export default connect(mapStateToProps, { getRepos, getRepoLanguages, getUser, nextPage})(GithubRepos);