import React from "react";
import PopupLayout from "../Layout/Popup";

const SelfCheckOut = ({ onCheckOut }) => {
  return (
    <div>
      <PopupLayout action={onCheckOut} actionText={"Continue"}>
        <div className="popup-box">
          <h3>Self Checkout</h3>
          <p className="!mb-[7.4rem]">Provide your purchase details and purchase location and confirm your payment</p>
          <form className="popup-form">
            <div className="form-group">
              <label>Vendor</label>
              <select placeholder="Ex. 1234567890">
                <option>Brand</option>
                <option>Vendor</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input placeholder="Ex. 1234567890"></input>
            </div>
          </form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default SelfCheckOut;
