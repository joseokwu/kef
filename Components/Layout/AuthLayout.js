import React from "react";
import AuthHeader from "../AuthHeader";
const AuthLayout = ({ children }) => {
  return (
    <div className=" w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto">
      <AuthHeader />
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
