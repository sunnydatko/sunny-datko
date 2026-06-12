import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackLink = ({ variant = "top" }: { variant?: "top" | "bottom" }) => {
  const isTop = variant === "top";
  return (
    <Box
      component="a"
      href="/#work"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        color: isTop ? "grey.300" : "primary.light",
        fontFamily: "'Inter', sans-serif",
        fontSize: isTop ? 14 : 15,
        fontWeight: 500,
        textDecoration: "none",
        transition: isTop ? "color 0.3s" : "gap 0.3s, color 0.3s",
        ...(isTop && {
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          mb: 4,
        }),
        "& svg": { fontSize: isTop ? 16 : 18 },
        "&:hover": {
          color: "grey.100",
          ...(!isTop && { gap: 1.5 }),
        },
      }}
    >
      <ArrowBackIcon /> Back to Work
    </Box>
  );
};

export default BackLink;
