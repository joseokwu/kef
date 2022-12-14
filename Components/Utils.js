import React, { useEffect } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useLoading from "../hooks/useLoading";
import { useSelector } from "react-redux";
import { getLoading } from "../store/loading";
import useShowAlert from "../hooks/useShowAlert";

const Utils = ({ children }) => {
  //   const { isLoading } = useLoading();
  const isLoading = useSelector(getLoading);
  const showAlert = useSelector((state) => state.alert.open);
  const alertStatus = useSelector((state) => state.alert.status);
  const alertMessage = useSelector((state) => state.alert.message);
  const alertDuration = useSelector((state) => state.alert.duration);
  const toggleAlertBar = useShowAlert();

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const setAlertDuration = () => {
    setTimeout(() => {
      console.log("closing alert");
      toggleAlertBar();
    }, alertDuration);
  };

  useEffect(() => {
    console.log("show alert changed to", showAlert);
    if (showAlert) {
      console.log("Alert duration is ...", alertDuration);
      console.log("in use effect showalert false to true");
      setAlertDuration();
    }
  }, [showAlert]);

  useEffect(() => {
    console.log("is loading chage", isLoading);
  }, [isLoading]);

  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Alert Global */}
      <div
        className={`fixed transition-all duration-500  ${showAlert ? "opacity-100 top-0" : "opacity-0 -top-full"} left-0 w-screen h-[5.5rem] ${
          alertStatus == "success" ? "bg-green-800" : "bg-red-800"
        }  text-white text-xl z-30 grid place-items-center`}
      >
        {alertMessage}
      </div>
      {children}
    </div>
  );
};

export default Utils;
