let githubReducer = (state={repoLanguages: {}, page: 1}, action) => {
    switch(action.type) {
      case 'GET_REPOS':
        return { ...state, repos: action.payload };
      case 'GET_LANGUAGES':
        return {...state, repoLanguages: {...state.repoLanguages, ...action.payload}}
      case 'GET_USER':
        return {...state, user: action.payload};
      case 'SET_PAGE':
        return {...state, page: action.payload};
      default:
        return state;
    }
  };
  

export default githubReducer;