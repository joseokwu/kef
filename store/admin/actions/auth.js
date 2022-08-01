import axios from 'axios';
import { setAuthToken } from '../../../utils/helpers';
import { SET_ACTIVE_PAGE } from './actionTypes';

export const login = ({
  user,
  toggleLoad,
  toggleAlertBar,
  router,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await axios.post(
        `https://kmf.kennismusic.app/admin/login`,
        user
      );
      const { access_token } = response.data;
      setAuthToken(access_token);
      toggleAlertBar('Login Successful!', 'success', true);
      toggleLoad();
      router.replace('/dashboard');
    } catch (error) {
      toggleLoad();
      if (!error.response) {
        console.log('No response from the server');
        toggleAlertBar(
          'No server response. Please Check Your internet connection',
          'fail',
          true
        );
        return;
        // setError("Network Error");
      }
      if (error.response.data.statusCode === 401) {
        console.log('response error', error.response);
        setPassError('Email or Password is incorrect');
      } else {
        toggleAlertBar('An Error Occurred', 'fail', true, 7000);
      }
    }
  };
};

export const setActivePage = (page) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ACTIVE_PAGE,
      payload: page,
    });
  };
};
