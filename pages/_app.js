import "../styles/globals.css";
import "../styles/style.css";
import "../styles/components.scss";
import "../styles/typography.scss";

import { StyledEngineProvider } from "@mui/material/styles";
import AppProvider from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
