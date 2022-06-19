import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Buttons.css';
import {ArrowUpShort, ArrowDownShort} from 'react-bootstrap-icons';

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
     * ToggleButton - A subcomponent for making lists of content, mostly to make a list of links.
     */

    const [value, setValue] = useState(defVal);

    return (
        <div className="btn toggle" onClick={()=>{setValue(!value); clickAction(value);}} >
            <div className={value?'on':'off'}> {icons[0]} </div>
            <div className={value?'off':'on'}> {icons[1]} </div>
        </div>
    );    
};