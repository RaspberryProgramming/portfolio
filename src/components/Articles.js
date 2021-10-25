import React from 'react';
import './css/Articles.css';
import Theater from './subcomponents/Theater';
import Article from './Article';
import { Route, Link } from 'react-router-dom';


class Articles extends React.Component {
  /**
   * Articles - 
   */

  componentDidMount() {

    document.title = "Articles";
    
  }

  renderArticles() {
      
      return (
          <div>
              "Articles"
          </div>
      );
  }

  article(match) {
      return (
        <div>
            {match.params.id}
        </div>
        );
  }

  render() {

    return (
      <div className="Articles">
          <Theater
            title="Articles"
            description="Self written articles to help share information I've learned in the past."
            extraClasses="h-50v"
          />
          <Route path="/articles/:id" render={({match})=>{return this.article(match)}} />
          {this.renderArticles()}
      </div>
    );
  }
}


export default Articles;