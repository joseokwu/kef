import authFetch from '../../../axios/admin';
import { GET_OVERVIEW } from './actionTypes';

export const getOverview = ({ toggleLoad, toggleAlertBar, setPassError }) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(`/admin/overview`);
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_OVERVIEW,
        payload: data,
      });
      toggleLoad();
    } catch (error) {
      toggleLoad();
      console.log(error);
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
