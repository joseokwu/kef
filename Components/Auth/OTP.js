import React from "react";

const OTP = ({ action }) => {
  return (
    <div className="auth-container !mb-[10rem]">
      <form className="auth-form">
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

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="btn col-span-5 mt-[6.8rem]"
          >
            Verify OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTP;
