let navigationReducer = (state={enable: true}, action) => {
    switch(action.type) {
      case 'SET_NAVIGATION':
        return { ...state, enable: action.payload };
      default:
        return state;
    }
  };
  

export default navigationReducer;