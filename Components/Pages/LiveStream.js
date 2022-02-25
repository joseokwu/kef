import React, { useState } from "react";
import Popup from "../Layout/Popup";
import Modal from "../Modal";
import Dialog from "@mui/material/Dialog";

const LiveStream = () => {
  const [show, setShow] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }

  return (
    <div>
      <Dialog open={show} onClose={toggle}>
        <Popup>
          <div className="popup-box">
            <h3>Activate Card</h3>
            <p>NB - You will charged a fee of #200 to activate your card. To pickup the physical copy will attract an extra charge of #1,000.</p>
          </div>
        </Popup>
      </Dialog>

      <div className="flex flex-wrap">
        <div className="relative bg-[#F0F0F0] rounded-[2rem] max-w-[59.1rem] py-[3.9rem] px-[3.5rem] text-[1rem] flex-1 mr-4 hover:scale-[1.01] hover:shadow-sm cursor-pointer">
          <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[21.4rem]">Pay-Per-View to Get Access</h3>
          <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Watch the event as you go by buying the event ticket.</p>
          <img src="/3d-live.svg" className="absolute bottom-[3.3rem] right-[4rem] w-[45%]"></img>
        </div>
        <div className="relative bg-[#FFF6E4] rounded-[2rem] max-w-[59.1rem] py-[3.9rem] px-[3.5rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer">
          <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">Buy Data Bundle to Get Access</h3>
          <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Buy data bundles to get tickets to the event.</p>
          <img src="/3d-hand-phone.svg" className="absolute bottom-0 right-[4rem] w-[45%]"></img>
        </div>
      </div>
      <button
        onClick={() => {
          setShow(true);
        }}
        className="btn"
      >
        OPen
      </button>
    </div>
  );
};

export default LiveStream;
