import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";

const ActivateCard = ({ onActivate }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {" "}
      <PopupLayout action={onActivate} actionText={"Continue"}>
        <div className="popup-box">
          <h3>Activate Card</h3>
          <p className="max-w-[45rem]">
            NB - You will charged a fee of <span className="font-bold">#200</span> to activate your card. To pickup the physical copy will attract an extra charge of{" "}
            <span className="font-bold">#1,000</span>.
          </p>

          {/* Payment options */}
          <div className="grid grid-flow-col gap-x-[1.6rem] mb-[5rem]">
            <div className="rounded-[2rem] bg-white h-[12.1rem] px-[4.1rem] flex items-center default-shadow overflow-hidden grayscale">
              <img className="mr-[.9rem] translate-y-4" src="/3d-hand-card-2.svg" />
              <span className="f font-medium text-[2.4rem] text-[#747474] leading-[2.9rem] mr-[3rem]">Virtual card</span>
              <Radio checked={selectedValue === "virtual"} onChange={handleChange} value="virtual" name="radio-buttons" inputProps={{ "aria-label": "virtual" }} />
            </div>
            <div className="rounded-[2rem] bg-white h-[12.1rem] px-[4.1rem] flex items-center default-shadow">
              <img className="mr-[.9rem]" src="/3d-hand-card-2.svg" />
              <p className="flex flex-col items-center justify-center !mb-0 mr-[3rem]">
                <span className="f font-medium text-[1.8rem] text-[#747474] leading-[2.2rem]  max-w-[15.1rem]">Both physical & Virtual card</span>
                <span className="px-[1.2rem] py-[.5rem] bg-[#E2F6E9] mt-[.7rem] text-[#338D4F] text-[.8rem] font-[600] rounded-full">Activation fee - #1,200</span>
              </p>
              <Radio checked={selectedValue === "both"} onChange={handleChange} value="both" name="radio-buttons" inputProps={{ "aria-label": "both" }} />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default ActivateCard;
