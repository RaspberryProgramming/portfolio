import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css';

const Modal = props => {
  /**
   * Modal - a component to help create other modal components. A modal can be displayed anywhere in the app and
   *  will display above all other components given that the z-index of the modal makes it priority. Based on the development
   *  thus far, the modal will have an entering animation from the left once enabled. If you'd like to change this you can modify
   *  the Modal.css file in the src/components/css/ folder.
   * 
   * Modal takes a few props to ensure it is working properly.
   * 
   * Required props:
   *  title - the title of the modal window
   *  content - the content that will be displayed at the center of the modal window
   *
   * Optional props:
   *  actions - this should be buttons or other controls that the user can use to control the outcome or answer the
   *    modal message
   *  show - a control which determines whether or not the modal will show. This is not immediately required but will need to be enabled
   *    once you're ready to display the modal. If it exists or is set to true it will display the modal.
   */
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className={`modal ${props.show?'show':''}`}>
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
