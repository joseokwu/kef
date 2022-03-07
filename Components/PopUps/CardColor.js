import { color } from "@mui/system";
import React, { useState } from "react";
import PopupLayout from "../Layout/Popup";

const CardColor = ({ onSelectColor }) => {
  const [active, setActive] = useState("#FA5932");
  const [colors, setColors] = useState(["red", "#0150F1", "yellow", "#5F4BB6"]);
  return (
    <div>
      {" "}
      <PopupLayout action={onSelectColor} actionText={"Continue"}>
        <div className="popup-box">
          <h3>Customize Card Color</h3>
          <p className="max-w-[45rem] mobile:!mb-[2rem]">Customize you card color by choosing any color from our pallete to suite your taste.</p>

          {/* Colors */}
          <div className="grid grid-flow-col mb-[8rem] items-center gap-[3rem] mobile:gap-[5.8rem] overflow-x-scroll h-[10rem] mobile:h-[19rem] scroll_hide">
            {/* <span className="w-[12.9rem] h-[12.9rem] rounded-full bg-[#0150F1] text-[#0150F1]  hover:outline-offset-4 hover:outline transition-all outline-current"></span> */}
            {colors.map((color, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setActive(color);
                  }}
                  className={`mobile:w-[12.9rem] w-[8.2rem] cursor-pointer h-[8.2rem] mobile:h-[12.9rem] rounded-full bg-[${color}] text-[${color}] hover:outline-offset-4 hover:outline transition-all outline-current ${
                    active == color ? "ring-offset-8 outline-offset-[4px] outline cursor-pointer hover:outline-offset-4 transition-all" : ""
                  } `}
                ></div>
              );
            })}
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default CardColor;
