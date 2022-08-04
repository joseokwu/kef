import axios from 'axios';
import { getAuthToken } from '../utils/helpers';

const authFetch = axios.create({
  baseURL: 'https://dev.kennismusic.app',
});

//axios interceptors
//request
authFetch.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] = `Bearer ${getAuthToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return;
      // logoutUser();
    }
    return Promise.reject(error);
  }
);

export default authFetch;
