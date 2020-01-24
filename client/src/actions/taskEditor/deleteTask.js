import {
  TASK_EDITOR_DELETE_START,
  TASK_EDITOR_DELETE_SUCCESS,
  TASK_EDITOR_DELETE_FAILURE,
} from '../../constants/actionTypes';
import axios from 'axios';
import handleResponse from '../handleResponse';

const success = TASK_EDITOR_DELETE_SUCCESS;
const failure = TASK_EDITOR_DELETE_FAILURE;

export default deleteTaskId => dispatch => {
  dispatch({ type: TASK_EDITOR_DELETE_START });

  if (!deleteTaskId) return dispatch({ type: TASK_EDITOR_DELETE_FAILURE, error: 'No task id provided' });

  const idToken = localStorage.getItem('idToken');
  const pageDate = localStorage.getItem('pageDate');

  return axios({
    method: 'POST',
    url: '/private/delete-task',
    headers: { Authorization: `Bearer ${ idToken }` },
    data: { deleteTaskId, pageDate },
  })
    .then(res => dispatch(handleResponse(res, success, failure)));
}
