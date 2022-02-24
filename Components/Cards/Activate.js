import React, { useState } from "react";
import CountDown from "../Dashboard/CountDown";

const Activate = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="py-[5.4rem] px-[5.2rem]  rounded-[2rem] max-w-[50.4rem] bgGrad text-white relative overflow-hidden h-[30rem] flex-grow min-w-max mb-[3.2rem]">
      <h2 className="text-[2.8rem] font-bold leading-[3.4rem] mb-[1.2rem]">Activate Card</h2>
      <p className="font-normal leading-[2rem] text-[1.4rem]  w-[27rem]">You have to activate your card to start making purchases. Kindly do that ASAP.</p>
      <div className="flex items-center">
        {!visible && (
          <button
            onClick={() => {
              setVisible(true);
            }}
            className="btn !bg-white white-shadow !text-black mr-[29rem] mt-[3.7rem]"
          >
            Activate
          </button>
        )}
        {visible && <CountDown completed={<h2 className="text-[2.8rem] font-bold leading-[3.4rem] mb-[1.2rem] mr-[18rem] mt-[2rem]">Timer completed</h2>}></CountDown>}

        <img src="/3d-hand-card.png" className="absolute bottom-0 right-0 h-[311px]"></img>
      </div>
    </div>
  );
};

export default Activate;
