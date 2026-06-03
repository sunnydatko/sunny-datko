import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const GOLD = "#C9A961";

// delicate 8-point line-art sunburst
export const StarMark = ({ size = 24 }: { size?: number }) => (
  <Box
    component="svg"
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke={GOLD}
    strokeWidth={1.25}
    strokeLinecap="round"
    sx={{ width: size, height: size, flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="3.1" />
    <line x1="12" y1="1.5" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22.5" />
    <line x1="1.5" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22.5" y2="12" />
    <line x1="4.6" y1="4.6" x2="6.9" y2="6.9" />
    <line x1="17.1" y1="17.1" x2="19.4" y2="19.4" />
    <line x1="4.6" y1="19.4" x2="6.9" y2="17.1" />
    <line x1="17.1" y1="6.9" x2="19.4" y2="4.6" />
  </Box>
);

type BrandMarkProps = {
  starSize?: number;
  fontSize?: number;
};

const BrandMark = ({ starSize = 22, fontSize = 16 }: BrandMarkProps) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
    <StarMark size={starSize} />
    <Typography
      component="span"
      sx={{
        color: "grey.100",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      Sunny Datko
    </Typography>
  </Box>
);

export default BrandMark;
