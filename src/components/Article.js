import React from 'react';
import './css/Articles.css';

const Article = ({match}) => {
    return (
        <div>
            "Article: " {match}
        </div>
        );
}

export default Article;