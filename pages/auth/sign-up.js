import React from "react";

const signUp = () => {
  return (
    <div className=" w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto">
      <header className="flex items-center px-[12.5rem] py-[5.6rem]">
        <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
        <button className="btn ml-auto">Buy Event Ticket</button>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Verify Ticket</button>
      </header>
      <main>
        <div className="auth-container !mb-[10rem]">
          <form className="auth-form">
            <h3>Sign up</h3>
            <p className="mb-[7.4rem]">
              Hey there! Not yet a member fill the form below to register. Already a member? <span className="text-[#FCAC0D]">Sign In</span>
            </p>

            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group">
                <label>First Name</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group col-span-2">
                <label>Email</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group col-span-2">
                <label>Phone Number</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <button className="btn col-span-2 mt-[6.8rem]">Sign Up</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default signUp;
