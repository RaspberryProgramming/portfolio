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

    let copyToClipboard = () => {
        navigator.clipboard.writeText(content).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    };

    return (
    <div className="ArticleEditor">
        <div id="toolbar" className="toolbar">
            <div className="btn" onClick={copyToClipboard()}>Copy to Clipboard</div>
        </div>
        <Article article={article}/>
        <textarea onInput={e=>{setContent(e.target.value)}}></textarea>
    </div>
    );
};

export default ArticleEditor;