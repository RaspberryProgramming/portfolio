import React from 'react';
import Theater from './subcomponents/Theater';
import './css/Articles.css';

const Article = ({article}) => {
    let articleFormatter = (text) => {
        let output = [];
        let type = [];
        let ind = 0;
        let tick=false;
        let delimiters = ['', '`', '*', '~'];

        for (let i = 0; i < text.length; i++) { // Iterate through input
            if (delimiters.indexOf(text[i]) !== -1) { // Detect Code Delimiter
                
                if (tick) { // Close the code section
                    output[++ind] = ""
                    tick = false;

                } else { // Start a new code section
                    type.push(delimiters.indexOf(text[i]));

                    if (!output[ind]) {
                        
                        output[ind] = "";

                    } else if (output.length < type.length) {
                        output[++ind] = "";
                    }
                    
                    tick = true;

                }
                
            } else { // Append text to output

                if (output.length > type.length) { // If this is the beggining of a default text type

                    type.push(0);
                    output[ind] = ""

                }



                output[ind] += text[i]
            }
        }

        return [...output.keys()].map((i)=>{ // Format text and return as jsx
            
            
            if (type[i] === 0){ // Return default text type

                return <div key={i}>{output[i]}</div>;

            } else if(type[i] === 1) { // Return Code text type

                return <div className="code" key={i}>{output[i]}</div>;

            } else if (type[i] === 2) {

                return <div className="h1" key={i}>{output[i]}</div>;

            } else if (type[i] === 3) {

                return <li className="li" key={i}>{output[i]}</li>;

        
            } else {
                return <div key={i}></div>;
            }
        });
        
    };

    return (
        <div className="article">
            <Theater
            title={article.title}
            description={article.desc}
            extraClasses="h-50v"
            />
            <div className="content">{articleFormatter(article.contents)}</div>
        </div>
        );
}

export default Article;