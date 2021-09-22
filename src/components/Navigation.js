import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleContactModal} from '../actions'
import './css/Navigation.css';
import { HouseDoor, FileEarmarkPerson, Github, Envelope, Share } from 'react-bootstrap-icons';
import ContactModal from './ContactModal';

const Navigation = (props) => {

  return (
    <div className="Navigation">
      <Link to="/">
        Home
        <HouseDoor />
      </Link>
      <Link to="/github">
        Github Repos
        <Github />
      </Link>
      <Link to="/about">
        About
        <FileEarmarkPerson />
      </Link>
      <Link to="/social">
        Social Media
        <Share />
      </Link>
      <button className="end" onClick={()=>props.toggleContactModal()}>
        Contact Me
        <Envelope />
      </button>
      {props.modal ? <ContactModal /> : ''}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {modal: state.contactModal.contactModal}
}

export default connect(mapStateToProps, {toggleContactModal})(Navigation);
