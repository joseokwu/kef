import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedIn } from "../store/user";

const UseIsLoggedIn = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn;
};

export default UseIsLoggedIn;
