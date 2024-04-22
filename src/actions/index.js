import github from '../apis/github';
import api from '../apis/api';
import * as tf from '@tensorflow/tfjs';
import _ from 'lodash';

// Github Actions

export const getUser = (username) => async (dispatch, getState) => {
  const response = await github.get(`/users/${username}`);


  dispatch({
    type: 'GET_USER',
    payload: response.data,
  })
};

export const getRepos = (username) => async (dispatch, getState) => {
  const response = await github.get(`/users/${username}/repos`, {params: {sort: 'updated'}}); // axios request for repositories

  dispatch({
    type: 'GET_REPOS',
    payload: response.data,
  });
};

export const getArticles = () => async (dispatch, getState) => {
  const { articles } = getState();

  if (!articles.articles || articles.articles.length <= 0){
    const response = await api.get(`/articles.json`); // axios request for articles json file

    dispatch({
      type: 'GET_ARTICLES',
      payload: response.data.articles,
    });
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
  let languages = (await getState()).github.repoLanguages[repoName];

  if (languages === undefined) {
    const response = await github.get(`/repos/${username}/${repoName}/languages`); // Request languages for the repo

    // Each repo will have it's own object with it's languages
    let payload = {};
    payload[repoName] = response.data;

    dispatch({
      type: 'GET_LANGUAGES',
      payload: payload,
    });
    
  }
}

export const setSortValue = (value) => async (dispatch, getState) => {
  dispatch({
    type: 'SET_SORT_VALUE',
    payload: value
  })
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

export const setProgress = (prog) => async (dispatch, getState) => {
  dispatch({
    type: 'SET_PROGRESS',
    payload: _.round(prog)
  });
}

export const loadingModel = () => async (dispatch, getState) => {

  dispatch({
    type: 'SET_LOADING',
    payload: "Loading Model. Please be Patient"
  });
};

export const predict = (image, model) => async (dispatch, getState) => {

  let imdata = await tf.browser.fromPixels(image).resizeNearestNeighbor([550, 425]).toFloat().expandDims();

  let prediction = await model.predict(imdata).data();
  console.log(prediction);

  dispatch({
    type: 'SET_LAST_PRED',
    payload: prediction
  });

  return prediction;
};

export const error_msg = (message) => async (dispatch, getState) => {
  
  console.log(message);

  dispatch({
    type: 'SET_ERROR',
    payload: message
  });
};

export const nextPage = () => async (dispatch, getState) => {
  let page = getState().github.page;
  page++;
  dispatch({
    type: 'SET_PAGE',
    payload: page
  });
};