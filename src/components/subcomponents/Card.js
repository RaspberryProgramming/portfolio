import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';

const Card = (props) => {
    /**
     * Card - A card box used to display information
     * Card requires a title and some jsx passed between the two Card tags as props.
     * You can add an image by adding an image prop in the form of a path to the file.
     * 
     * title - title that will be displayed at the top of the card
     * image - picture displayed next to the tag
     * children - jsx that will be displayed in the content of the card
     * 
     */

    let scrollToTop = () => {
        window.scrollTo(0,0);
    };

    return (
        <div className="card">
            <div>
                {props.link ?
                    <Link to={props.link} className="title" onClick={()=>scrollToTop()}>{props.title}</Link>
                    :<div className="title">{props.title}</div>
                }
                <div className="content-box">
                    {props.children}
                </div>
                {
                    props.skills &&
                    <div className="skill-row">
                        <div className="skills-label">Skills:</div>
                        <div className="skills">
                        {
                            props.skills?props.skills.map(language=><div className="skill" key={language}>{language}</div>):""
                        }
                        </div>
                    </div>
                }
            </div>
            <img className={props.image ? "show" : ""} src={props.image} alt={props.title}/>
        </div>
    );    
};

export default Card;