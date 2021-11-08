import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';
import { HouseDoor, FileEarmarkPerson, Github, Envelope, Book } from 'react-bootstrap-icons';
import ContactModal from './subcomponents/ContactModal';

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <Link to="/">
        Home
        <HouseDoor />
      </Link>
      <Link to="/github">
        Github
        <Github />
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

export default Navigation;
