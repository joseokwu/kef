import React from "react";

import "../styles/globals.css";
import "../styles/style.css";
import "../styles/components.scss";
import "../styles/typography.scss";

import { StyledEngineProvider } from "@mui/material/styles";
import AppProvider from "../store";
import Utils from "../Components/Utils";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <AppProvider>
        <Utils>
          {Component.Layout ? (
            <Component.Layout>
              <Component {...pageProps} />
            </Component.Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </Utils>
      </AppProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
