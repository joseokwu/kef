import React from "react";

import { useSelector } from "react-redux";
import { getPage } from "../store/pages";
import LandingPage from "../Components/Pages/LandingPage";
import LandPageLayout from "../Components/Layout/LandPageLayout";

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}

Home.Layout = LandPageLayout;
