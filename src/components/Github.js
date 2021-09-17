import React from 'react';
import { connect } from 'react-redux';
import './css/Github.css';
import {getRepos} from '../actions';

class Github extends React.Component {

  componentDidMount() {
    this.props.getRepos();
    console.log(this.props.repos);
  }

  renderRepos() {

    if (this.props.repos) {
      const render = this.props.repos.map((repo) =>{
        console.log(repo);
        return (
          
          <a className="repo" href={repo.html_url}>
            <div className="title">{repo.name}</div>
            <p className="description">{repo.description ? repo.description : "No Description"}</p>
          </a>
          
        );
      });
      console.log(render);
      return <div className="repo-list">{render}</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div className="Github">
        <h1>Github</h1>
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