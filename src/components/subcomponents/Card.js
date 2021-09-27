import React from 'react';
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
    return (
        <div className="card">
            <div>
                <div className="title">{props.title}</div>
                <div className="content">
                    {props.children}
                </div>
            </div>
            <img className={props.image ? "show" : ""} src={props.image} alt={props.title}/>
        </div>
    );    
};

export default Card;