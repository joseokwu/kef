import "../styles/globals.css";
import "../styles/style.css";
import "../styles/components.scss";
import "../styles/typography.scss";
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
