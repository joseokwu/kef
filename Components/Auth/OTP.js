import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AuthStatus from "./Status";
import { useRouter } from "next/router";
import { setLoginStatus } from "../../store/user";

const OTP = ({ action }) => {
  const [showStatus, setShowStatus] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const onSuccess = () => {
    dispatch(setLoginStatus(true));
    router.replace("/dashboard");
  };
  return (
    <>
      {!showStatus && (
        <div className="auth-container !mb-[10rem]">
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              setShowStatus(true);
            }}
          >
            <h3>OTP Verification</h3>
            <p className="mb-[7.4rem]">Enter the code that was sent to your mail to continue registration.</p>

            <div className="grid grid-cols-5 gap-5 gap-y-[2.4rem]">
              <div className="form-group ">
                <input className="!px-5" placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group ">
                <input className="!px-5" placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group ">
                <input className="!px-5" placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group ">
                <input className="!px-5" placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group ">
                <input className="!px-5" placeholder="Ex. Jonathan" />
              </div>

              <button className="btn col-span-5 mt-[6.8rem]">Verify OTP</button>
            </div>
          </form>
        </div>
      )}
      {showStatus && <AuthStatus action={onSuccess} status={"success"}></AuthStatus>}
    </>
  );
};

export default OTP;
