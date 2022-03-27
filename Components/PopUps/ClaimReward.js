import React from "react";
import PopupLayout from "../Layout/Popup";

const ClaimReward = ({ onClaimReward, onCancel }) => {
  return (
    <div>
      <PopupLayout cancelAction={onCancel} action={onClaimReward} actionText={"Claim Reward"}>
        <div className="popup-box">
          <h3>Claim Reward</h3>
          <p className="">Congratulations on winning this weeks raffle draw. Here are all your winnings for this week.</p>
          <div className="mb-[1.6rem] px-[2rem] mobile:px-[5.9rem] h-[12.1rem] rounded-[2rem] flex items-center justify-between default-shadow relative overflow-hidden">
            <span className="mr-[14.5rem] text-[2.8rem] font-medium text-[#747474] z-10">
              You won <span className="font-bold">N100,000!!</span>
            </span>
            <img className="absolute bottom-0 right-10 w-[12rem] sidebar:w-[14.8rem]" src="/3d-trophy.svg" />
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default ClaimReward;
