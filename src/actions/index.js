import github from '../apis/github';

export const getRepos = () => async (dispatch, getState) => {
  const response = await github.get('/users/RaspberryProgramming/repos');

  dispatch({
    type: 'GET_REPOS',
    payload: response.data,
  });
};

export const updateEmailBody = (event) => async (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_EMAIL_BODY',
    payload: event.target.value,
  });
};

export const toggleContactModal = () => async (dispatch, getState) => {

  dispatch({
    type: 'TOGGLE_CONTACT_MODAL',
  });
};

export const getRepoLanguages = (repoName) => async (dispatch, getState) => {

  const response = await github.get(`/repos/RaspberryProgramming/${repoName}/languages`); // Request languages for the repo

  // Each repo will have it's own object with it's languages
  let payload = {};
  payload[repoName] = response.data;

  dispatch({
    type: 'GET_LANGUAGES',
    payload: payload,
  });
}