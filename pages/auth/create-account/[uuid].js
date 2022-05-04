import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AuthLayout from "../../../Components/Layout/AuthLayout";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import useLoading from "../../../hooks/useLoading";
import { baseInstanceAPI } from "../../../axios";
import CircularProgress from "@mui/material/CircularProgress";
import useShowAlert from "../../../hooks/useShowAlert";

const CreateAccount = () => {
  const passRef = useRef();
  const passConfRef = useRef();
  const usernameRef = useRef();
  const dateRef = useRef();
  const bvnRef = useRef();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    uuid: "",
    dob: "",
    bvn: "",
    isDiaspora: false,
  });
  const [error, setError] = useState("");
  const [confError, setConfError] = useState("");
  const [userValid, setUserValid] = useState(true);
  const [passError, setPassError] = useState("");
  // const [dateError, setDateError] = useState(false);
  const router = useRouter();
  const { isLoading, toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();
  const [verifying, setVerifying] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    // usernameRef.current.value = "";
    // passRef.current.value = "";
    if (!router.isReady) return;
    console.log(router.query.uuid);
    setUser({ ...user, uuid: router.query.uuid });
    return () => {
      toggleAlertBar();
    };
  }, [router.isReady]);

  const onCreate = async (user) => {
    if (user.password !== user.confirmPassword) {
      console.log("Password does not match");
      setError("Password Must Match");
      console.log("submited user is", user);
      console.log("base url is", process.env.NEXT_PUBLIC_DEVELOPMENT_URL);
      setConfError("Password and Password Confirm must match!");
      return;
    }
    if (!userValid) {
      return;
    }
    try {
      toggleLoad();
      const response = await baseInstanceAPI.post("account/complete-signup", JSON.stringify(user));
      toggleLoad();
      console.log(response);
      toggleAlertBar("Account created successfully!", "success", true);
      router.replace("/auth/sign-in");
    } catch (error) {
      toggleLoad();
      if (!error.response) {
        console.log("No response from the server");
        toggleAlertBar("No response from the server. Pls check your network", "failed", true);
        // setError("Network Error");
        return;
      }

      if (error.response.data.message[0].includes("password")) {
        return setPassError("Password must contain at least special a character, number and capital letter");
      }
      if (error.response.data.message.includes("Sorry")) {
        console.log("response error", error.response);
        toggleAlertBar(error.response.data.message, "failed", true);
        return;
      } else {
        toggleAlertBar("Something's not right", "failed", true, 10000);
      }
      console.log("there was an error", error?.response);
    }
  };

  // To reduce the amount of API calls
  const debounce = (callback, wait) => {
    console.log("in debounce");
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("befor make call");
        callback.apply(null, args);
      }, wait);
    };
  };

  const verifyUserName = async () => {
    console.log("in verify user");
    setUserValid(true);
    setVerifying(true);
    setUser({ ...user, username: usernameRef.current.value });
    try {
      const response = await baseInstanceAPI.post("account/verify-username", JSON.stringify({ username: usernameRef.current.value }));
      console.log(response);
      toggleAlertBar();
      setCanSubmit(true);
      setVerifying(false);
    } catch (error) {
      if (!error.response) {
        setVerifying(false);
        toggleAlertBar("No response from the server. Pls check your network", "failed", true);
        return console.log("no response from the server");
      }
      if (error.response) {
        setUserValid(false);
        setVerifying(false);
        setCanSubmit(false);
      }
      console.log("there was an error", error);
    }
  };
  const handleTyping = debounce(verifyUserName, 900);

  const showPassword = (ref) => {
    ref.current.type = ref.current.type == "text" ? "password" : "text";
  };

  return (
    <div className="auth-container !mb-[5rem]">
      <form
        autoComplete="off"
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(user);
        }}
      >
        <h3>Create Account</h3>
        <p className="mb-[4.4rem]">
          You are almost there, just a few little details and we are good. Already a member?
          <Link replace href="/auth/sign-in">
            <a className="text-[#FCAC0D] ml-2">Sign In</a>
          </Link>
        </p>
        {/* {error && <p className=" !text-red-500">*{error}</p>} */}
        <div className="grid gap-5 gap-y-[2.4rem]">
          <div className="form-group">
            <label>Username</label>
            <input
              className={`w-full ${!userValid ? " !border-red-500 !border-[2px]" : ""}`}
              autoComplete="off"
              autofill="off"
              name="username"
              ref={usernameRef}
              onChange={handleTyping}
              required
              placeholder="Ex. Jonathan"
            />
            {verifying && (
              <span className="mt-3">
                <CircularProgress color="warning" size={20} />
              </span>
            )}
            {!userValid && <p className=" !text-[1.2rem] !font-normal !text-red-500">*Username is taken</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="relative">
              <input
                className={`w-full ${passError ? " !border-red-500 !border-[2px]" : ""}`}
                ref={passRef}
                minLength={8}
                onChange={(e) => {
                  setPassError("");
                  setConfError("");
                  setUser({ ...user, password: e.target.value });
                }}
                required
                type="password"
                placeholder="xxxxxxxxxxxx"
              />
              <svg
                onClick={() => {
                  showPassword(passRef);
                }}
                className="a absolute right-8 cursor-pointer top-10"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00002 0.643555C11.5947 0.643555 14.5854 3.23022 15.2127 6.64355C14.586 10.0569 11.5947 12.6436 8.00002 12.6436C4.40535 12.6436 1.41469 10.0569 0.787354 6.64355C1.41402 3.23022 4.40535 0.643555 8.00002 0.643555ZM8.00002 11.3102C9.35967 11.3099 10.6789 10.8481 11.7419 10.0003C12.8049 9.15257 13.5486 7.96907 13.8514 6.64355C13.5475 5.31909 12.8033 4.13689 11.7404 3.29024C10.6776 2.44359 9.35889 1.98257 8.00002 1.98257C6.64115 1.98257 5.32248 2.44359 4.2596 3.29024C3.19673 4.13689 2.45253 5.31909 2.14869 6.64355C2.45142 7.96907 3.19514 9.15257 4.25812 10.0003C5.3211 10.8481 6.64037 11.3099 8.00002 11.3102ZM8.00002 9.64355C7.20437 9.64355 6.44131 9.32748 5.8787 8.76488C5.31609 8.20227 5.00002 7.4392 5.00002 6.64355C5.00002 5.84791 5.31609 5.08484 5.8787 4.52223C6.44131 3.95963 7.20437 3.64355 8.00002 3.64355C8.79567 3.64355 9.55873 3.95963 10.1213 4.52223C10.6839 5.08484 11 5.84791 11 6.64355C11 7.4392 10.6839 8.20227 10.1213 8.76488C9.55873 9.32748 8.79567 9.64355 8.00002 9.64355ZM8.00002 8.31022C8.44205 8.31022 8.86597 8.13463 9.17853 7.82207C9.49109 7.50951 9.66669 7.08558 9.66669 6.64355C9.66669 6.20153 9.49109 5.7776 9.17853 5.46504C8.86597 5.15248 8.44205 4.97689 8.00002 4.97689C7.55799 4.97689 7.13407 5.15248 6.82151 5.46504C6.50895 5.7776 6.33335 6.20153 6.33335 6.64355C6.33335 7.08558 6.50895 7.50951 6.82151 7.82207C7.13407 8.13463 7.55799 8.31022 8.00002 8.31022Z"
                  fill="#FCAC0D"
                />
              </svg>
            </div>
            {passError && <p className=" !text-[1.2rem] !font-normal !text-red-500">*{passError}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="relative">
              <input
                ref={passConfRef}
                className={`w-full ${confError ? " !border-red-500 !border-[2px]" : ""}`}
                minLength={8}
                onChange={(e) => {
                  setCanSubmit(true);
                  setPassError("");
                  setConfError("");
                  setUser({ ...user, confirmPassword: e.target.value });
                }}
                type="password"
                required
                placeholder="xxxxxxxxxxxx"
              />
              <svg
                onClick={() => {
                  showPassword(passConfRef);
                }}
                className="a absolute right-8 cursor-pointer top-10"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00002 0.643555C11.5947 0.643555 14.5854 3.23022 15.2127 6.64355C14.586 10.0569 11.5947 12.6436 8.00002 12.6436C4.40535 12.6436 1.41469 10.0569 0.787354 6.64355C1.41402 3.23022 4.40535 0.643555 8.00002 0.643555ZM8.00002 11.3102C9.35967 11.3099 10.6789 10.8481 11.7419 10.0003C12.8049 9.15257 13.5486 7.96907 13.8514 6.64355C13.5475 5.31909 12.8033 4.13689 11.7404 3.29024C10.6776 2.44359 9.35889 1.98257 8.00002 1.98257C6.64115 1.98257 5.32248 2.44359 4.2596 3.29024C3.19673 4.13689 2.45253 5.31909 2.14869 6.64355C2.45142 7.96907 3.19514 9.15257 4.25812 10.0003C5.3211 10.8481 6.64037 11.3099 8.00002 11.3102ZM8.00002 9.64355C7.20437 9.64355 6.44131 9.32748 5.8787 8.76488C5.31609 8.20227 5.00002 7.4392 5.00002 6.64355C5.00002 5.84791 5.31609 5.08484 5.8787 4.52223C6.44131 3.95963 7.20437 3.64355 8.00002 3.64355C8.79567 3.64355 9.55873 3.95963 10.1213 4.52223C10.6839 5.08484 11 5.84791 11 6.64355C11 7.4392 10.6839 8.20227 10.1213 8.76488C9.55873 9.32748 8.79567 9.64355 8.00002 9.64355ZM8.00002 8.31022C8.44205 8.31022 8.86597 8.13463 9.17853 7.82207C9.49109 7.50951 9.66669 7.08558 9.66669 6.64355C9.66669 6.20153 9.49109 5.7776 9.17853 5.46504C8.86597 5.15248 8.44205 4.97689 8.00002 4.97689C7.55799 4.97689 7.13407 5.15248 6.82151 5.46504C6.50895 5.7776 6.33335 6.20153 6.33335 6.64355C6.33335 7.08558 6.50895 7.50951 6.82151 7.82207C7.13407 8.13463 7.55799 8.31022 8.00002 8.31022Z"
                  fill="#FCAC0D"
                />
              </svg>
            </div>
            {confError && <p className=" !text-[1.2rem] !font-normal !text-red-500">*{confError}</p>}
          </div>

          {/* BVN */}
          <div className="form-group">
            <label>BVN</label>
            <input
              className={`w-full ${!userValid ? " !border-red-500 !border-[2px]" : ""}`}
              name="username"
              ref={bvnRef}
              onChange={(e) => {
                setUser({ ...user, bvn: e.target.value });
              }}
              required
              placeholder="BVN"
            />
          </div>
          {/* DOB */}
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              max="2022-12-31"
              onChange={(e) => {
                console.log("date is ", e.target.value);
                setUser({ ...user, dob: e.target.value });
              }}
              ref={dateRef}
              className={`w-full !pr-[2rem] `}
              type="date"
              required
            />
          </div>
          {/* <div className="form-group">
            <label>Password</label>
            <input
              onChange={(e) => {
                setError("");
                setUser({ ...user, password: e.target.value });
              }}
              required
              type="password"
              placeholder="**************"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              onChange={(e) => {
                setError("");
                setUser({ ...user, confirmPassword: e.target.value });
              }}
              type="password"
              required
              placeholder="Enter email"
            />
          </div> */}
          <button hidden={canSubmit} className={`btn mt-[3.8rem] ${canSubmit ? "" : "cursor-not-allowed"}`}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

CreateAccount.Layout = AuthLayout;
export default CreateAccount;
