import React from 'react';
import { connect } from 'react-redux';
import './css/Articles.css';
import Article from './Article';
import Listing from './subcomponents/Listing';
import { getArticles } from '../actions';
import { useParams } from 'react-router-dom';

const withParams = (Component) => {
  return ()=><Component params={useParams()} />;
}

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

  article(articleId) {
    if (this.props.articles.length > 0) {
      return <Article article={this.props.articles[articleId]}/>;
    } else {
      return <div></div>;
    }
  }

  render() {
    
    return (
      <div className="Articles">
          {this.props.params.id ? this.article(this.props.params.id):''}
          <h1>Articles</h1>
          {this.renderArticles()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { articles: state.articles.articles};
}

export default withParams(connect(mapStateToProps, { getArticles })(Articles));

