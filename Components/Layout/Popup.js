import React from "react";

const Popup = ({ children, actionText, action, footer = true }) => {
  return (
    <div className="bg-white rounded-[2rem]">
      {/* Body */}
      <div className="border-b py-[6.5rem] pb-[3.3rem] px-[7.4rem]">{children}</div>

      {/* Footer */}
      {footer && (
        <div className="py-[6.1rem] px-[7.4rem] flex items-center justify-end">
          <button className="btn btn--outlined ml-[auto] !px-[3.8rem] !py-[2rem] !text-[#4C4D50] !border-[#4C4D50]">Cancle</button>
          <button
            onClick={() => {
              action();
            }}
            className="btn ml-[2.4rem] !px-[3.8rem] !py-[2rem]"
          >
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Popup;
