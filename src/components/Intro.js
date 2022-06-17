import React from 'react';
import { connect } from 'react-redux';
import './css/Intro.css';
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
        moving: false,

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
    if (input === "up" && !this.state.moving && this.state.currLoc > 0 ) {

        // Activate animation going to next topic
        this.setState({
            prev: 'current top',
            moving: true
        });

        // Wait 900 ms until the transition is finished
        setTimeout(()=>{
            // Once timeout finishes, place topics in correct location without transition
            let prevloc = this.state.prevLoc-1;
            let currloc = this.state.currLoc-1;
            let nextloc = this.state.nextLoc-1;
            this.setState({
                prev: 'previous notrans',
                currLoc: currloc,
                nextLoc: nextloc,
            });

            // wait another 75 ms to 
            setTimeout(()=>{
                this.setState({ // remove notrans from each div
                    prev: 'previous',
                    prevLoc: prevloc,
                    moving: false,
                });

            }, 75);

        }, 900);
    } else if (input === "down" && !this.state.moving && this.state.nextLoc < this.topics.length) {
        // Activate transition going to previous topic
        this.setState({
            //curr: 'previous',
            next: 'current',
            moving: true,
        });

        // wait 900 ms before placing all topics into correct divs
        setTimeout(()=>{
            // move all topics into correct divs
            let prevloc = this.state.prevLoc+1;
            let currloc = this.state.currLoc+1;
            let nextloc = this.state.nextLoc+1;
            this.setState({
                next: 'next notrans',
                prevLoc: prevloc,
                currLoc: currloc,
            });

            // wait 20ms and remove notrans
            setTimeout(()=>{
                this.setState({
                    next: 'next',
                    nextLoc: nextloc,
                    moving: false,
                });
            }, 75);
        }, 900);
        
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

    document.title = "HomePage"; // Set document title

  }

  // Topics to display in intro
  // DISCLAIMER: Please add content to the topic or bugs may occur...
  topics = [
      <Topic link="/about" title="Welcome to My Portfolio" background="/img/background.webp">
        <div>
            This website helps you access the projects that I've worked on. You can navigate
            at the top to different locations in the site. Within you can find information about me,
            my github repositories, and articles I've posted. This website is coded with
            React/Redux and hosted over Vercel. You can email me at <a href="mailto:cam@camscode.com">cam@camscode.com</a>.
        </div>
      </Topic>,
      <Topic link="/github" title="Github" background="img/space.webp">
          View a list of projects I've done right on this website. You can easily direct to github
          where you can see the project code itself.
      </Topic>,
      <Topic link="/articles" title="Articles" background="/img/sunset.webp">
          Read through some homemade articles that go over interesting topics and may teach you some skills in tech.
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


export default connect(mapStateToProps, {})(Intro);
