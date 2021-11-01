import React from 'react';
import './css/Articles.css';

const Article = ({article}) => {
    return (
        <div>
            <div>{article.title}</div>
            <div>{article.desc}</div>
            <div>{article.contents}</div>
        </div>
        );
}

export default Article;