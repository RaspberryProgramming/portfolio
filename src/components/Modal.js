import React from 'react';
import ReactDOM from 'react-dom';
import './css/Modal.css';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="box">

        <div className="title">{props.title}</div>

        <div className="content">
            { props.content }
        </div>

        <div className="actions">
          { props.actions }
        </div>

      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
