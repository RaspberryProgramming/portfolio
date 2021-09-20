import React from 'react';
import { connect } from 'react-redux';
import './css/Github.css';
import {getRepos} from '../actions';
import Theater from './Theater';
import space from '../img/space.webp';

class Github extends React.Component {

  componentDidMount() {
    document.title = "Github Repos";
    if (!this.props.repos) {
      this.props.getRepos();
    }
    
  }

  renderRepos() {

    if (this.props.repos) {
      const render = this.props.repos.map((repo) =>{
        return (
          <div className="repo" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="title">{repo.name}</a>
            <div className="content">
              <p className="description">{repo.description ? repo.description : "No Description"}</p>
              { 
                repo.homepage ?
                  <a href={repo.homepage} target="_blank" rel="noreferrer" className="website"> Project Website </a>:
                  ""
              }
            </div>
          </div>
          
        );
      });
      return <div className="repo-list">{render}</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div className="Github">
        <Theater
          title="Github"
          description="This is a list of projects that I've uploaded to github. 
            You can check them out, fork them, and maybe give them a 
            star. Any projects that have a website will have a button 
            that will bring you right to the site"
          background={space}
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
  return { repos: state.github.repos};
}

export default connect(mapStateToProps, { getRepos })(Github);