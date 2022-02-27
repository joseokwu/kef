import React from "react";
import PopupLayout from "../Layout/Popup";

const AmountOfTickets = ({ onSelected }) => {
  return (
    <div>
      <PopupLayout action={onSelected} actionText={"Buy Ticket"}>
        <div className="popup-box">
          <h3>Buy Raffle Ticket</h3>
          <p className="!mb-[3.7rem]">Raffle tickets are sold at #500 per ticket. There is no discount for multiple ticket purchases.</p>

          {/* Increament Decrement */}
          <div className="grid grid-flow-col gap-x-[2.2rem] mb-[1.7rem]">
            <span className="h-[9.7rem] w-[8.8rem] grid place-items-center bg-[#FFF7E7] rounded-[2rem] border-2 border-[#FCAC0D] cursor-pointer">
              <span className="font font-medium text-[5.6rem]">-</span>
            </span>
            <span className="h-[9.7rem] w-[23.7rem] border-2 border-[#000000] bg-[#F8F9FD] rounded-[2rem] grid place-items-center text-[3.6rem] font-bold leading-[4.3rem]">5</span>
            <span className="h-[9.7rem] w-[8.8rem] grid place-items-center bg-[#FFF7E7] rounded-[2rem] border-2 border-[#FCAC0D] cursor-pointer">
              <span className="font font-medium text-[5.6rem]">+</span>
            </span>
          </div>
        </div>
        {/* Total */}
        <div className="py-[3rem] px-[12.2rem] rounded-[2rem] bg-[#F8F9FD] grid place-items-center">
          <p className="font-semibold text-[3rem] text-[#CECECE] leading-[3.6rem] whitespace-nowrap">Total - N2,500</p>
        </div>
      </PopupLayout>
    </div>
  );
};

export default AmountOfTickets;
