import React from "react";

const LatestWinnerCard = () => {
  return (
    <div>
      <div className="relative mb-[3.2rem] default-shadow">
        {/* <div className="w-[90%] h-[100px] bg-gray-600 absolute -top-[1/2] py-[3.2rem] rounded-[2rem] mx-auto"></div> */}
        <div className="flex flex-wrap items-center bg-[#101010] py-[3.2rem] rounded-[2rem] pl-[3.4rem] relative default-shadow">
          <img className="h-[7.8rem] w-[7.8rem] object-cover rounded-full" src="/user-img.jpg" />
          <div className="ml-[2.7rem] mr-[15.7rem]">
            <span className=" text-[#FCAC0D] text-[13px] font-semibold">Latest Winners</span>
            <h3 className="text-[2.5rem] font-semibold leading-[3rem] text-white">Winner Okpere</h3>
          </div>
          <img src="/3d-trophy.svg" className="bottom-0  right-0 absolute"></img>
        </div>
      </div>
    </div>
  );
};

export default LatestWinnerCard;
