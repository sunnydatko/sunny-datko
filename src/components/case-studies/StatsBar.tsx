import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatsBar = ({ stats }: { stats: Stat[] }) => (
  <Box
    className="glass"
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      mb: 6,
      p: { xs: 2, md: 3 },
      gap: 0,
    }}
  >
    {stats.map((stat, i) => (
      <Box
        key={stat.label}
        sx={{
          flex: { sm: "1 1 0" },
          display: "flex",
          alignItems: "flex-start",
          gap: 1.5,
          px: { xs: 1, sm: 2, md: 2.5 },
          py: { xs: 1.5, sm: 1 },
          borderLeft: { sm: i > 0 ? "1px solid" : "none" },
          borderTop: { xs: i > 0 ? "1px solid" : "none", sm: "none" },
          borderColor: "divider",
        }}
      >
        <Box sx={{ color: "secondary.main", pt: "2px", "& svg": { fontSize: 20 } }}>
          {stat.icon}
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "grey.400",
              mb: 0.25,
            }}
          >
            {stat.label}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 14, md: 15 },
              fontWeight: 500,
              color: "grey.100",
            }}
          >
            {stat.value}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
);

export default StatsBar;
