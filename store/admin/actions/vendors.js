import authFetch from '../../../axios/admin';
import { ADD_VENDOR, GET_VENDORS } from './actionTypes';

export const getVendors = ({ toggleLoad, toggleAlertBar, setPassError }) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(`/admin/vendors`);
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_VENDORS,
        payload: data,
      });
      toggleLoad();
    } catch (error) {
      console.log(error.response);
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

export const addVendor = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  details,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(`/admin/vendors/onboard`, {
        details,
      });
      console.log(response);
      const { data } = response;
      dispatch({
        type: ADD_VENDOR,
        payload: data,
      });
      toggleLoad();
    } catch (error) {
      console.log(error.response);
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
