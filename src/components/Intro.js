import React from 'react';
import { connect } from 'react-redux';
import './css/Intro.css';
import {hideNavigation, showNavigation} from '../actions';
import Topic from './subcomponents/Topic';
import { ChevronDoubleUp, ChevronDoubleDown } from 'react-bootstrap-icons';

class Intro extends React.Component {
  constructor() {
    super();

    // Defaults for the state
    this.state = {
        start: false,
        prev: 'previous',
        curr: 'current',
        next: 'next',
        prevLoc: -1,
        currLoc: 0,
        nextLoc: 1,

    };
  }

  handleKey = (e) => {
      /**
       * handleKey - Handle key events and hand off to handleInput
      */
    switch(e.key) {
        case "ArrowUp": // If received an up Arrow
            this.handleInput('up');
            break;
        case "ArrowDown": // If received a down Arrow
            this.handleInput('down')
            break;
        default:
            break;
    }
  }

  handleInput = (input) => {
    /**
     * handleInput - handle input events. A majority of the functionality is to scroll through Intro topics
     */

    // Up Arrow
    if (input === "up" && this.state.currLoc > 0) {

        // Activate animation going to next topic
        this.setState({
            prev: 'current',
            curr: 'next',
        });

        // Wait 500 ms until the transition is finished
        setTimeout(()=>{
            // Once timeout finishes, place topics in correct location without transition
            let prevloc = this.state.prevLoc-1;
            let currloc = this.state.currLoc-1;
            let nextloc = this.state.nextLoc-1;
            this.setState({
                prev: 'previous notrans',
                curr: 'current notrans',
                prevLoc: prevloc, // Move correct topics into necessary divs
                currLoc: currloc,
                nextLoc: nextloc,
            });

            // wait another 20 ms to 
            setTimeout(()=>{
            this.setState({ // remove notrans from each div
                prev: 'previous',
                curr: 'current',
            });

            }, 20);

        }, 500);
    } else if (input === "down" && this.state.nextLoc < this.topics.length) {
        // Activate transition going to previous topic
        this.setState({
            curr: 'previous',
            next: 'current'
        });

        // wait 500 ms before placing all topics into correct divs
        setTimeout(()=>{
            // move all topics into correct divs
            let prevloc = this.state.prevLoc+1;
            let currloc = this.state.currLoc+1;
            let nextloc = this.state.nextLoc+1;
            this.setState({
                curr: 'current notrans',
                next: 'next notrans',
                prevLoc: prevloc, // Move correct topics into necessary divs
                currLoc: currloc,
                nextLoc: nextloc,
            });

            // wait 20ms and remove notrans
            setTimeout(()=>{
            this.setState({
                curr: 'current',
                next: 'next',
            });
            }, 20);
        }, 500);
        
    } else if (input === "down" && this.state.nextLoc >= this.topics.length) {
        // Set something to happen when you reach the end

    }
    
  };

  componentDidMount() {
    setTimeout(()=>{ // At the start, wait 100ms and enable intro
        this.setState({
            start: true,
        });
    }, 100);

    document.title = "Introduction"; // Set document title

    // Hide the navigation
    this.props.hideNavigation();

  }

  // Topics to display in intro
  // DISCLAIMER: Please add content to the topic or bugs may occur...
  topics = [
      <Topic title="Welcome to My Portfolio" background="/img/background.webp">
        <div>
            This website helps you access the projects that I've worked on. You can navigate
            at the top to different locations in the site. Within you can find information about me,
            my github repositories, and some youtube videos I've posted. This website is coded with
            React/Redux and hosted over Vercel. You can email me at <a href="mailto:cam@camcodes.com">cam@camcodes.com</a>.
        </div>
      </Topic>,
      <Topic title="Studied at Marist College" background="img/marist.webp">
          <a href="https://www.marist.edu/">Marist.edu</a>
      </Topic>,
      <Topic link="/github" title="You can view my github repositories" background="img/space.webp">
          View a list of projects I've done right on this website. You can easily direct to github
          where you can see the project code itself.
      </Topic>,
      <Topic title="Open the Website" background="/img/sunset.webp">
          <a href="/" className="btn">Explore Cam's Projects</a>
      </Topic>
    ];
  
  render() {

    // TODO: Fix bug where scrolling too fast will allow one to exit expected topic range

    // Render page
    return (
        <div onKeyDown={this.handleKey} tabIndex="0" className={this.state.start ? 'intro start':'intro'}>
            <div className='navbutton top' onClick={()=>{this.handleInput('up')}}><ChevronDoubleUp/></div>
            <div id="previous" className={this.state.prev}>
                {this.topics[this.state.prevLoc]}
            </div>
            <div id="current" className={this.state.curr}>
                {this.topics[this.state.currLoc]}
            </div>
            <div id="next" className={this.state.next}>
                {this.topics[this.state.nextLoc]}
            </div>
            <div className='navbutton bottom' onClick={()=>{this.handleInput('down')}}><ChevronDoubleDown/></div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {};
}


export default connect(mapStateToProps, {hideNavigation, showNavigation})(Intro);
