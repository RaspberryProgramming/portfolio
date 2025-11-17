import React from 'react';
import '../css/Topic.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    /**
     * Topic - A window to contain topics for the intro component. Topic requires a title and some 
     * jsx passed between the two Card tags as props.
     * 
     * title - title that will be displayed at the top of the card
     * children - jsx that will be displayed in the content of the card
     * background - a url to the background image
     * 
     */

    return (
        <div
            className="topic"
            style={{backgroundImage: props.background ? `url(${props.background})`:''}}
            >
            <div className="content">
                <Link to={props.link}><h1 className="title">{props.title}</h1></Link>
                <div className="children">
                    {props.children}
                </div>
                <Link className="btn" to={props.link}>Learn More</Link>
            </div>
        </div>
    );
};

export default Card;