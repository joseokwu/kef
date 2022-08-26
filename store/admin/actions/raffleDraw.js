import authFetch from '../../../axios/admin';
import {
  SET_AUTO_PAGE,
  SET_FULLSCREEN,
  CREATE_CAMPAIGN,
  GET_RAFFLE_DRAW,
  GET_PROGRESSIVE_DRAW_DETAILS,
  START_PROGRESSIVE_DRAW,
  STOP_PROGRESSIVE_DRAW,
  GET_ACTIVE_DRAWS,
} from './actionTypes';

export const setAutoPage = (page) => {
  return async (dispatch) => {
    dispatch({
      type: SET_AUTO_PAGE,
      payload: page,
    });
  };
};

export const createCampaign = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  details,
  setModal,
}) => {
  return async (dispatch) => {
    console.log(details);
    toggleLoad();

    try {
      const response = await authFetch.post(`/draw/create-campaign`, details);
      console.log(response);
      const { data } = response;
      dispatch({
        type: CREATE_CAMPAIGN,
        payload: data,
      });
      toggleLoad();
      setModal(true);
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

export const createWeeklyCampaign = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  details,
  setModal,
}) => {
  return async (dispatch) => {
    console.log(details);
    toggleLoad();

    try {
      const response = await authFetch.post(
        `/draw/start-periodic-draw`,
        details
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: CREATE_CAMPAIGN,
        payload: data,
      });
      toggleLoad();
      setModal(true);
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

export const getRaffleDraw = ({
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
        `/draw/raffle-draw?search=${search}&type=${type}&page=${page}&date=${date}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_RAFFLE_DRAW,
        payload: data,
      });
      toggleLoad();
      toggleAlertBar('Weekly draw settings have been activated', true);
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

export const startProgressiveDraw = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  uuid,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(
        `/draw/start-progressive-draw/${uuid}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: START_PROGRESSIVE_DRAW,
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

export const stopProgressiveDraw = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  values,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(
        `/draw/stop-progressive-draw/${uuid}`,
        values
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: STOP_PROGRESSIVE_DRAW,
        payload: data,
      });
      toggleLoad();
      toggleAlertBar('Your settings have been updated!', true);
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

export const getActiveDraws = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  uuid,
  setLoading,
}) => {
  return async (dispatch) => {
    toggleLoad();
    setLoading(true);
    try {
      const response = await authFetch.get(`/draw/get-active-draws/${uuid}`);
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_ACTIVE_DRAWS,
        payload: data,
      });
      toggleLoad();
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      toggleLoad();
      setLoading(false);
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

export const getProgressiveDrawDetails = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  uuid,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `/draw/get-progressive-draw-details/${uuid}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_PROGRESSIVE_DRAW_DETAILS,
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

export const toggleFullScreen = ({ value }) => {
  return async (dispatch) => {
    dispatch({
      type: SET_FULLSCREEN,
      payload: value,
    });
  };
};
