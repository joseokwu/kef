import React from "react";

const Activate = () => {
  return (
    <div className="py-[5.4rem] px-[5.2rem]  rounded-[2rem] max-w-[50.4rem] bgGrad text-white relative overflow-hidden h-[30rem] flex-grow min-w-max mb-[3.2rem]">
      <h2 className="text-[2.8rem] font-bold leading-[3.4rem] mb-[1.2rem]">Activate Card</h2>
      <p className="font-normal leading-[2rem] text-[1.4rem] mb-[3.7rem] w-[27rem]">You have to activate your card to start making purchases. Kindly do that ASAP.</p>
      <div className="flex items-center">
        <button className="btn !bg-white white-shadow !text-black mr-[29rem]">Activate</button>
        <img src="/3d-hand-card.png" className="absolute bottom-0 right-0 h-[311px]"></img>
      </div>
    </div>
  );
};

export default Activate;
