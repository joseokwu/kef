import authFetch from '../../../axios/admin';
import { GET, GET_ARTIST_CATALOGUE_SUCCESS } from './actionTypes';

export const getArtistCatalogue = ({
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
        `https://api.kennismusic.app/admin/get-artist-catalogue-analystics?search=${search}&type=${type}&page=${page}&date=${date}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_ARTIST_CATALOGUE_SUCCESS,
        payload: data,
      });
      toggleLoad();
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
