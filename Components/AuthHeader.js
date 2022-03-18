import React from "react";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <header className="flex items-center px-[12.5rem] py-[5.6rem] fixed top-0 left-0 w-full z-10">
      <Link href={"/"}>
        <img className="w-[8.9rem] cursor-pointer" src="/kef-logo.svg"></img>
      </Link>
      <button className="btn ml-auto">Buy Event Ticket</button>
      <Link href={"/auth/sign-up"}>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Sign Up</button>
      </Link>
    </header>
  );
};

export default AuthHeader;
