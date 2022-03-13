import React from "react";
import Link from "next/link";
import AuthLayout from "../../Components/Layout/AuthLayout";
import OTP from "../../Components/Auth/OTP";

const VerifyOtp = () => {
  return <OTP></OTP>;
};

VerifyOtp.Layout = AuthLayout;
export default VerifyOtp;
