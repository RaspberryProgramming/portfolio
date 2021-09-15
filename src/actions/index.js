import github from '../apis/github';

export const getRepos = () => async (dispatch, getState) => {
  const response = await github.get('/users/RaspberryProgramming/repos');
  //console.log(response);

  dispatch({
    type: 'GET_REPOS',
    payload: response.data,
  });
};