import React from 'react';
import { connect } from 'react-redux';
import './css/Intro.css';
import {hideNavigation, showNavigation} from '../actions';
import Topic from './subcomponents/Topic';

class Intro extends React.Component {
  constructor() {
    super();
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
    switch(e.key) {
        case "ArrowUp":
            this.handleInput('up');
            break;
        case "ArrowDown":
            this.handleInput('down')
            break;
    }
  }

  handleInput = (input) => {
    console.log(this.state.prevLoc);
    console.log(this.state.currLoc)
    console.log(this.state.nextLoc)
    if (input === "up" && this.state.currLoc > 0) {
        this.setState({
            prev: 'current',
            curr: 'next',
        });
        setTimeout(()=>{
            this.setState({
                prev: 'previous notrans',
                curr: 'current notrans',
                prevLoc: this.state.prevLoc-1,
                currLoc: this.state.currLoc-1,
                nextLoc: this.state.nextLoc-1,
            });
            setTimeout(()=>{
            this.setState({
                prev: 'previous',
                curr: 'current',
            });
            }, 20);
        }, 500);
    } else if (input === "down" && this.state.nextLoc < this.topics.length) {
        this.setState({
            curr: 'previous',
            next: 'current'
        });
        setTimeout(()=>{
            this.setState({
                curr: 'current notrans',
                next: 'next notrans',
                prevLoc: this.state.prevLoc+1,
                currLoc: this.state.currLoc+1,
                nextLoc: this.state.nextLoc+1,
            });
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

  topics = [
      <Topic title="Studied at Marist College" background="img/marist.webp">
          <a href="https://www.marist.edu/">Marist.edu</a>
      </Topic>,
      <Topic link="/github" title="You can view my github repositories" background="img/background.webp">
      </Topic>,
      <Topic link="/" title="Open the Website">
          <a href="/" className="btn">Explore Cam's Projects</a>
      </Topic>
    ];
  
  render() {

    return (
        <div onKeyDown={this.handleKey} tabIndex="0" className={this.state.start ? 'intro start':'intro'}>
            <div id="previous" className={this.state.prev}>
                {this.topics[this.state.prevLoc]}
            </div>
            <div id="current" className={this.state.curr}>
                {this.topics[this.state.currLoc]}
            </div>
            <div id="next" className={this.state.next}>
                {this.topics[this.state.nextLoc]}
            </div>
        </div>
    );
  }

  componentDidMount() {
    setTimeout(()=>{
        this.setState({
            start: true,
        });
    }, 100);

    document.title = "Introduction";

    this.props.hideNavigation();

  }
}

const mapStateToProps = (state) => {
    return {};
}


export default connect(mapStateToProps, {hideNavigation, showNavigation})(Intro);
