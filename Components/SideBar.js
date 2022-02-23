import React, { useState } from "react";

const SideBar = () => {
  const navs = ["Dashboard", "Tickets", "Wallet", "Reward", "Transaction"];
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="w-[32.6rem] h-screen px-[4.7rem] py-[4.9rem] flex flex-col bg-[#010101] text-white bg-sidebar">
      <img className="mb-[11rem]"></img>
      <ul className="bg-r ">
        {navs.map((nav, i) => {
          return (
            <li
              className="flex items-center mb-[4.2rem] cursor-pointer"
              key={i}
              onClick={() => {
                setActive(nav);
              }}
            >
              <div className={`transition-all duration-200 w-[1rem] h-[1rem] rounded-full bg-[#FCAC0D] mr-[2.6rem] opacity-0 ${nav == active ? " opacity-100" : ""}`}></div>
              <i className={`icon icon-sidebar-wallet mr-[1.7rem] text-[1.8rem]  ${nav == active ? "  text-[#FCAC0D]" : ""}`}></i>
              <span className={`transition-all duration-200 font-normal text-[1.6rem] text-white ${nav == active ? " text-[#FCAC0D] !font-bold text-[2rem]" : ""}`}>{nav}</span>
            </li>
          );
        })}
      </ul>
      <button className="btn btn--outlined mt-auto mb-[57px]">Buy Reward Ticket</button>
    </div>
  );
};

export default SideBar;
