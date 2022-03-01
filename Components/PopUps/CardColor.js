import { color } from "@mui/system";
import React, { useState } from "react";
import PopupLayout from "../Layout/Popup";

const CardColor = ({ onSelectColor }) => {
  const [active, setActive] = useState("#FA5932");
  const colors = ["#0150F1", "#5F4BB6", "#FA5932", "#5F4BB6"];
  return (
    <div>
      {" "}
      <PopupLayout action={onSelectColor} actionText={"Continue"}>
        <div className="popup-box">
          <h3>Customize Card Color</h3>
          <p className="max-w-[45rem]">Customize you card color by choosing any color from our pallete to suite your taste.</p>

          {/* Colors */}
          <div className="flex items-center gap-[5.8rem]">
            {/* <span className="w-[12.9rem] h-[12.9rem] rounded-full bg-[#0150F1] text-[#0150F1]  hover:outline-offset-4 hover:outline transition-all outline-current"></span> */}
            {colors.map((color, i) => {
              return (
                <span
                  key={i}
                  onClick={() => {
                    setActive(color);
                  }}
                  className={`w-[12.9rem] cursor-pointer h-[12.9rem] rounded-full bg-[${color}] text-[${color}] hover:outline-offset-4 hover:outline transition-all outline-current ${
                    active == color ? "ring-offset-8 outline-offset-8 outline cursor-pointer hover:outline-offset-4 transition-all" : ""
                  } `}
                ></span>
              );
            })}
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default CardColor;
