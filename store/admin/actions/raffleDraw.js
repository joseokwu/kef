import authFetch from '../../../axios/admin';
import {
  START_ON_EVENT_DRAW_SUCCESS,
  SET_AUTO_PAGE,
  GET_AUTOMATED_DRAW_SETTINGS_SUCCESS,
  GET_WEEKLY_DRAW,
  CHECK_WEEKLY_DRAW_BTN,
  UPDATE_WEEKLY_DRAW_SETTINGS,
  GET_WEEKLY_DRAW_SETTINGS,
  GET_EVENT_DRAW_SETTINGS,
  ACTIVATE_WEEKLY_DRAW_SETTINGS,
  GET_EVENT_DRAW,
  CHECK_EVENT_DRAW_BTN,
} from './actionTypes';

export const setAutoPage = (page) => {
  return async (dispatch) => {
    dispatch({
      type: SET_AUTO_PAGE,
      payload: page,
    });
  };
};

export const getAutomatedDraw = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `https://api.kennismusic.app/draw/get-automated-draw`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_AUTOMATED_DRAW_SETTINGS_SUCCESS,
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

//WEEKLY

export const activateWeeklyDrawSettings = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  activated,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(
        `https://api.kennismusic.app/draw/activate-weekly-draw-setting
`,
        { activated }
      );
      console.log(response);
      const { data } = response;
      // dispatch({
      //   type: ACTIVATE_WEEKLY_DRAW_SETTINGS,
      //   payload: data,
      // });
      toggleLoad();
      toggleAlertBar('Weekly draw settings have been activated', true);
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

export const getWeeklyDrawSettings = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `https://api.kennismusic.app/draw/get-weekly-draw-setting`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_WEEKLY_DRAW_SETTINGS,
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

export const updateWeeklyDrawSettings = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  values,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(
        `https://api.kennismusic.app/draw/weekly-draw-setting`,
        values
      );
      console.log(response);
      const { data } = response;
      // dispatch({
      //   type: UPDATE_WEEKLY_DRAW_SETTINGS,
      //   payload: data,
      // });
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

export const getWeeklyDraw = ({
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
        `https://api.kennismusic.app/admin/get-weekly-draw-analystics?search=${search}&type=${type}&page=${page}&date=${date}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_WEEKLY_DRAW,
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

export const checkWeeklyDrawBtn = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `https://api.kennismusic.app/draw/check-weekly-draw-btn`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: CHECK_WEEKLY_DRAW_BTN,
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

// EVENTS
export const activateEventDrawSettings = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  activated,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(
        `https://api.kennismusic.app/draw/activate-event-draw-setting
`,
        { activated }
      );
      console.log(response);
      const { data } = response;
      // dispatch({
      //   type: ACTIVATE_WEEKLY_DRAW_SETTINGS,
      //   payload: data,
      // });
      toggleLoad();
      toggleAlertBar('Event draw settings have been activated', true);
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

export const getEventDrawSettings = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `https://api.kennismusic.app/draw/get-event-draw-setting`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_EVENT_DRAW_SETTINGS,
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

export const updateEventDrawSettings = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  values,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(
        `https://api.kennismusic.app/draw/event-draw-setting`,
        values
      );
      console.log(response);
      const { data } = response;
      // dispatch({
      //   type: UPDATE_WEEKLY_DRAW_SETTINGS,
      //   payload: data,
      // });
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

export const getEventDraw = ({
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
        `https://api.kennismusic.app/admin/get-weekly-draw-analystics?search=${search}&type=${type}&page=${page}&date=${date}`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: GET_EVENT_DRAW,
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

export const checkEventDrawBtn = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.get(
        `https://api.kennismusic.app/draw/check-event-draw-btn`
      );
      console.log(response);
      const { data } = response;
      dispatch({
        type: CHECK_EVENT_DRAW_BTN,
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
