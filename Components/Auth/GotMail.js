import React from "react";

const GotMail = ({ action }) => {
  return (
    <div className="auth-container !mb-[10rem]">
      <div className="auth-form grid place-items-center justify-center">
        <img className="mb-[5.8rem] mt-[8rem]" src="/3d-mail.svg" />
        <h3 className="!mb-[1.4rem]">You’ve Got Mail</h3>
        <p className="!text-center flex !mb-[5.8rem] w-[37.1rem]">We sent you a mail to verify your account and continue your registration.</p>
        <a
          onClick={(e) => {
            e.preventDefault();
            action();
          }}
          className="text-[1.7rem] font-bold text-[#FCAC0D] underline mb-[6rem]"
        >
          Continue to verification
        </a>
      </div>
    </div>
  );
};

export default GotMail;
