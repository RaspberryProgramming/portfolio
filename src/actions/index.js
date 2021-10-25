import github from '../apis/github';
import api from '../apis/api';

export const getUser = (username) => async (dispatch, getState) => {
  const response = await github.get(`/users/${username}`);


  dispatch({
    type: 'GET_USER',
    payload: response.data,
  })
};

export const getRepos = (username) => async (dispatch, getState) => {
  const response = await github.get(`/users/${username}/repos`); // axios request for repositories

  dispatch({
    type: 'GET_REPOS',
    payload: response.data,
  });
};

export const getArticles = async (dispatch, getState) => {
  const state = getState();
  
  if (!state.articles || state.articles.length <= 0){
    const response = await api.get(`/articles`); // axios request for articles json file
    
    dispatch({
      type: 'GET_ARTICLES',
      payload: response.data,
    });
    return response;
  }
};

export const updateEmailBody = (event) => async (dispatch, getState) => {
  // Update the email body

  dispatch({
    type: 'UPDATE_EMAIL_BODY',
    payload: event.target.value,
  });
};

export const toggleContactModal = () => async (dispatch, getState) => {
  // Toggle the contact modal

  dispatch({
    type: 'TOGGLE_CONTACT_MODAL',
  });
};

export const getRepoLanguages = (username, repoName) => async (dispatch, getState) => {

  const response = await github.get(`/repos/${username}/${repoName}/languages`); // Request languages for the repo

  // Each repo will have it's own object with it's languages
  let payload = {};
  payload[repoName] = response.data;

  dispatch({
    type: 'GET_LANGUAGES',
    payload: payload,
  });
}

export const setIntro = (start=true) => async (dispatch, getState) => {
  
  dispatch({
    type: 'SET_INTRO',
    payload: start,
  });
}

export const hideNavigation = () => async (dispatch, getState) => {
  
  dispatch({
    type: 'SET_NAVIGATION',
    payload: false,
  });
}

export const showNavigation = () => async (dispatch, getState) => {
  
  dispatch({
    type: 'SET_NAVIGATION',
    payload: true,
  });
}