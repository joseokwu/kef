import React from "react";
import PopupLayout from "../Layout/Popup";

const VerifyPayment = ({ onVerify }) => {
  return (
    <div>
      <PopupLayout action={onVerify} actionText={"Verify Ticket"}>
        <div className="popup-box">
          <h3>Verify Payment</h3>
          <p className="!mb-[7.4rem]">Enter reference number on the receipt print out to verify purchase</p>
          <form className="popup-form">
            <div className="form-group">
              <label>Reference number</label>
              <input placeholder="Ex. 1234567890"></input>
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input placeholder="Ex. 1234567890"></input>
            </div>
          </form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default VerifyPayment;
