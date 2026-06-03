import { createTheme, type PaletteMode } from "@mui/material/styles";

// warm charcoal scale
const grey = {
  100: "#F5F1EC",
  200: "#DDD6CF",
  300: "#B9B0A7",
  400: "#8C847D",
  500: "#6A635D",
  600: "#4A4541",
  700: "#312D2B",
  800: "#211E1D",
  900: "#151313",
};

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      // plum / aubergine
      primary: {
        light: "#A78AB2",
        main: mode === "dark" ? "#A78AB2" : "#7A5C87",
        dark: "#533B5E",
      },
      // sage / olive
      secondary: {
        light: "#98A287",
        main: mode === "dark" ? "#98A287" : "#6E7563",
        dark: "#4C5245",
      },
      grey,
      background:
        mode === "dark"
          ? { default: "#141211", paper: "#1C1A18" }
          : { default: "#FFFFFF", paper: grey[100] },
      text:
        mode === "dark"
          ? { primary: grey[100], secondary: grey[300] }
          : { primary: grey[900], secondary: grey[500] },
      divider:
        mode === "dark" ? "rgba(245,241,236,0.12)" : "rgba(21,19,19,0.12)",
    },

    typography: {
      h1: {
        fontSize: "90px",
        fontFamily: "'DM Serif Display', serif",
        fontWeight: 900,
        lineHeight: "103%",
      },
      h2: {
        fontFamily: "'DM Serif Display', serif",
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(34px, 5vw, 56px)",
        lineHeight: 1.1,
        textAlign: "center",
      },
      h4: {
        fontFamily: "'DM Serif Display', serif",
        fontSize: "36px",
      },
      body1: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "20px",
        lineHeight: "33px",
      },
      body2: {
        fontFamily: "'Inter', sans-serif",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === "dark" ? "#141211" : "#FFFFFF",
          },
          "::selection": {
            backgroundColor: "rgba(167,138,178,0.35)",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            color: mode === "dark" ? "#A78AB2" : "#7A5C87",
            transition: "color 0.3s",
            "&:hover": { color: mode === "dark" ? "#C3ADCC" : "#A78AB2" },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          text: {
            fontFamily: "'Inter', sans-serif",
          },
          outlined: ({ theme }) => ({
            boxShadow: "0 8px 30px rgba(167,138,178,0.35)",
            fontFamily: "'Inter', sans-serif",
            textTransform: "none",
            borderRadius: 10,
            borderColor: mode === "dark" ? "rgba(167,138,178,0.5)" : undefined,
            color: mode === "dark" ? grey[100] : "#FFF",
            fontWeight: 500,
            transition: "0.3s",
            "&:hover": {
              borderColor: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.light,
              boxShadow: "0 10px 36px rgba(167,138,178,0.5)",
            },
          }),
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            color: mode === "dark" ? grey[100] : grey[700],
            fontSize: "40px",
            transition: "color 0.3s",
            "&:hover": {
              color: "#A78AB2",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          outlined: {
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.04em",
            borderColor:
              mode === "dark"
                ? "rgba(152,162,135,0.45)"
                : "rgba(110,117,99,0.45)",
            color: mode === "dark" ? "#B7C0A6" : "#5A6150",
            backgroundColor:
              mode === "dark" ? "rgba(152,162,135,0.06)" : "transparent",
          },
          filled: {
            color: "#ffffff",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "filled",
        },
      },
      MuiTypography: {
        variants: [
          {
            props: { variant: "h1" },
            style: ({ theme }) => ({
              color: theme.palette.grey[100],
            }),
          },
          {
            props: { variant: "h3" },
            style: ({ theme }) => ({
              color: theme.palette.grey[100],
            }),
          },
          {
            props: { variant: "h4" },
            style: ({ theme }) => ({
              color: theme.palette.grey[100],
            }),
          },
        ],
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "dark" ? "rgba(245,241,236,0.04)" : undefined,
            borderRadius: 10,
            border: "1px solid",
            borderColor:
              mode === "dark" ? "rgba(245,241,236,0.10)" : "transparent",
            transition: "border-color 0.3s, background-color 0.3s",
            "&:hover": {
              backgroundColor:
                mode === "dark" ? "rgba(245,241,236,0.06)" : undefined,
            },
            "&.Mui-focused": {
              backgroundColor:
                mode === "dark" ? "rgba(245,241,236,0.06)" : undefined,
              borderColor: "#A78AB2",
              boxShadow: "0 0 0 3px rgba(167,138,178,0.18)",
            },
            "&::before, &::after": { display: "none" },
          },
        },
      },
    },
  });

export default getTheme;
