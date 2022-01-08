import React from 'react';
import '../css/ProgressBar.css';

class ProgressBar extends React.Component {
    render () {
        let pg = document.getElementById("ProgressBar");

        let width = 0;

        if (pg !== null) {
        
            width = pg.offsetWidth*(this.props.progress/100);

        }


        return (
            <div className="ProgressBar" id="ProgressBar">
                <div style={{width:width+"px"}} className="Bar"></div>
            </div>
        );
    }
};

export default ProgressBar;