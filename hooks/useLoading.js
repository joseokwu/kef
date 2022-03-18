import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, toggleLoading } from "../store/loading";

const useLoading = () => {
  const storeIsLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(storeIsLoading);

  //   useEffect(() => {
  //     console.log("islloading change in useLoading statte hook", isLoading);
  //     dispatch(toggleLoading());
  //   }, [isLoading]);

  const toggleLoad = () => {
    setIsLoading(!isLoading);
    dispatch(toggleLoading());
  };
  return { isLoading, toggleLoad };
};

export default useLoading;
