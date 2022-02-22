import React, { useState } from "react";

const SideBar = () => {
  const navs = ["Dashboard", "Tickets", "Wallet", "Reward", "Transaction"];
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="w-[326px] h-screen px-[47px] py-[49px] flex flex-col bg-[#010101] text-white">
      <img className="mb-[110px]"></img>
      <ul className="bg-r bg-slate-800">
        {navs.map((nav, i) => {
          return (
            <li
              className="flex items-center mb-[42px] cursor-pointer"
              key={i}
              onClick={() => {
                setActive(nav);
              }}
            >
              <div className={`transition-all duration-200 w-[10px] h-[10px] rounded-full bg-[#FCAC0D] mr-[26px] opacity-0 ${nav == active ? " opacity-100" : ""}`}></div>
              <i className={`icon icon-sidebar-wallet mr-[17px]  ${nav == active ? "  text-[#FCAC0D]" : ""}`}></i>
              <span className={`transition-all duration-200 font-normal text-[16px] text-white ${nav == active ? " text-[#FCAC0D] !font-bold text-[20px]" : ""}`}>{nav}</span>
            </li>
          );
        })}
      </ul>
      <button className="btn btn--outlined mt-auto mb-[57px]">Buy Reward Ticket</button>
    </div>
  );
};

export default SideBar;
