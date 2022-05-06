import React from "react";
import AuthHeader from "../AuthHeader";
import Head from "next/head";

const AuthLayout = ({ children }) => {
  return (
    <div className=" w-full h-screen bg-flare bg-slate-900 bg-no-repeat bg-cover overflow-y-auto">
      <Head>
        <title>Kennis Music Fiesta | Authentication</title>
        <meta name="description" content="Kennis Music Fiesta" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <AuthHeader />
      <main className="mt-[16rem]">{children}</main>
    </div>
  );
};

export default AuthLayout;
