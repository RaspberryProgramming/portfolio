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
        <textarea onInput={e=>{setContent(e.target.value)}} rows={256} cols={100}></textarea>
    </div>
    );
};

export default ArticleEditor;