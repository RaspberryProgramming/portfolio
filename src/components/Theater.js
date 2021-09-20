import React from 'react';
import './css/Theater.css';

const Theater = (props) => {
    
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