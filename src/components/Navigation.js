import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleContactModal} from '../actions'
import './css/Navigation.css';
import { HouseDoor, FileEarmarkPerson, Github, Envelope } from 'react-bootstrap-icons';
import ContactModal from './subcomponents/ContactModal';

const Navigation = (props) => {
  if (props.enable){
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
        <button className="end" onClick={()=>props.toggleContactModal()}>
          Contact Me
          <Envelope />
        </button>
        <ContactModal show={props.modal}/>
      </div>
    );
  }

  return <div></div>;
}

const mapStateToProps = (state) => {
  return {modal: state.contactModal.contactModal, enable: state.navigation.enable};
}

export default connect(mapStateToProps, {toggleContactModal})(Navigation);
