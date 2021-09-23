import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import {toggleContactModal, updateEmailBody} from '../../actions'

const ContactModal = props => {
    const onSubmit = (e) => {
        e.preventDefault();
        window.open(`mailto:camerin@camsprojects.online?body=${props.body}`);
        props.toggleContactModal();
    };

    const renderContent = () => {
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
      />
};

const mapStateToProps = (state) => {
    return {body: state.contactModal.emailBody};
}

export default connect(mapStateToProps, {toggleContactModal, updateEmailBody})(ContactModal);