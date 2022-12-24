import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import Router from "./components/Router";
import Loader from "./components/Loader";
import theme from "./theme";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
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
      <SnackbarProvider maxSnack={3}>
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
