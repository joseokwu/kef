import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AmountOfTickets from "./PopUps/AmountOfTickets";
import VerifyPayment from "./PopUps/VerifyPayment";
import PaymentOptions from "./PopUps/PaymentOptions";
import PopupStatus from "./PopUps/PopUpStatus";
import CardAddress from "./PopUps/CardAddress";
import ActivateCard from "./PopUps/ActivateCard";
import ClaimReward from "./PopUps/ClaimReward";
import { Tooltip } from "@mui/material";
import SelfCheckOut from "./PopUps/SelfCheckOut";
import ReviewCheckOut from "./PopUps/ReviewCheckOut";

const Header = ({ title, setActivePage }) => {
  // const VerifyPaymentProcess = ["VerifyPayment", "Status"];
  const [activeModal, setActiveModal] = useState("");

  const [show, setShow] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }

  function onVerify() {
    setActiveModal("Status");
  }
  function onCheckOut() {
    setActiveModal("ReviewCheckOut");
  }

  function onReview() {
    setActiveModal("Status");
  }
  function onSelected() {
    setActiveModal("PaymentOptions");
  }

  function onSelectPayOption() {
    setActiveModal("Status");
  }

  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {activeModal == "Status" && (
          <PopupStatus action={toggle} title={"Purchase Order Success"} link="/" linkText="Go to dashboard" text={"Your purchase order for 20 tickets was successful"} status={"success"}></PopupStatus>
        )}
        {/* <CardAddress></CardAddress> */}
        {/* <ActivateCard></ActivateCard> */}
        {/* <ClaimReward></ClaimReward> */}
        {activeModal == "PaymentOptions" && <PaymentOptions onSelectPayOption={onSelectPayOption}></PaymentOptions>}
        {activeModal == "AmountOfTickets" && <AmountOfTickets onSelected={onSelected}></AmountOfTickets>}
        {activeModal == "VerifyPayment" && <VerifyPayment onVerify={onVerify}></VerifyPayment>}
        {activeModal == "SelfCheckOut" && <SelfCheckOut onCheckOut={onCheckOut}></SelfCheckOut>}
        {activeModal == "ReviewCheckOut" && <ReviewCheckOut onReview={onReview}></ReviewCheckOut>}
        {/* {activeModal == "VerifyPayment" && <VerifyPayment onVerify={onVerify}></VerifyPayment>} */}
      </Dialog>
      <div className="flex items-center mb-[4.5rem] hdr:mb-[8.4rem] w-full">
        <h1 className="h1">{title}</h1>
        <div className="flex flex-wrap ml-auto">
          {/* Buttons */}
          <div className="flex-none hidden items-center ml-auto hdr:flex ">
            <button
              onClick={() => {
                setActiveModal("SelfCheckOut");
                setShow(true);
              }}
              className="btn ml-auto !bg-[#F0F0F0]"
            >
              Self Checkout
            </button>
            <button
              onClick={() => {
                setActiveModal("AmountOfTickets");
                setShow(true);
              }}
              className="btn ml-[1.6rem]"
            >
              Buy Raffle Ticket
            </button>
          </div>
          {/* User Profile */}
          <div className="flex items-center ml-auto">
            <div className=" w-[42px] h-[42px] rounded-full grid place-items-center bg-[#FFF7E7] ml-auto mobile:ml-[59px] mr-[16px]">
              <i className="icon icon-notification text-[1.7rem]"></i>
            </div>
            <div className="b border-l">
              <Tooltip title="Profile" leaveDelay={200}>
                <img
                  onClick={() => {
                    setActivePage("Profile");
                  }}
                  className="h-[4.2rem] cursor-pointer w-[4.2rem] object-cover rounded-full ml-[16px] yellow-shadow"
                  src="/user-img.jpg"
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-auto hdr:hidden mb-[4.5rem] overflow-scroll scroll_hide">
        <button
          onClick={() => {
            setActiveModal("VerifyPayment");
            setShow(true);
          }}
          className="btn ml-auto !bg-[#F0F0F0]"
        >
          Verify Payment
        </button>
        <button
          onClick={() => {
            setActiveModal("AmountOfTickets");
            setShow(true);
          }}
          className="btn ml-[1.6rem]"
        >
          Buy Raffle Ticket
        </button>
      </div>
    </>
  );
};

export default Header;
