import React from 'react';
import { connect } from 'react-redux';
import './css/Articles.css';
import Theater from './subcomponents/Theater';
import Article from './Article';
import Listing from './subcomponents/Listing';
import { getArticles } from '../actions';
import { Route, Link } from 'react-router-dom';


class Articles extends React.Component {
  /**
   * Articles - 
   */

  componentDidMount() {

    document.title = "Articles";
    this.props.getArticles();
    
  }

  renderArticles() {


    const render = this.props.articles.map((article) => {
      console.log(article);
      return (
        <Listing title={article.title} link={"/articles/"+article.id} key={article.id}>
          <div className="description">
            {article.desc}
          </div>
        </Listing>
      );
    });

    return (
        <div className="listings">
            {render}
        </div>
    );
  }

  article(match) {
    console.log(this.props.articles)
    return <Article article={this.props.articles[match.params.id]}/>;
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

const mapStateToProps = (state) => {
  return { articles: state.articles.articles};
}

export default connect(mapStateToProps, { getArticles })(Articles);

