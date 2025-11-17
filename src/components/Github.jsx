import React from 'react';
import { connect } from 'react-redux';
import './css/Github.css';
import Theater from './subcomponents/Theater';
import GithubRepos from './subcomponents/GithubRepos';


class Github extends React.Component {
  /**
   * Github - github repository list of a specific user.
   * Github doesn't take any props and is
   * a main component that will be directly displayed in the App component.
   * Github will run an action that grabs a list of repositories, then displays them.
   * Each language is requested once and listed for each repository.
   */

  username = "RaspberryProgramming";

  

  render() {
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
          <GithubRepos username={this.username} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.github.user};
}

export default connect(mapStateToProps, {})(Github);