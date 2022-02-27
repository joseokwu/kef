import React from "react";
import PopupLayout from "../Layout/Popup";

const ClaimReward = ({ onClaimReward }) => {
  return (
    <div>
      <PopupLayout action={onClaimReward} actionText={"Claim Reward"}>
        <div className="popup-box">
          <h3>Claim Reward</h3>
          <p className="">Congratulations on winning this weeks raffle draw. Here are all your winnings for this week.</p>
          <div className="mb-[1.6rem] px-[5.9rem] h-[12.1rem] rounded-[2rem] flex items-center justify-between default-shadow">
            <span className="mr-[14.5rem] text-[2.8rem] font-medium text-[#747474]">
              You won <span className="font-bold">N100,000!!</span>
            </span>
            <img src="/3d-trophy.svg" />
          </div>
          <div className="px-[5.9rem] h-[12.1rem] rounded-[2rem] flex items-center justify-between default-shadow">
            <span className="mr-[14.5rem] text-[2.8rem] font-medium text-[#747474]">
              You won <span className="font-bold">N100,000!!</span>
            </span>
            <img src="/3d-trophy.svg" />
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default ClaimReward;
