import {
  TASK_EDITOR_APPLY_START,
  TASK_EDITOR_APPLY_SUCCESS,
  TASK_EDITOR_APPLY_FAILURE,
} from '../../constants/actionTypes';
import axios from 'axios';
import handleResponse from '../handleResponse';

const success = TASK_EDITOR_APPLY_SUCCESS;
const failure = TASK_EDITOR_APPLY_FAILURE;

export default passsedSetTask => dispatch => {
  dispatch({ type: TASK_EDITOR_APPLY_START });
  const { taskId, typeId, start, end } = passsedSetTask;

  const error = (() => {
    if (!typeId) return 'Pick a type';
    if (!start) return 'Pick a start date';
    if (!end) return 'Pick a end date';
    return null;
  })();
  if (error) return dispatch({ type: TASK_EDITOR_APPLY_FAILURE, error: error });

  const startDate = new Date(start).setSeconds(0, 0);
  const endDate = new Date(end).setSeconds(0, 0,);

  const setTask = { taskId, typeId, start: startDate, end: endDate };

  const idToken = localStorage.getItem('idToken');
  const pageDate = localStorage.getItem('pageDate');

  return axios({
    method: 'POST',
    url: '/private/set-task',
    headers: { Authorization: `Bearer ${ idToken }` },
    data: { setTask, pageDate },
  })
    .then(res => dispatch(handleResponse(res, success, failure)));
}
