import authFetch from '../../../axios/admin';
import { GET_CARDS_SUCCESS } from './actionTypes';

export const getCards = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  page,
  type,
  search,
  date,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `/admin/get-card-analystics?search=${search}&type=${type}&page=${page}&date=${date}`
      );
      console.log('res', response);
      const { data } = response;
      dispatch({
        type: GET_CARDS_SUCCESS,
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
