import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Listing.css';

const Listing = (props) => {
    /**
     * Listing - A subcomponent for making lists of content, mostly to make a list of links.
     * 
     * 
     * title - The title of the listing
     * children - JSX that is necessary in the content of the component
     */
    return (
        <div className="listing">
            <Link to={props.link}>
                <div className="title">{props.title}</div>
                <div className="content">
                    {props.children}
                </div>
            </Link>
        </div>
    );    
};

export default Listing;