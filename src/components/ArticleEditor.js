import React, { useState } from 'react';
import Article from './Article';
import "./css/ArticleEditor.css";

const ArticleEditor = (props) => {
    const [content, setContent] = useState("Hello World");

    let article = {
        "id":"0",
        "title": "Article Editor",
        "desc":"This is a place to edit articles",
        "contents": content
    };

    return (
    <div className="ArticleEditor">
        <Article article={article}/>
        <input type="text" onInput={e=>{setContent(e.target.value)}}/>
    </div>
    );
};

export default ArticleEditor;