import { Box } from "@mui/material";

const SectionDivider = () => (
  <Box
    aria-hidden="true"
    sx={{
      display: "flex",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box
      sx={{
        flex: 1,
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(167,138,178,0.28))",
      }}
    />
    <Box
      component="span"
      sx={{
        mx: 2.5,
        color: "rgba(197,174,210,0.7)",
        fontSize: "13px",
        lineHeight: 1,
        filter: "drop-shadow(0 0 5px rgba(167,138,178,0.55))",
        userSelect: "none",
      }}
    >
      ✦
    </Box>
    <Box
      sx={{
        flex: 1,
        height: "1px",
        background:
          "linear-gradient(to left, transparent, rgba(167,138,178,0.28))",
      }}
    />
  </Box>
);

export default SectionDivider;
