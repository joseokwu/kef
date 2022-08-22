import authFetch from '../../../axios/admin';
import { ADD_REFERRAL, GET_REFERRALS, GET_VENDORS } from './actionTypes';

export const getReferrals = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  setLoading,
}) => {
  return async (dispatch) => {
    toggleLoad();
    setLoading(true);
    try {
      const response = await authFetch.post(`/admin/celebrities`);

      const {
        data: { data },
      } = response;
      console.log(data);
      dispatch({
        type: GET_REFERRALS,
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

export const addReferral = ({
  toggleLoad,
  toggleAlertBar,
  setPassError,
  setSuccess,
  setModal,
  name,
}) => {
  return async (dispatch) => {
    toggleLoad();
    try {
      const response = await authFetch.post(`/admin/celebrities/create`, {
        name,
      });
      console.log(response);
      const {
        data: { data },
      } = response;
      const { referalCode } = data;
      dispatch({
        type: ADD_REFERRAL,
        payload: referalCode,
      });
      toggleLoad();
      setSuccess(true);
      setModal(false);
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
