import React from "react";
import Link from "next/link";

const Container = ({ children }) => {
  return <div className="max-w-[132rem] mx-auto w-full px-[1rem]">{children}</div>;
};

const LandingPage = () => {
  return (
    <div className=" bg-homepage flex flex-col h-screen justify-between">
      <Container>
        {" "}
        <header className="flex items-center py-[4rem]">
          <img src="/kef-logo.svg" className="mr-auto w-[6.4rem]"></img>
          <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem]">
            BRANDS
          </a>
          <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem]">
            ARTISTS
          </a>
          <Link href={"/auth/sign-up"}>
            <button className="btn btn--outlined text-white !px-[6rem]">Sign Up</button>
          </Link>
          <button className="btn btn--outlined text-white ml-[2.4rem]">Self Checkout</button>
        </header>
      </Container>
      <Container>
        <main className="h-full">
          <div>
            <span className=" font-bold text-[2.5rem] leading-[3rem] text-[#FCAC0D]">22nd Edition</span>
            <h1 className=" font-bold text-[9.4rem] leading-[9.1rem] max-w-[73.9rem] text-white ">
              Kennis<br></br> Music Easter {""} Festival
            </h1>
            <p className=" font-medium text-[1.6rem] leading-[2.6rem] text-white mt-[3.1rem] mb-[6.5rem] max-w-[58.7rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sodales vestibulum nullam amet, tempus iaculis. Eget sagittis cursus amet.
            </p>
          </div>

          {/* CTA */}
          <section className="flex items-center">
            <button className="btn mr-[4.5rem]">Mint Event Ticket</button>
            <span className="flex items-center text-[1.4rem] font-semibold text-white">
              <img className="mr-[1.1rem]" src="/play-promo.svg"></img>Play Promotional Video
            </span>
          </section>
        </main>
      </Container>

      <footer className=" bg-black py-[3.5rem]   w-full">
        <Container>
          <div className="flex items-center">
            <span className=" mr-auto font-normal text-white text-[1.4rem]">All rights reserved. Copyright 2022</span>
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
