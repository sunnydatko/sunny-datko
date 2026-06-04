import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import trustImg from "../assets/trust.png";
import themeImg from "../assets/theme.png";


const caseStudies = [
  {
    image: trustImg,
    imagePosition: "center top",
    imageTint: "linear-gradient(180deg, rgba(20,18,17,0) 50%, rgba(20,18,17,0.55) 100%)",
    overline: "Design System",
    title: "Modernizing Frontend Architecture",
    subtitle: "From Bootstrap to a Unified Design System with MUI",
    tags: ["MUI", "Theming", "Component Architecture"],
    href: "/case-study/mui-design-system",
  },
  {
    image: themeImg,
    imagePosition: "center center",
    imageTint: "linear-gradient(180deg, rgba(20,18,17,0) 50%, rgba(20,18,17,0.55) 100%)",
    overline: "Theming",
    title: "Building a Theme-Driven Platform",
    subtitle: "Enabling white labeling and dark mode at scale with design tokens",
    tags: ["Design Tokens", "White Labeling", "Dark Mode"],
    href: "/case-study/theming-platform",
  },
];

const Work = () => (
  <Box
    component="section"
    className="el-title"
    id="work"
    sx={{ position: "relative" }}
  >
    <div className="wrap">
      <Container sx={{ maxWidth: "1080px !important" }}>
        <Box sx={{ textAlign: "center", mb: 7 }} className="reveal">
          <Typography
            component="span"
            sx={{
              color: "secondary.main",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </Typography>
          <Typography variant="h3" sx={{ mt: 2 }}>
            Work
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {caseStudies.map((cs, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i} className="reveal">
              <Box
                component="a"
                href={cs.href}
                sx={{
                  display: "block",
                  height: "100%",
                  textDecoration: "none",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "rgba(245, 241, 236, 0.035)",
                  border: "1px solid rgba(245, 241, 236, 0.08)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(245,241,236,0.05)",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    borderColor: "rgba(167,138,178,0.35)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(167,138,178,0.2)",
                  },
                  "&:hover .cs-arrow": { transform: "translateX(4px)" },
                }}
              >
                {/* Image */}
                <Box sx={{ height: 220, overflow: "hidden", position: "relative" }}>
                  <Box
                    component="img"
                    src={cs.image}
                    alt={cs.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: cs.imagePosition,
                      display: "block",
                    }}
                  />
                  <Box aria-hidden sx={{ position: "absolute", inset: 0, background: cs.imageTint }} />
                </Box>

                {/* Content */}
                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      color: "secondary.main",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    {cs.overline}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: { xs: "20px", md: "22px" },
                      color: "grey.100",
                      lineHeight: 1.25,
                      mb: 1,
                    }}
                  >
                    {cs.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "grey.400",
                      lineHeight: 1.55,
                      mb: 2.5,
                    }}
                  >
                    {cs.subtitle}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                    {cs.tags.map((tag) => (
                      <Chip key={tag} label={tag} variant="outlined" size="small" />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      color: "primary.light",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Read case study
                    <ArrowForwardIcon className="cs-arrow" sx={{ fontSize: 16, transition: "transform 0.3s" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  </Box>
);

export default Work;
