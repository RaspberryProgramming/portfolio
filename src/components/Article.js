import React, { useEffect, useState } from 'react';
import Theater from './subcomponents/Theater';
import './css/Articles.css';

const Article = ({article}) => {
    const [show, setShow] = useState("");
    const [currArticle, setCurrArticle] = useState("");

    useEffect(()=>{
        if (currArticle === ""){
            console.log("A");
            if (show === "") {
                setCurrArticle(article);
                setShow("open");
                setTimeout(() =>{
                    setShow("show");
                }, 1024)
            } else {
                setShow("");
            }
        } else if (currArticle !== article) {
            console.log("B");
            setCurrArticle(article);
            setShow("close");
            setTimeout(()=>{
                setShow("");
                setTimeout(()=>{
                    setShow("open");
                    setTimeout(() =>{
                        setShow("show");
                    }, 1024);
                }, 1024);
            }, 24);
        }
    });
    
    let linkProcessor = (text) => {
        /**
         * Given some text, processes and returns jsx with any link represented as an anchor
         */

        let output = [""]; // Stores all text in a list
        let loc = 0; // Stores the current location in output that we're working with

        for (let i = 0; i < text.length; i++) { // Iterate through the entire text string
            if (text.slice(i, i+4) === "http"){ // slice from i to 4 chars plus and check for http
                let x = i; // store i in x so the location is not modified

                for (i; text[i] !== " " && i < text.length; i++){} // iterate until we find the end of the link denoted by a space
                
                if (output[loc] !== "") { // if the current output location isn't empty, increment loc
                    loc++;
                }

                // Put anchor for link into output list
                output[loc] = <a key={i} href={text.slice(x, i)}>{text.slice(x, i)}</a>;
                output[++loc] = ""; // Create new location in output with empty string

            } else {
                // Append current char to output
                output[loc] += text[i];

            }
        }

        // Return the output
        return output;
    };

    let articleFormatter = (text) => {
        let output = []; // Used to store separate formatted text
        let type = []; // Parallel to output list to signify format type
        let ind = 0; // Denote index of output
        let tick=false; // used to check if we're currently in formatted text.
        let delimiters = ['', '`', '*', '~']; // Denotes characters used to format

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
            
            let text = linkProcessor(output[i]); // Process links
            
            if (type[i] === 0){ // Return default text type

                return <div key={i}>{text}</div>;

            } else if(type[i] === 1) { // Return Code text type

                return <div className="code" key={i}>{text}</div>;

            } else if (type[i] === 2) {

                return <div className="h1" key={i}>{text}</div>;

            } else if (type[i] === 3) {

                return <li className="li" key={i}>{text}</li>;

        
            } else {
                return <div key={i}></div>;
            }
        });
        
    };
    
    return (
        <div className={"article " + show}>
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