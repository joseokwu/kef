import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";

const PaymentOptions = ({ onSelectPayOption }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <PopupLayout action={onSelectPayOption} actionText={"Continue"}>
        <div className="popup-box">
          <h3>Payment Option</h3>
          <p className="">Choose a payment option to complete purchase of raffle tickets</p>

          {/* Payment options */}
          <div className="grid grid-flow-col gap-x-[1.6rem] ">
            <div className="rounded-[2rem] bg-white px-[4.1rem] py-[4.7rem] flex items-center default-shadow">
              <img className="mr-[6rem]" src="/paystack.svg" />
              <Radio checked={selectedValue === "paystack"} onChange={handleChange} value="paystack" name="radio-buttons" inputProps={{ "aria-label": "paystack" }} />
            </div>
            <div className="rounded-[2rem]  bg-white px-[4.1rem] py-[4.7rem] flex items-center default-shadow">
              <img className="mr-[6rem]" src="/flutterwave.svg" />
              <Radio checked={selectedValue === "flutterwave"} onChange={handleChange} value="flutterwave" name="radio-buttons" inputProps={{ "aria-label": "flutterwave" }} />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default PaymentOptions;
