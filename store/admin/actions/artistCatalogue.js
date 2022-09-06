import authFetch from '../../../axios/admin';
import {
  GET_ARTIST_CATALOGUE_SUCCESS,
  GET_SINGLE_CATALOGUE,
} from './actionTypes';

export const getArtistCatalogue = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  page,
  search,
  date,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `/admin/get-artist-catalogue-analystics?search=${search}&page=${page}&date=${date}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_ARTIST_CATALOGUE_SUCCESS,
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

export const getArtistCatalogue2 = ({ toggleAlertBar, setPassError }) => {
  return async (dispatch) => {
    try {
      const response = await authFetch.get(
        `/admin/get-artist-catalogue-analystics`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_ARTIST_CATALOGUE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.response);
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

export const getSingleCatalogue = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  page,
  type,
  search,
  date,
  id,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(`/admin/artist-catalogue/${id}`);
      console.log(response);
      const {
        data: { artist },
      } = response;
      const mainData = artist[0];
      dispatch({
        type: GET_SINGLE_CATALOGUE,
        payload: mainData,
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

export const togglePublish = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  details,
  setSuccess,
}) => {
  return async (dispatch) => {
    setSuccess(false);
    toggleLoad(true);
    try {
      const response = await authFetch.post(
        `/admin/edit-artist-status`,
        details
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_SINGLE_CATALOGUE,
        payload: data,
      });
      setSuccess(true);
      toggleLoad(false);
    } catch (error) {
      console.log(error.response);
      toggleLoad(false);
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
