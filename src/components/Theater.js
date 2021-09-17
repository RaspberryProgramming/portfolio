import React from 'react';
import './css/Theater.css';

const Theater = (props) => {
    
    return (
        <div className={`theater ${props.peak ? 'peak':''}`}>
            <div className="theater-bg" style={props.background ? {backgroundImage: `url(${props.background})`} : {}}/>
            <div className="theater-content">
                <h1>{props.title}</h1>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
        
    );
};

export default Theater;