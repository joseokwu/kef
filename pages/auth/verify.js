import React, { useState } from "react";
import Status from "../../Components/Auth/Status.js";

const Verify = () => {
  const [status, setStatus] = useState("");
  return (
    <div className="w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto">
      <header className="flex items-center px-[12.5rem] py-[5.6rem]">
        <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
        <button className="btn ml-auto">Buy Event Ticket</button>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Sign Up</button>
      </header>
      <main>
        <div className="auth-container !mb-[10rem]">
          {!status && (
            <form className="auth-form">
              <h3>Verify Ticket</h3>
              <p className="mb-[7.4rem] max-w-[45rem]">Enter reference number on the receipt print out to verify purchase</p>

              <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
                <div className="form-group col-span-2">
                  <label>Reference number</label>
                  <input placeholder="Ex. 1234567890" />
                </div>
                <div className="form-group col-span-2">
                  <label>Phone number</label>
                  <input placeholder="Ex. 1234567890" />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setStatus("success");
                  }}
                  className="btn col-span-2 mt-[6.8rem]"
                >
                  Verify Ticket
                </button>
              </div>
            </form>
          )}
          {status && <Status status={status}></Status>}
        </div>
      </main>
    </div>
  );
};

export default Verify;
