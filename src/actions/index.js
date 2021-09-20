import github from '../apis/github';

export const getRepos = () => async (dispatch, getState) => {
  const response = await github.get('/users/RaspberryProgramming/repos');

  dispatch({
    type: 'GET_REPOS',
    payload: response.data,
  });
};

export const updateEmailBody = (event) => async (dispatch, getState) => {
  console.log(event);
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