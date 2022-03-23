import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, toggleLoading } from "../store/loading";

const useLoading = () => {
  const storeIsLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(storeIsLoading);

  // useEffect(() => {
  //   console.log("islloading change in useLoading statte hook", isLoading);
  //   // dispatch(toggleLoading());
  // }, [isLoading]);

  const toggleLoad = () => {
    // console.log("Is loading status is", isLoading);
    // if (status == false) {
    //   setIsLoading(false);
    //   // dispatch(toggleLoading());
    //   return;
    // }
    // console.log("before is loading:status is...", isLoading)
    setIsLoading(!isLoading);
    // console.log("after is loading:status is...", isLoading)

    dispatch(toggleLoading());
  };
  return { isLoading, toggleLoad };
};

export default useLoading;
