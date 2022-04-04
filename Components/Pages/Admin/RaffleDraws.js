import React from "react";

const RaffleDraws = () => {
  return (
    <div className="grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] lg:!grid-cols-[repeat(2,_minmax(28rem,_1fr))] gap-[3.6rem]">
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Pay-Per-View");
        }}
        className=" flex-2 relative bg-[#F0F0F0] rounded-[2rem]  py-[3.9rem] px-[3.5rem] text-[1rem]  hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[21.4rem]">Start Raffle Draw</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-start.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Data Bundle");
        }}
        className="flex-2 relative bg-[#FFF6E4]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">Raffle Winners</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-trophy.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Data Bundle");
        }}
        className=" flex-2 relative bg-[#FFF6E4]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">Weekly Draw</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-calendar.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Data Bundle");
        }}
        className=" flex-2 relative bg-[#FFF6E4]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">On Event Draw</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-calendar.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Data Bundle");
        }}
        className=" flex-2 relative bg-[#FFF6E4]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">Automated Draw</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-calendar.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
    </div>
  );
};

export default RaffleDraws;
