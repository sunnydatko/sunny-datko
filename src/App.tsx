import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import Router from "./components/Router";
import Loader from "./components/Loader";
import KonamiEgg from "./components/KonamiEgg";
import getTheme from "./helpers/theme";
import CustomSnackbar from "./components/CustomSnackbar";

const theme = getTheme("dark");

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          Components={{ success: CustomSnackbar, error: CustomSnackbar }}
        >
        <Router />
        <KonamiEgg />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
