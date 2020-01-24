import { AUTH_SUCCESS, AUTH_FAILURE } from '../../constants/actionTypes';
import history from '../../history';

/*
function waitForLocalStorage(key, callback, timer) {
  if (!localStorage.getItem(key)) return (timer = setTimeout(waitForLocalStorage.bind(null, key), 100));
  clearTimeout(timer);
  if (typeof callback !== 'function') return localStorage.getItem(key);
  return callback(localStorage.getItem(key));
}
*/

export default res => dispatch => {
  const { message, idToken } = res.data;

  if (message === 'success') {
    localStorage.setItem('idToken', idToken);
    dispatch({ type: AUTH_SUCCESS });
    return history.push('/');
  }

  return dispatch({ type: AUTH_FAILURE, error: message });
}
