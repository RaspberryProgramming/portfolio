let githubReducer = (state={}, action) => {
    switch(action.type) {
      case 'GET_REPOS':
        return { ...state, repos: action.payload };
      default:
        return state;
    }
  };
  

export default githubReducer;