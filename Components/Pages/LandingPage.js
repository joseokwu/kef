import React, { useState } from "react";
import Link from "next/link";
import useLoading from "../../hooks/useLoading";

const Container = ({ children }) => {
  return <div className="max-w-[142rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const { toggleLoad } = useLoading();

  const onSignUp = () => {
    toggleLoad();
    setTimeout(() => {
      toggleLoad();
    }, 1000);
  };
  return (
    <div className=" bg-homepage flex flex-col h-screen justify-between">
      <Container>
        {" "}
        <header className="flex items-center py-[4rem]">
          <img src="/kef-logo.svg" className="mr-auto w-[6.4rem]"></img>

          {/* Desktop Nav */}
          <div className="items-center hidden sidebar:flex ">
            <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem]">
              BRANDS
            </a>
            <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem]">
              ARTISTS
            </a>
            <Link href={"/auth/sign-up"}>
              <button className="btn btn--outlined text-white !px-[6rem]">Sign Up</button>
            </Link>
            <button
              onClick={() => {
                onSignUp();
              }}
              className="btn btn--outlined text-white ml-[2.4rem]"
            >
              Self Checkout
            </button>
          </div>

          {/* Burger Menu */}
          <button
            className="block sidebar:hidden"
            onClick={() => {
              setShow(true);
            }}
          >
            <span className="h-[.5rem] w-[3rem] bg-white flex mb-3"></span>
            <span className="h-[.5rem] w-[3rem] bg-white flex mb-3"></span>
            <span className="h-[.5rem] w-[3rem] bg-white flex"></span>
          </button>

          {/* Mobile Nav... */}
          <div
            className={`grid grid-flow-row place-items-center sidebar:hidden bg-black justify-center fixed left-0 transition-all ease-out duration-200 -top-full ${
              show ? " !top-0" : ""
            } w-screen px-[3.8rem] py-[7.4rem]`}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setShow(false);
              }}
              className="w-[4rem] h-[4rem] rounded-full absolute right-[4rem] top-[4rem] bg-white grid place-items-center"
            >
              <span className="w-[2.5rem] bg-black h-[.5rem] flex rotate-45 relative top-1/2"></span>
              <span className="w-[2.5rem] bg-black h-[.5rem] flex -rotate-45 relative bottom-1/2"></span>
            </button>
            <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
              BRANDS
            </a>
            <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
              ARTISTS
            </a>
            <Link href={"/auth/sign-up"}>
              <button className="btn btn--outlined text-white !px-[6rem] mb-[2.4rem]">Sign Up</button>
            </Link>
            <button className="btn btn--outlined text-white">Self Checkout</button>
          </div>
        </header>
      </Container>
      <Container>
        <main className="h-full">
          <div>
            <span className=" font-bold text-[1.6rem] mobile:text-[2.5rem] leading-[3rem] text-[#FCAC0D] mb-[1.6rem] mobile:mb-[.8rem]">22nd Edition</span>
            <h1 className=" font-bold text-[4rem] mobile:text-[9.4rem] leading-[4rem] mobile:leading-[9.1rem] max-w-[73.9rem] text-white uppercase ">
              Kennis<br></br> Music Easter {""} Festival
            </h1>
            <p className=" font-medium text-[1.4rem] mobile:text-[1.6rem] leading-[2rem] mobile:leading-[2.6rem] text-white mt-[2.4rem] mobile:mt-[3.1rem] mb-[6.5rem] max-w-[58.7rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sodales vestibulum nullam amet, tempus iaculis. Eget sagittis cursus amet.
            </p>
          </div>

          {/* CTA */}
          <section className="flex items-center flex-wrap">
            <button className="btn mr-[4.5rem] !px-[7.2rem] mb-[3.7rem] mobile:mb-0">Mint Event Ticket</button>
            <span className="flex items-center text-[1.4rem] font-semibold text-white">
              <img className="mr-[1.1rem]" src="/play-promo.svg"></img>Play Promotional Video
            </span>
          </section>
        </main>
      </Container>

      <footer className=" bg-black py-[3.5rem]   w-full">
        <Container>
          <div className="flex items-center flex-wrap">
            <span className=" mr-auto font-normal text-white text-[1.4rem] mb-[2.9rem] mobile:mb-0">All rights reserved. Copyright 2022</span>
            <div className="flex items-center">
              <img src="/twitter.svg"></img>
              <img className="ml-[2.9rem]" src="/insta.svg"></img>
              <img className="ml-[2.9rem]" src="/yt.svg"></img>
              <img className="ml-[2.9rem]" src="/fb.svg"></img>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
