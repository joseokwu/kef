import React from "react";

const PoweredBy = () => {
  return (
    // <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]">
    <div className="py-[4.1rem] px-[3.9rem] sidebar:px-[5.9rem]  bg-party rounded-[2rem] bg-cover flex-1 bg-slate-900">
      <h3 className="mb-[1.92rem] font-bold text-[3.4rem] sidebar:text-[4.4rem] max-w-[408px] text-[#FAFAFA] leading-[4.8rem]">Kennis Music Easter Fiesta, 2022</h3>
      <p className="mb-[4.2rem] font-normal text-[1.4rem] max-w-[27rem] leading-[2rem] text-[#FAFAFA]">Get your ticket for the event and book your spot to the most exciting event this easter</p>
      <button className="btn btn--outlined text-white !border-white mb-[4.8rem]">Buy Event Ticket</button>
      <div className="flex items-center">
        <span className="font-normal text-[1.2rem] text-[#FAFAFA] mr-12">Powered by</span>
        <img src="/kudibar-logo.svg"></img>
      </div>
    </div>
  );
};

export default PoweredBy;
