import React from 'react';
import { connect } from 'react-redux';
import './css/Github.css';
import {getRepos} from '../actions';
import Theater from './Theater';
import space from '../img/space.webp';

class Github extends React.Component {

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <p>Hello World</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { repos: state.github.repos};
}

export default connect(mapStateToProps, { getRepos })(Github);