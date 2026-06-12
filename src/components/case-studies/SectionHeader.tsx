import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, md: 2 }, mb: { xs: 3, md: 4 } }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: 40, md: 48 },
        height: { xs: 40, md: 48 },
        borderRadius: "50%",
        backgroundColor: "rgba(167,138,178,0.12)",
        border: "1px solid rgba(167,138,178,0.25)",
        color: "primary.light",
        flexShrink: 0,
        "& svg": { fontSize: { xs: 18, md: 22 } },
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h4"
      sx={{ fontSize: { xs: "22px", sm: "26px", md: "32px" }, color: "grey.100", m: 0 }}
    >
      {title}
    </Typography>
  </Box>
);

export default SectionHeader;
