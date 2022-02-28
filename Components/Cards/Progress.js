import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = () => {
  return (
    <div className="py-[4rem] px-[5.2rem] bg-[#FCAC0D] rounded-[2rem] w-max min-w-max flex-1 min-h-[30rem]  mb-[3.2rem]">
      <h2 className="text-[3.6rem] font-bold leading-[4.3rem] mb-[1.2rem]">Hi, Johnson Nkechi</h2>
      <p className="text-[#262525] font-medium leading-[2.6rem] text-[1.6rem] mb-[2.4rem] max-w-[39.5rem]">Hope your week is going well? take time out to check your progress</p>
      <div className="flex items-center">
        <div className="w-[87px] h-[87px]  mr-[2.4rem]">
          <CircularProgressbar
            value={77}
            text={77}
            styles={buildStyles({
              pathColor: "#FFE4AE",
              strokeLinecap: "butt",
              trailColor: "black",
              textColor: "Black",
              pathTransitionDuration: 0.5,
              textSize: "26px",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div>
          <span className="text-white font-medium text-[1rem] mb-[1rem] leading-[1.2rem]">Your Weekly Progress</span>
          <p className="font font-bold text-[1.8rem] leading-[2.1rem]">You are doing well! 😎</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
