import React from "react";

const Success = ({ status }) => {
  return (
    <div className="grid place-items-center text-center">
      {status == "success" && <img src="/success.svg" className="mb-[7rem]"></img>}
      {status == "failed" && <img src="/failed.svg" className="mb-[7rem]"></img>}
      <h3 className="text-[3.2rem] text-white leading-[3.9rem] font-bold mb-[1.4rem]">Ticket Verified</h3>
      {status == "success" && (
        <p className="mb-[5.8rem] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[42.7rem]">Your ticket numbers has been successfully verified and you will receive an sms shortly.</p>
      )}
      {status == "failed" && (
        <p className="mb-[5.8rem] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[42.7rem]">
          {" "}
          Your ticket numbers has been used. Please check the number and try again or contact merchant.
        </p>
      )}
      <a className="text-[1.7rem] font-bold text-[#FCAC0D] underline">Go to verify ticket</a>
    </div>
  );
};

export default Success;
