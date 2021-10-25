let articleReducer = (state={articles=[]}, action) => {
    switch(action.type) {
      case "GET_ARTICLES":
        return { ...state, articles: action.payload };

      default:
        return state;
    }
  };
  

export default articleReducer;