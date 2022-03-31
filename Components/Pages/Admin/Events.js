import React from "react";

const Events = () => {
  return (
    <div className="flex flex-wrap gap-16">
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Pay-Per-View");
        }}
        className="relative bg-[#F0F0F0] rounded-[2rem] max-w-[59.1rem] py-[3.9rem] px-[3.5rem] text-[1rem] min-w-[27rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[21.4rem]">Kennis Event Day 1</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-calendar.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
      <div
        onClick={() => {
          setShow(true);
          setActiveModal("PaymentOptions");
          setAccessType("Data Bundle");
        }}
        className="relative bg-[#FFF6E4] min-w-[27rem] rounded-[2rem] max-w-[59.1rem] py-[3.9rem] px-[3.5rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer"
      >
        <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">Kennis Event Day 2</h3>
        <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">View event analytics for this event.</p>
        <img src="/3d-calendar.svg" className="absolute bottom-[0rem] right-[0rem] w-[45%]"></img>
      </div>
    </div>
  );
};

export default Events;
