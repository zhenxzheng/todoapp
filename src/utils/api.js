import request from './request';

const Api = resource => {
  let buildURL = ({id, resource} = {}) => {
    let parameters = [
      'https://api-bundle-dev.azurewebsites.net'
    ];
    if (resource) parameters.push(resource);
    if (id) parameters.push(id);
    return parameters.join('/');
  };

  const defaultOptions = {
    mode: 'cors',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return {
    post: (path, body, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions, 
        {
          method: 'POST',
          body: JSON.stringify(body)
        }
      ));
    }, 
    get: (path, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        { method: 'GET' }
      ));
    },

    edit: (path, body, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        { method: 'PUT' }
      ));
    },

    delete: (path, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        { method: 'DELETE' }
      ));
    },

    ping: () => request(buildURL(), { method: 'GET' })
  };
};

export default Api();