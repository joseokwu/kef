import { baseInstanceAPI } from '../axios';

const initialState = {
  user: null,
  error: { status: false, message: '' },
  loggedIn: false,
  processsing: false,
  data: null,
  dashboardHistory: {
    raffleTickets: 0,
    rewardWon: 0,
    eventTickets: 0,
  },
};

// Reducer
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action?.user };
    case 'sigin':
      return { ...state, user: action?.user };
    case 'logout':
      return { ...state, user: null };
    case 'setLoginStatus':
      return { ...state, loggedIn: action?.status };
    case 'setUser':
      return { ...state, user: action?.user };
    case 'setDashboardHistory':
      return { ...state, dashboardHistory: action?.data };
    default:
      return { ...state };
  }
};

// Selector
export const getUser = (state) => {
  return state.auth.user;
};
export const getLoggedIn = (state) => {
  return state.auth.loggedIn;
};
export const getErrorMessage = (state) => {
  return state.auth.error;
};
export const getDashHistory = (state) => {
  return state.auth.dashboardHistory;
};

// Actions
export const login = ({ username, password }) => {
  return async (dispatch) => {
    //   make api call to log user in
    console.log('running login dispatch');
    try {
      const response = await baseInstanceAPI.post('/account/login');
      console.log(response);
    } catch (error) {
      console.log('There was an error', error);
    }
    // on success: setLocal Storage and dispaych login reducer
    //
  };
};

export const setUser = (user) => {
  console.log('setting user', user);
  return {
    type: 'setUser',
    user,
  };
};
export const setDashboardHistory = (data) => {
  console.log('setting history', data);
  return {
    type: 'setDashboardHistory',
    data,
  };
};

export const setLoginStatus = (status) => {
  return {
    type: 'setLoginStatus',
    status,
  };
};

export const signUp = (user) => {
  return async (dispatch, state) => {};
};

export const verifyOtp = () => {};

export const createAccount = () => {};
