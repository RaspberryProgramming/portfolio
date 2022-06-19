import React from 'react';
import { connect } from 'react-redux';
import { getRepos, getUser, getRepoLanguages, nextPage, setSortValue } from '../../actions';
import { ToggleButton } from './Buttons';

class GithubRepos extends React.Component {

  perPage = 5;
  sortOptions = [
    // text: displayed text, value: value used for sorting
    {text: "Created Date", value: "created_at"},
    {text: "Last Pushed", value: "pushed_at"},
    {text: "Name", value: "name"},
    {text: "Number of Forks", value: "forks"},
    {text: "Size", value: "size"},
    {text: "Last Updated", value: "updated_at"},      
  ];
  
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

  objArrayBubbleSort(arr, value) {
    /**
     * arrayBubbleSort
     */
    let unsorted;
    let tmp;

    do {
      unsorted = false;

      for (let i = 0; i < arr.length-1; i++) {
        if (
          (value.asc && arr[i][value.value] > arr[i+1][value.value]) // Ascending
          || (!value.asc && arr[i][value.value] < arr[i+1][value.value]) // Descending
          ) {
          tmp = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = tmp;

          unsorted = true;
        }
      }


    } while (unsorted);

    return arr;

  }

  renderRepos() {

    if (this.props.repos) { // If the repos have been received

      if (this.props.repos.length > 0) {
        // Render each repo
        let repos = this.props.single ? [this.props.repos[0]] : this.props.repos

        let pages = this.roundUp(repos.length/this.perPage);

        let sortedRepos = this.objArrayBubbleSort([...repos], this.props.sortedValue);

        const render = sortedRepos.slice(0, this.props.page*this.perPage).map((repo) =>{
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
            <div className="sort-menu">
              <div className="select-menu">
                <p>Sort By:&ensp;</p>
                <select className="dropdown-list" onChange={v=>{
                  this.props.setSortValue({
                    ...this.props.sortedValue,
                    value: v.target.value
                  });
                  }}>
                  {
                    this.sortOptions.map(option=>{
                      return (
                        <option
                          value={option.value}
                          key={option.value}
                          selected={option.value === this.props.sortedValue.value}
                          >
                            {option.text}
                        </option>);
                    })
                  }
                </select>
              </div>
              &ensp;
              <ToggleButton defVal={false} clickAction={(val)=>{
                console.warn(val);
                this.props.setSortValue({
                  ...this.props.sortedValue,
                  asc: val
                });
                }} />
            </div>

            {render}
            
            {this.props.page < pages ?
              <div className="btn mar-la mar-ra" onClick={()=>this.props.nextPage()}>Load More ({this.props.page}/{pages})</div>
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
    return {
      repos: state.github.repos, 
      repoLanguages: state.github.repoLanguages,
      page: state.github.page,
      sortedValue: state.github.sortedValue
    };
}
  
export default connect(mapStateToProps, {
  getRepos,
  getRepoLanguages,
  getUser,
  nextPage,
  setSortValue
})(GithubRepos);