import React from "react";

const Popup = ({ children }) => {
  return (
    <div className="bg-white rounded-[2rem]">
      {/* Body */}
      <div className="border-b py-[6.5rem] px-[7.4rem]">{children}</div>

      {/* Footer */}
      <div className="py-[6.1rem] px-[7.4rem] flex items-center">
        <button className="btn btn--outlined ml-[auto] !px-[5.5rem] !py-[2rem] !text-[#4C4D50] !border-[#4C4D50]">Cancle</button>
        <button className="btn ml-[2.4rem] !px-[5.5rem] !py-[2rem]">Continue</button>
      </div>
    </div>
  );
};

export default Popup;
