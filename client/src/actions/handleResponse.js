import history from '../history';

export default (res, success, failure) => dispatch => {
  const { message, colors, types, pageDate, pageTasks } = res.data;
  if (message === 'success') {
    localStorage.setItem('pageDate', pageDate);
    return dispatch({ type: success, colors, types, pageDate, pageTasks });
  }
  if (message === 'invalid-id-token') return history.push('/error-auth');
  if (!failure) return history.push('/error-general');
  return dispatch({ type: failure, error: message });
}
