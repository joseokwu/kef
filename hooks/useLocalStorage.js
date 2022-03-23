import jwt_decode from "jwt-decode";

const useLocalStorage = () => {
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
    var decoded = jwt_decode(token);
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

  return { setLocalStorage, getLocalStorage, isLoggedIn };
};

export default useLocalStorage;
