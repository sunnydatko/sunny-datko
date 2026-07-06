import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import trustImg from "../assets/trust.jpg";
import themeImg from "../assets/theme.jpg";
import uiBg from "../assets/ui-bg.jpg";

const caseStudies = [
  {
    image: trustImg,
    imagePosition: "center top",
    overline: "Design System",
    title: "Modernizing Frontend Architecture",
    subtitle: "Replacing Bootstrap with a shared, theme-ready MUI system",
    tags: ["MUI", "Theming", "Component Architecture"],
    href: "/case-study/mui-design-system",
  },
  {
    image: themeImg,
    imagePosition: "center center",
    overline: "Theming",
    title: "One Component System, Many Experiences",
    subtitle: "A theme-aware component system for internal and customer-facing UI",
    tags: ["Design Systems", "White Labeling", "Dark Mode"],
    href: "/case-study/theming-platform",
  },
  {
    image: uiBg,
    imagePosition: "center center",
    overline: "Shared Components",
    title: "Building the Bridge Between Design and Engineering",
    subtitle: "Turning design decisions into scalable, reusable frontend architecture",
    tags: ["Component Architecture", "Storybook", "Collaboration"],
    href: "/case-study/component-system",
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
        {/* Heading */}
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

        {/* Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 4 } }}>
          {caseStudies.map((cs, i) => (
            <Box
              key={i}
              component="a"
              href={cs.href}
              className="reveal"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                textDecoration: "none",
                borderRadius: "20px",
                overflow: "hidden",
                background: "rgba(245,241,236,0.035)",
                border: "1px solid rgba(245,241,236,0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(245,241,236,0.05)",
                transition: "border-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                  borderColor: "rgba(167,138,178,0.35)",
                  boxShadow: "0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(167,138,178,0.2)",
                },
                "&:hover .cs-img": { transform: "scale(1.08)" },
                "&:hover .cs-arrow": { transform: "translateX(4px)" },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: { xs: "100%", md: "44%" },
                  flexShrink: 0,
                  height: { xs: 220, md: "auto" },
                  minHeight: { md: 220 },
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  className="cs-img"
                  src={cs.image}
                  alt={cs.title}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: cs.imagePosition,
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                />
                {/* Subtle gradient on right edge to blend into card body */}
                <Box
                  aria-hidden
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 80,
                    height: "100%",
                    background: "linear-gradient(to right, transparent, rgba(22,20,30,0.55))",
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 2.5, md: 3.5 },
                  gap: 0,
                }}
              >
                {/* Index + overline row */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                  <Typography
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: { xs: 28, md: 36 },
                      color: "rgba(167,138,178,0.2)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    0{i + 1}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "secondary.main",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cs.overline}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: { xs: "22px", sm: "26px", md: "30px" },
                    color: "grey.100",
                    lineHeight: 1.2,
                    mb: 1.5,
                  }}
                >
                  {cs.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: 14, md: 15 },
                    color: "grey.400",
                    lineHeight: 1.6,
                    mb: 2,
                    maxWidth: 480,
                  }}
                >
                  {cs.subtitle}
                </Typography>

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
                  <ArrowForwardIcon
                    className="cs-arrow"
                    sx={{ fontSize: 16, transition: "transform 0.3s" }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  </Box>
);

export default Work;
