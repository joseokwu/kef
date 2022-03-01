import React from "react";
import Link from "next/link";
import GotMail from "../../Components/Auth/GotMail";

const forgotPassword = () => {
  return (
    <div className=" w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto">
      <header className="flex items-center px-[12.5rem] py-[5.6rem]">
        <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
        <button className="btn ml-auto">Buy Event Ticket</button>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Verify Ticket</button>
      </header>
      <main>
        <div className="auth-container !mb-[10rem]">
          <form className="auth-form">
            <h3>Forgot Password</h3>
            <p className="mb-[7.4rem]">Hey there! Having issues with your account? Don’t worry we have the spare key for you.</p>

            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group col-span-2">
                <label>Username or Phone Number</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <button className="btn col-span-2 mt-[6.8rem]">Continue</button>
            </div>
          </form>
        </div>
        {/* <GotMail></GotMail> */}
      </main>
    </div>
  );
};

export default forgotPassword;
