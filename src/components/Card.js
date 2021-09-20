import React from 'react';
import './css/Card.css';

const Card = (props) => {
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