import React from "react";

const Header = () => {
  return (
    <div className="flex items-center mb-[8.4rem] max-w-[108rem]">
      <h1 className="h1">Tickets</h1>
      <button className="btn ml-auto">Buy Raffle Ticket</button>
      <div className=" w-[42px] h-[42px] rounded-full grid place-items-center bg-[#FFF7E7] ml-[59px] mr-[16px]">
        <i className="icon icon-notification text-[1.7rem]"></i>
      </div>
      <div className="b border-l">
        <img className="h-[4.2rem] w-[4.2rem] object-cover rounded-full ml-[16px] yellow-shadow" src="/user-img.jpg" />
      </div>
    </div>
  );
};

export default Header;
