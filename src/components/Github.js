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
          <div className="repo">
            <div><a href={repo.html_url}>{repo.name}</a></div>
            <p>{repo.description}</p>
          </div>
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