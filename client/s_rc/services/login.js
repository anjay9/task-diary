import axios from 'axios';
import handleResponse from './handleResponse';

export default (email, password) => {
  const options = {
    method: 'POST',
    url: 'http:localhost:3001/unauthenticated/login',
    data: { email, password },
  };
  return axios(options)
    .then(handleResponse)
    .then(data => {
      const { token, date } = data;
      localStorage.setItem('idToken', token);
      localStorage.setItem('pageDate', date);
      return data;
    });
}
