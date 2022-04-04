import jwt_decode from "jwt-decode";
import { setUser } from "../store/user";
import { useDispatch } from "react-redux";

const useLocalStorage = () => {
  const dispatch = useDispatch();
  const setLocalStorage = (key, value) => {
    console.log("setting local storage");
    localStorage.setItem(`${key}`, value);
  };

  const getLocalStorage = (key) => {
    return localStorage.getItem(`${key}`);
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token available...", token);
      return false;
    }

    var decoded;
    try {
      decoded = jwt_decode(token);
    } catch (error) {
      return false;
    }
    const isExp = new Date(decoded.exp * 1000) > new Date(Date.now());
    console.log("date now", new Date(Date.now()));
    console.log("Exp datae", new Date(decoded.exp * 1000));
    if (decoded.exp * 1000 > Date.now()) {
      console.log("token has not expired");
    }
    console.log("difference exp - now", new Date(decoded.exp * 1000) - new Date(Date.now()));
    if (new Date(decoded.exp * 1000) > new Date(Date.now())) {
      console.log("User is Logged in", isExp);
    }
    console.log(decoded);
    console.log("date is");
    return isExp;
  };

  const logOut = () => {
    const token = localStorage.getItem("token");
    localStorage.setItem("token", "");
    dispatch(setUser(null));
  };

  return { setLocalStorage, getLocalStorage, isLoggedIn, logOut };
};

export default useLocalStorage;
