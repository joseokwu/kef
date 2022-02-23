import React from "react";

const Stats = ({ color, title, text, img }) => {
  return (
    <div className={`px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-[${color}] relative mr-[2.5rem] last:mr-0 mb-[3.2rem] min-w-[345px]`}>
      <h3 className="h3 mb-[.4rem] mr-[11.0rem]">{title}</h3>
      <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold">{text}</p>
      <img className="absolute right-[2.6rem] bottom-0 w-[93px]" src={img}></img>
    </div>
  );
};

export default Stats;
