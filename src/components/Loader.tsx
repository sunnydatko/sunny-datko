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
      "@keyframes loaderFadeIn": {
        from: { opacity: 0, transform: "scale(0.82)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
      "@keyframes loaderPulse": {
        "0%, 100%": { opacity: 0.25, transform: "scale(0.88)" },
        "50%": { opacity: 1, transform: "scale(1.14)" },
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
          animation: "loaderPulse 2.4s ease-in-out infinite",
        },
        "& svg": {
          animation: "loaderFadeIn 0.9s ease-out forwards",
          opacity: 0,
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&::before, & svg": { animation: "none", opacity: 1 },
        },
      }}
    >
      <StarMark size={46} />
    </Box>
  </Box>
);

export default Loader;
