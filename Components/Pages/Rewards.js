import React from "react";
import LatestWinnerCard from "../Cards/LatestWinnerCard";
import PoweredBy from "../Cards/PoweredBy";

const Rewards = () => {
  return (
    <div className="flex">
      <section className="mr-[2.4rem]">
        {/* You Won */}
        <div className="bg-[#FFF6E4] rounded-[2rem] px-[5.1rem] py-[3.9rem] min-w-[52rem] max-h-[29.9rem] relative">
          <h3 className="font-bold text-[3.2rem] leading-[3.9rem] text-[#3C3E42]">Your Ticket Won</h3>
          <p className="font-normal text-[1.4rem] leading-[2rem] text-[#717171] w-[25.9rem] mt-[1rem]">Congratulations! Your ticket won the raffle draw for this week.</p>
          <button className="btn btn--outlined mt-[5.8rem] !border-2 !border-[black]">Claim Reward</button>
          <img src="/3d-trophy.svg" className="bottom-0 right-0 absolute h-[19.8rem]"></img>
        </div>
        {/* Top Winners */}
        {/*  Table*/}
        <div className="rounded-[2rem] bg-white min-w-[52rem] mt-[3.2rem]">
          {/* Table Head */}
          <div className=" px-[4.2rem] py-[3rem]">
            <h3 className="font-bold text-black text-[2.1rem] leading-[2.1rem]">Top Winners</h3>
          </div>
          {/* Table Body */}
          <div className="body  px-[4.2rem] pb-[3rem]">
            {/* row */}
            <div className="row flex justify-between items-center pb-[1.6rem] text-[#706C6C] rounded-[2rem] leading-[2.1rem] text-[1.8rem]">
              <img className="h-[4.2rem] w-[4.2rem] object-cover rounded-full" src="/user-img.jpg" />
              <span className="font-normal mr-auto ml-[1.9rem]">Winner Okpere </span>
              <span className="text-[#717171] font-bold text-[1.7rem]">6 Wins</span>
            </div>
            {/* end row */}
            {/* row */}
            <div className="row flex justify-between items-center pb-[1.6rem] text-[#706C6C] rounded-[2rem] leading-[2.1rem] text-[1.8rem]">
              <img className="h-[4.2rem] w-[4.2rem] object-cover rounded-full" src="/user-img.jpg" />
              <span className="font-normal mr-auto ml-[1.9rem]">Winner Okpere </span>
              <span className="text-[#717171] font-bold text-[1.7rem]">6 Wins</span>
            </div>
            {/* end row */}
          </div>
        </div>
        <div></div>
      </section>

      {/*  */}
      <section>
        <LatestWinnerCard />
        <PoweredBy />
      </section>
    </div>
  );
};

export default Rewards;
