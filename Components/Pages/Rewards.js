import React, { useState } from "react";
import LatestWinnerCard from "../Cards/LatestWinnerCard";
import PoweredBy from "../Cards/PoweredBy";
import TableV1 from "../Tables/TableV1";
import ClaimReward from "../PopUps/ClaimReward";
import { Dialog } from "@mui/material";

const Rewards = () => {
  const [activeModal, setActiveModal] = useState("");
  const [show, setShow] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }

  function onClaimReward() {
    toggle();
  }
  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {activeModal == "ClaimReward" && <ClaimReward onClaimReward={onClaimReward}></ClaimReward>}
      </Dialog>
      <div className="flex flex-wrap gap-10">
        <section className="flex-1">
          {/* You Won */}
          <div className="bg-[#FFF6E4] rounded-[2rem] px-[3rem] mobile:px-[5.1rem] py-[3rem] mobile:py-[3.9rem] min-w-[33rem] relative mb-[3.2rem]">
            <h3 className="font-bold text-[3.2rem] leading-[3.9rem] text-[#3C3E42]">Your Ticket Won</h3>
            <p className="font-normal text-[1.4rem] leading-[2rem] text-[#717171] w-[25.9rem] mt-[1rem]">Congratulations! Your ticket won the raffle draw for this week.</p>
            <button
              onClick={() => {
                setShow(true);
                setActiveModal("ClaimReward");
              }}
              className="btn btn--outlined mt-[5.8rem] !border-2 !border-[black]"
            >
              Claim Reward
            </button>
            <img src="/3d-trophy.svg" className="bottom-0 right-0 absolute h-[17rem] mobile:h-[19.8rem]"></img>
          </div>
          {/* Top Winners */}

          <TableV1 data={"data"}></TableV1>
        </section>

        {/*  */}
        <section className="flex-1">
          <LatestWinnerCard />
          <PoweredBy />
        </section>
      </div>
    </>
  );
};

export default Rewards;
