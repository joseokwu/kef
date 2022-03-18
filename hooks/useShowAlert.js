import { useDispatch } from "react-redux";
import { toggleAlert } from "../store/alert";

const useShowAlert = () => {
  const dispatch = useDispatch();
  const toggleAlertBar = (message, alertStatus, open, duration) => {
    dispatch(toggleAlert(alertStatus, message, open, duration));
  };
  return toggleAlertBar;
};

export default useShowAlert;
