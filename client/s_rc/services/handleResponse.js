import logout from './logout';

export default (response) => {
  const { data } = response;
  const { message } = data;

  if (message !== 'success') {
    if (respomse.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      lacation.reload(true);
    }

    const error = (data && message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}
