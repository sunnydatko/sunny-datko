import { createTheme } from "@mui/material/styles";

const color1 = "#00a3d9";
const color1a = "#48d1ff";
// const color1b = "#e7f4ff";
const color2 = "#1b1b1b";
// const color3 = "#565667";
// const color3a = "#ccc";
// const color4 = "#f8f8f8";
const color5 = "#e9651d";

const theme = createTheme({
  palette: {
    primary: {
      main: color1,
      light: color1a,
    },
    secondary: {
      main: color5,
    },
    grey: {
      100: "rgb(248, 248, 248)",
      900: color2,
    },
  },

  typography: {
    h1: {
      fontSize: "90px",
      fontFamily: "'Baloo 2', sans-serif",
      fontWeight: 900,
      lineHeight: "103%",
    },
    h2: {
      fontFamily: "'Baloo 2', sans-serif",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Baloo 2', sans-serif",
      textAlign: "center",
    },
    h4: {
      fontFamily: "'Baloo 2', sans-serif",
      fontSize: "36px",
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "20px",
      lineHeight: "33px",
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          fontFamily: "'Montserrat', sans-serif",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontSize: "40px",
          "&:hover": {
            color: "#48d1ff",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
