import React from 'react';
import './css/Articles.css';

const Article = ({article}) => {
    let articleFormatter = (text) => {
        let output = [""];
        let type = [];
        let ind = 0;
        let tick=false;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '`') {
                if (tick) {
                    //output[ind++] += text[i]
                    output[++ind] = ""
                    tick = false;
                } else {
                    //output[++ind] = text[i]
                    type.push(1);
                    output[++ind] = ""
                    tick = true;
                }
                
            } else {
                if (output.length > type.length) {
                    type.push(0);
                    output[ind] = ""
                }
                output[ind] += text[i]
            }
        }
        let code = [...output.keys()].map((i)=>{
            console.log(output[i], type[i]);
            if (type[i] == 0){
                return <div key={i}>{output[i]}</div>;
            } else {
                return <div className="code" key={i}>{output[i]}</div>;
            }
        });
        return code
        
    };

    return (
        <div>
            <div>{article.title}</div>
            <div>{article.desc}</div>
            <div>{articleFormatter(article.contents)}</div>
        </div>
        );
}

export default Article;