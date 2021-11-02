import React from 'react';
import { connect } from 'react-redux';
import './css/Articles.css';
import Article from './Article';
import Listing from './subcomponents/Listing';
import { getArticles } from '../actions';
import { Route } from 'react-router-dom';


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
    if (this.props.articles.length > 0) {
      return <Article article={this.props.articles[match.params.id]}/>;
    } else {
      return <div></div>;
    }
  }

  render() {

    return (
      <div className="Articles">
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

