import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "../../Components/Layout/AuthLayout";
import GotMail from "../../Components/Auth/GotMail";

const SignUp = () => {
  const [gotMail, setGotMail] = useState(false);
  return (
    <>
      {!gotMail && (
        <div className="auth-container !mb-[10rem]">
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              setGotMail(true);
            }}
          >
            <h3>Sign up</h3>
            <p className="mb-[7.4rem]">
              Hey there! Not yet a member fill the form below to register. Already a member?{" "}
              <Link href="/auth/sign-in">
                <a className="text-[#FCAC0D]">Sign In</a>
              </Link>
            </p>

            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group">
                <label>First Name</label>
                <input placeholder="Ex. Jonathan" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input placeholder="Ex. Fredwell" />
              </div>
              <div className="form-group col-span-2">
                <label>Email</label>
                <input placeholder="Enter email" />
              </div>
              <div className="form-group col-span-2">
                <label>Phone Number</label>
                <input placeholder="Ex. 1234567890" />
              </div>
              <button className="btn col-span-2 mt-[6.8rem]">Sign Up</button>
            </div>
          </form>
        </div>
      )}
      {gotMail && <GotMail link={"/auth/verify-otp"}></GotMail>}
    </>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
