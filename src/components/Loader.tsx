import Box from "@mui/material/Box";

import { StarMark } from "./BrandMark";

const Loader = () => (
  <Box
    sx={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#141211",
      "@keyframes loaderSpin": { to: { transform: "rotate(360deg)" } },
      "@keyframes loaderPulse": {
        "0%, 100%": { opacity: 0.35, transform: "scale(0.9)" },
        "50%": { opacity: 1, transform: "scale(1.12)" },
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,138,178,0.28), rgba(167,138,178,0) 70%)",
          animation: "loaderPulse 1.8s ease-in-out infinite",
        },
        "& svg": { animation: "loaderSpin 6s linear infinite" },
        "@media (prefers-reduced-motion: reduce)": {
          "&::before, & svg": { animation: "none" },
        },
      }}
    >
      <StarMark size={46} />
    </Box>
  </Box>
);

export default Loader;
