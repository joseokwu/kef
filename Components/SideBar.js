import React, { useState } from "react";

const SideBar = ({ activePage, setActivePage }) => {
  const pages = ["Dashboard", "Raffle Tickets", "Rewards", "Livestream Event"];
  const icons = ["Dashboard", "Raffle-Tickets", "Rewards", "Livestream-Event"];
  // const [active, setActive] = useState("Dashboard");
  return (
    <>
      <div className="w-[37rem] h-screen px-[4.7rem] py-[4.9rem] hidden flex-col bg-[#010101] text-white bg-sidebar sidebar:flex">
        <img src="/kef-logo.svg" className="mb-[5.1rem] w-[11.3rem] mx-auto"></img>
        <ul className="bg-r whitespace-nowrap">
          {pages.map((page, i) => {
            return (
              <li
                className="flex items-center mb-[4.2rem] cursor-pointer"
                key={i}
                onClick={() => {
                  setActivePage(page);
                }}
              >
                <div className={`transition-all duration-200 w-[1rem] h-[1rem] rounded-full bg-[#FCAC0D] mr-[2.6rem] opacity-0 ${page == activePage ? " opacity-100" : ""}`}></div>
                <i className={`icon icon-${icons[i]} mr-[1.7rem] text-[1.8rem] ${icons[i] == "Dashboard" ? " text-[2.8rem]" : ""}  ${page == activePage ? "  text-[#FCAC0D]" : ""}`}></i>
                <span className={`transition-all duration-200 font-normal text-[1.6rem] text-white ${page == activePage ? " text-[#FCAC0D] !font-bold text-[2rem]" : ""}`}>{page}</span>
              </li>
            );
          })}
        </ul>
        <button className="btn btn--outlined mt-auto mb-[57px]">Buy Reward Ticket</button>
      </div>
      <div className="fixed bottom-0 right-0 h-[8rem] bg-black w-screen z-50 flex sidebar:hidden"></div>
    </>
  );
};

export default SideBar;
