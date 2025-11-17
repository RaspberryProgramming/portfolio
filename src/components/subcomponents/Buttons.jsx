import React, { useState } from 'react';
import '../css/Buttons.css';
import { ArrowUpShort, ArrowDownShort } from 'react-bootstrap-icons';

/**
 * Buttons - set of button components that are reusable throughout the app.
 */

export const ToggleButton = ({
        defVal=true,
        icons=[<ArrowUpShort/>, <ArrowDownShort/>],
        text="",
        clickAction=()=>{}
    }) => {
    /**
     * ToggleButton - A button component for making a toggle button
     *   defVal: default value, true/false
     *   icons: array of two jsx values that are displayed depending on value
     *   text: text next to toggle button
     *   clickAction: function that will run when clicked. value is passed to this function.
     */

    const [value, setValue] = useState(defVal);

    return (
        <div className="btn toggle" onClick={()=>{setValue(!value); clickAction(value);}} >
            <div className={value?'on':'off'}> {icons[0]} </div>
            <div className={value?'off':'on'}> {icons[1]} </div>
            {text}
        </div>
    );    
};

export const Button = ({children, onClick=()=>{}, href=null, className=""}) => {
    if (href === null) {
        return (
            <button onClick={onClick} className={'btn '+ className}>
                {children}
            </button>
        );
    } else {
        return (
            <a onClick={onClick} href={href} className={'btn '+className}>
                {children}
            </a>
        );
    }
}