let contactModalReducer = (state={contactModal: false, emailBody: ""}, action) => {
    switch(action.type) {
      case 'TOGGLE_CONTACT_MODAL':
        return { ...state, contactModal: !state.contactModal };
      case 'UPDATE_EMAIL_BODY':
        return { ...state, emailBody: action.payload };
      default:
        return state;
    }
  };
  

export default contactModalReducer;