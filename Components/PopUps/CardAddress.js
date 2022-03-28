import React from "react";
import PopupLayout from "../Layout/Popup";

const CardAddress = ({ onFillCardAddress, onCancel }) => {
  return (
    <PopupLayout cancelAction={onCancel} action={onFillCardAddress} actionText={"Continue"}>
      <div className="popup-box">
        <h3>Card Holder Address</h3>
        <p className="">Provide an address that your card will be delivered to when it’s ready</p>
      </div>
      <form className="popup-form grid grid-cols-1 mobile:grid-cols-2 gap-x-[2.6rem] ">
        <div className="form-group mobile:col-span-2">
          <label>Address</label>
          <input placeholder="Ex. 1234567890"></input>
        </div>
        <div className="form-group">
          <label>City</label>
          <input placeholder="Ex. 1234567890"></input>
        </div>
        <div className="form-group">
          <label>State</label>
          <select placeholder="Ex. 1234567890">
            <option>Lagos</option>
            <option>Abuja</option>
          </select>
        </div>
      </form>
    </PopupLayout>
  );
};

export default CardAddress;
