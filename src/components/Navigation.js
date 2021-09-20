import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleContactModal} from '../actions'
import './css/Navigation.css';
import { HouseDoor, FileEarmarkPerson, Github, Youtube, Envelope } from 'react-bootstrap-icons';
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
      <Link to="/youtube">
        Youtube Videos
        <Youtube />
      </Link>
      <Link to="/about">
        About
        <FileEarmarkPerson />
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
