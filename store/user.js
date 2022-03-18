import { baseInstance } from "../axios";

const initialState = {
  user: null,
  error: { status: false, message: "" },
  loggedIn: false,
  processsing: false,
};

// Reducer
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action?.user };
    case "sigin":
      return { ...state, user: action?.user };
    case "logout":
      return { ...state, user: null };
    case "setLoginStatus":
      return { ...state, loggedIn: action?.status };
    case "setUser":
      return { ...state, user: action?.user };
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

// Actions
export const login = ({ username, password }) => {
  return async (dispatch) => {
    //   make api call to log user in
    console.log("running login dispatch");
    try {
      const response = await baseInstance.post("/account/login");
      console.log(response);
    } catch (error) {
      console.log("There was an error", error);
    }
    // on success: setLocal Storage and dispaych login reducer
    //
  };
};

export const setUser = (user) => {
  return {
    type: "setUser",
    user,
  };
};

export const setLoginStatus = (status) => {
  return {
    type: "setLoginStatus",
    status,
  };
};

export const signUp = (user) => {
  return async (dispatch, state) => {};
};

export const verifyOtp = () => {};

export const createAccount = () => {};
