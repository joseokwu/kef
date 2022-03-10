import React from "react";

const profile = () => {
  const formEls = [
    { label: "Username", span: "View your username for your account" },
    { label: "Full Name", span: "This a name your account will be identified by" },
    { label: "Email Address", span: "Email that is linked to the account" },
    { label: "Phone Number", span: "Enter the phone number that is valid" },
  ];

  return (
    <section className="mb-[9.6rem]">
      {/* Profile Picture */}
      <section className="flex items-center">
        <div className="flex flex-col mr-[8.9rem]">
          <label>Profile Picture</label>
          <span>Choose a display picture for your account</span>
        </div>
        <div className="relative">
          <input className="hidden " id="upload" type="file"></input>
          <label htmlFor="upload" className="absolute bottom-1 right-0 !grid h-[2.9rem] w-[2.9rem] place-items-center bg-[#FFF6E4] rounded-full cursor-pointer !mb-[0]">
            <img src="/edit-pen.svg"></img>
          </label>
          <img src="/profile-pic.jpg" className="w-[14.5rem] h-[14.5rem]" alt="userImage"></img>
        </div>
      </section>
      {/* Input Form */}
      <div className="mt-[4.8rem] ">
        {formEls.map((el, i) => {
          return (
            <div key={i} className="flex justify-between items-center mb-[3.2rem]">
              <p className="flex flex-col">
                <label>{el.label}</label>
                <span>{el.span}</span>
              </p>
              <input
                className=" max-w-[36.4rem] w-full placeholder:text-[#D5D6D8] px-[3.2rem] text-[1.6rem] font-medium py-[1.7rem] rounded-[1rem] outline outline-[#C4C4C4] outline-1"
                placeholder="Your Name"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default profile;
