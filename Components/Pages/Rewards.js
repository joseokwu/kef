import React from "react";
import LatestWinnerCard from "../Cards/LatestWinnerCard";
import PoweredBy from "../Cards/PoweredBy";
import TableV1 from "../Tables/TableV1";

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

        <TableV1></TableV1>
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
