import React from 'react';
import '../css/Theater.css';

const Theater = (props) => {
    /**
     * Theater - A short display and description of the page
     * 
     * The theater takes a title and description prop which is displayed in the center of the Theater component
     * Optional props include background and extraClasses
     * 
     * Required props:
     *  title - title for the page
     *  description - desription of the page which can be jsx
     * 
     * Optional props:
     *  extraClasses - a string containing extra classes to apply to the theater such as h-50v, h-100
     *  backgroundImage - a new background image in the form of a path to the image. This image should
     *      exist in the public directory of the project unless provided by remove service. Example: <Theater ... backgroundImage="/img/background.webp"/>
     */
    return (
        <div className={`theater ${props.extraClasses ? props.extraClasses:''}`}>
            <div className="theater-bg" style={props.background ? {backgroundImage: `url(${props.background})`} : {}}/>
            <div className="theater-content">
                <h1>{props.title}</h1>
                <div className="description">
                    {props.description}
                </div>
            </div>
        </div>
        
    );
};

export default Theater;