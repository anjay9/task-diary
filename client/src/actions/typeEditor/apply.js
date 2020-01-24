import {
  TYPE_EDITOR_APPLY_START,
  TYPE_EDITOR_APPLY_SUCCESS,
  TYPE_EDITOR_APPLY_FAILURE,
} from '../../constants/actionTypes';
import axios from 'axios';
import handleResponse from '../handleResponse';

const success = TYPE_EDITOR_APPLY_SUCCESS;
const failure = TYPE_EDITOR_APPLY_FAILURE;

export default setType => dispatch => {
  dispatch({ type: TYPE_EDITOR_APPLY_START });
  const { name, colorId } = setType;

  const error = (() => {
    if (!name) return 'Enter a name';
    if (!colorId) return 'Pick a color';
    return null;
  })();
  if (error) return dispatch({ type: TYPE_EDITOR_APPLY_FAILURE, error: error });

  const idToken = localStorage.getItem('idToken');
  const pageDate = localStorage.getItem('pageDate');

  return axios({
    method: 'POST',
    url: '/private/set-type',
    headers: { Authorization: `Bearer ${ idToken }` },
    data: { setType, pageDate },
  })
    .then(res => dispatch(handleResponse(res, success, failure)));
}
