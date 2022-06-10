let githubReducer = (state={repoLanguages: {}, page: 1, sortedValue: {value:'updated_at', asc:false}}, action) => {
    switch(action.type) {
      case 'GET_REPOS':
        return { ...state, repos: action.payload };
      case 'GET_LANGUAGES':
        return {...state, repoLanguages: {...state.repoLanguages, ...action.payload}}
      case 'GET_USER':
        return {...state, user: action.payload};
      case 'SET_PAGE':
        return {...state, page: action.payload};
      case 'SET_SORT_VALUE':
        return {...state, sortedValue: action.payload};
      default:
        return state;
    }
  };
  

export default githubReducer;