import React from "react";
import Link from "next/link";

const signIn = () => {
  return (
    <div className=" w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto relative bg-black ">
      {/* <video autoPlay muted loop id="myVideo" className="fixed top-0 left-0 h-screen w-full object-cover z-0 opacity-40">
        <source src="/fire.mp4" type="video/mp4" />
      </video> */}
      <header className="flex items-center px-[12.5rem] py-[5.6rem] z-50 relative">
        <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
        <button className="btn ml-auto">Buy Event Ticket</button>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Verify Ticket</button>
      </header>
      <main>
        <div className="auth-container !mb-[10rem]">
          <form className="auth-form">
            <h3>Sign In</h3>
            <p className="mb-[7.4rem]">
              Hey there! Welcome back. Not yet a member?{" "}
              <Link href="/auth/sign-up">
                <a className="text-[#FCAC0D]">Sign Up</a>
              </Link>
            </p>

            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group col-span-2">
                <label>Username or Phone Number</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group col-span-2">
                <label>Password</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <button className="btn col-span-2 mt-[6.8rem]">Log In</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default signIn;
