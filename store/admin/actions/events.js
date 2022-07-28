import authFetch from '../../../axios/admin';
import { GET_EVENTS, GET_SINGLE_EVENT } from './actionTypes';

export const getEvents = ({ toggleLoad, toggleAlertBar, setPassError }) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(`/admin/events`);
      console.log(response);
      const { data } = response;
      console.log(data);
      dispatch({
        type: GET_EVENTS,
        payload: data,
      });
      toggleLoad();
    } catch (error) {
      console.log(error);
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

export const getSingleEvent = ({
  slug,
  toggleLoad,
  toggleAlertBar,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(`/admin/events/${slug}`);
      console.log(response);
      const { data } = response;
      console.log(data);
      dispatch({
        type: GET_SINGLE_EVENT,
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
