import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleContactModal} from '../actions'
import './css/Navigation.css';
import { HouseDoor, FileEarmarkPerson, Lightbulb, Envelope, Book } from 'react-bootstrap-icons';
import ContactModal from './subcomponents/ContactModal';

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <Link to="/">
        Home
        <HouseDoor />
      </Link>
      <Link to="/bai">
        Blank AI
        <Lightbulb />
      </Link>
      <Link to="/articles">
        Articles
        <Book />
      </Link>
      <Link to="/about">
        About
        <FileEarmarkPerson />
      </Link>
      <button className="end" onClick={()=>props.toggleContactModal()}>
        Contact Me
        <Envelope />
      </button>
      <ContactModal show={props.modal}/>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {modal: state.contactModal.contactModal};
}

export default connect(mapStateToProps, {toggleContactModal})(Navigation);