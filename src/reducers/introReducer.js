let introReducer = (state={start: false}, action) => {
    switch(action.type) {
      case 'SET_INTRO':
        return { ...state, start: action.payload };
      default:
        return state;
    }
  };
  

export default introReducer;