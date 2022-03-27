import React from "react";

import PopupLayout from "../Layout/Popup";

const ActDetails = ({ action, cancelAction = () => {} }) => {
  return (
    <PopupLayout cancelAction={cancelAction} actionText={"Copy Details"} action={action}>
      <div className="popup-box ">
        <h3>Account Details</h3>
        <p className="!mb-[4rem]">This is the account details attached to your back account.</p>
        <div className="bg-[#F8F9FD] rounded-[2rem] p-[2.3rem] ">
          <div className=" text-center mb-[1.5rem]">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem]">Account Number</span>
            <h2 className="text-[2.2rem] font-semibold leading-[2.6rem]">1234567890</h2>
          </div>
          <div className=" text-center mb-[1.5rem]">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem]">Account Name</span>
            <h2 className="text-[2.2rem] font-semibold leading-[2.6rem]">John Chukwudi</h2>
          </div>
          <div className=" text-center mb-[1.5rem]">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem]">Bank Name</span>
            <h2 className="text-[2.2rem] font-semibold leading-[2.6rem]">Parallax Bank</h2>
          </div>
        </div>
      </div>
    </PopupLayout>
  );
};

export default ActDetails;
