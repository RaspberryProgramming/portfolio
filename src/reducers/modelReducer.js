//SET_MODEL
let modelReducer = (state={model: null, loading: "", progress: 0}, action) => {
    switch(action.type) {
      case 'SET_MODEL':
        return { ...state, model: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      case 'SET_LAST_PRED':
        return { ...state, last_prediction: action.payload };
      case 'SET_PROGRESS':
        return { ...state, progress: action.payload };

      default:
        return state;
    }
  };
  

export default modelReducer;