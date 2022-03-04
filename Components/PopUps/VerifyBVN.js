import React from "react";
import PopupLayout from "../Layout/Popup";

const VerifyBVN = ({ onInputBVN }) => {
  return (
    <PopupLayout action={onInputBVN} actionText={"Continue"}>
      <div className="popup-box">
        <h3>Verify BVN</h3>
        <p className=" max-w-[45.2rem]">Provide your Bank Verification Number to help us create your card</p>
      </div>
      <form className="popup-form grid grid-cols-2 gap-x-[2.6rem] ">
        <div className="form-group col-span-2">
          <label>BVN</label>
          <input placeholder="Ex. 1234567890" className="mb-[8.8rem]"></input>
        </div>
      </form>
    </PopupLayout>
  );
};

export default VerifyBVN;
