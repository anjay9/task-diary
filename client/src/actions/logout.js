import { RESET_STATES } from '../constants/actionTypes';

export default () => dispatch => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('pageDate');
  return dispatch({ type: RESET_STATES });
}
