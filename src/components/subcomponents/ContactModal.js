import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import {toggleContactModal, updateEmailBody} from '../../actions'

const ContactModal = props => {
    /**
     * ContactModal - an adaptation of the Modal.js component which will create a modal and pass all required functionality to make it work for
     *  to develop the Contact Modal. In the contact modal, a form along with an onSubmit function is created an passed to the content for the 
     *  Modal.js. Actions will not be used since we will perform all of the functionality within the content area. Once displayed, a user can
     *  type some message and open that message directly in their email client by using the mailto: link.
     * 
     * Required props:
     *  show - determines whether or not to display the modal
     * 
     */
    const onSubmit = (e) => {
        e.preventDefault(); // Prevent default submit function

        window.open(`mailto:cam@camscode.com?body=${props.body}`); // Open the message in user's email client

        props.toggleContactModal(); // Close the contact modal
    };

    const renderContent = () => {
        // Render the contact modal form
        return (
        <form onSubmit={(e)=>onSubmit(e)}>
            <input className="large" onKeyUp={(e)=>{props.updateEmailBody(e);}}/>
            <button>Open In Email Editor</button>
        </form>
        );
    };

    return <Modal
        title="Contact Me"
        content = {renderContent()}
        onDismiss={props.toggleContactModal}
        show={props.show}
      />
};

const mapStateToProps = (state) => {
    return {body: state.contactModal.emailBody};
}

export default connect(mapStateToProps, {toggleContactModal, updateEmailBody})(ContactModal);