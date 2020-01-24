import { AUTH_START, AUTH_FAILURE } from '../../constants/actionTypes';
import app from 'axios';

import handleResponse from './handleResponse';

export default (email, password) => dispatch => {
  dispatch({ type: AUTH_START });

  if (!email || !password) return dispatch({ type: AUTH_FAILURE, error: 'Enter credentials' });

  return app({
    method: 'POST',
    url: 'http://localhost:3001/auth/login',
    data: { email, password },
  })
    .then(res => dispatch(handleResponse(res)));
}
