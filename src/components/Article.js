import React, { useEffect, useState } from 'react';
import Theater from './subcomponents/Theater';
import './css/Articles.css';

const Article = ({article}) => {
    
    const [show, setShow] = useState("");
    const [currArticle, setCurrArticle] = useState("");

    useEffect(()=>{
        if (currArticle === ""){ // If no articles have been opened
            if (show === "") {
                // Set the current article and initiate the open animation
                setCurrArticle(article);
                setShow("open");
                
                // Once the animation runs, open the entire article
                setTimeout(() =>{
                    setShow("show");
                }, 1024)
            }

        } else if (currArticle !== article) { // If we've changed articles
            // Change currArticle to the actual current article and initiate close animation
            setCurrArticle(article);
            setShow("close");

            // Step through the close animation, open animation, and fully opening the article
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
    }, [currArticle, article, show]);
    
    let linkProcessor = (text) => {
        /**
         * Given some text, processes and returns jsx with any link represented as an anchor
         */
        let output = [""]; // Stores all text in a list
        let loc = 0; // Stores the current location in output that we're working with
        let tmp;
        let i = 0;

        while (i < text.length) { // Iterate through the entire text string
            if (text.slice(i, i+4) === "http"){ // slice from i to 4 chars plus and check for http
                let x = i; // store i in x so the location is not modified

                for (let y = i; ![" ", "\n"].includes(text[y]) && y < text.length; y++){
                    i=y;
                } // iterate until we find the end of the link denoted by a space
                
                if (output[loc] !== "") { // if the current output location isn't empty, increment loc
                    loc++;
                }
                tmp = text.slice(x, i+1);
                // Put anchor for link into output list
                output[loc] = <a key={i} href={tmp}>{tmp}</a>;
                output[++loc] = ""; // Create new location in output with empty string
            } else {
                // Append current char to output
                output[loc] += text[i];

            }
            i++;
            
        }

        // Return the output
        return output;
    };

    let newLineProcessor = (text) => {
        /**
         * Given some text, processes and returns jsx with line breaks
         */
        let tmp;
        let output = [""]; // Stores all text in a list
        let loc = 0; // Stores the current location in output that we're working with
        for (let i = 0; i < text.length; i++) { // Iterate through the entire text string
            if (!React.isValidElement(text[i])) {
                tmp = [""];
                loc = 0;
                for (let j = 0; j < text[i].length; j++){
                    
                    if (text[i].slice(j, j+1) === "\n"){ // slice from i to 4 chars plus and check for http
                        if (tmp[loc] !== "") { // if the current output location isn't empty, increment loc
                            loc++;
                        }
                        tmp[loc] = <br key={i+j}/>;
                        tmp[++loc] = "";

                    } else {
                        // Append current char to output
                        tmp[loc] += text[i][j];

                    }
                }
                tmp[++loc] = "";
            } else {
                tmp = text[i]
            }
    
            output.push(tmp)
        }
 
         // Return the output
         return output;
    };

    let articleFormatter = (text) => {
        let output = [""]; // Used to store separate formatted text
        let type = []; // Parallel to output list to signify format type
        let ind = 0; // Denote index of output
        let tick=false; // used to check if we're currently in formatted text.
        let delimiters = ['', '`', '*', '~']; // Denotes characters used to format
        let tmp;

        for (let i = 0; i < text.length; i++) { // Iterate through input
            if (delimiters.indexOf(text[i]) >= 0) { // Detect Code Delimiter

                if (tick) { // Close the code section
                    output[++ind] = ""
                    tick = false;
                    tmp = "";

                } else { // Start a new code section    
                    type.push(delimiters.indexOf(text[i]));

                    if (output.length < ind) {
                        
                        output[ind] = "";

                    } else if (output.length < type.length) {
                        output[++ind] = "";
                    }
                    tmp = "";
                    tick = true;

                }
                
            } else { // Append text to output

                if (output.length > type.length) { // If this is the beggining of a default text type

                    type.push(0);
                    //output[ind] = text[i]

                } else if (output.length < type.length) {
                    output[++ind] = ""
                }

                tmp = text[i]
            }

            output[ind] += tmp
        }

        return [...output.keys()].map((i)=>{ // Format text and return as jsx
            
            let text = linkProcessor(output[i]); // Process links
            text = newLineProcessor(text);
            
            if (type[i] === 0){ // Return default text type

                return <div key={i}>{text}</div>;

            } else if(type[i] === 1) { // Return Code text type

                return <div className="code" key={i}>{text}</div>;

            } else if (type[i] === 2) {

                return <div className="section-title" key={i}>{text}</div>;

            } else if (type[i] === 3) {

                return <li key={i}>{text}</li>;

        
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