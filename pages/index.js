import React from "react";

import { useSelector } from "react-redux";
import { getPage } from "../store/pages";
import LandingPage from "../Components/Pages/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
