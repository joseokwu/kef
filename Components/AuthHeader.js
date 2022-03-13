import React from "react";

const AuthHeader = () => {
  return (
    <header className="flex items-center px-[12.5rem] py-[5.6rem]">
      <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
      <button className="btn ml-auto">Buy Event Ticket</button>
      <button className="btn btn--outlined text-white ml-[2.4rem]">Sign Up</button>
    </header>
  );
};

export default AuthHeader;
