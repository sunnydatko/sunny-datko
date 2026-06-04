import { useEffect } from "react";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import uiBg from "../../assets/ui-bg.png";

const sections = [
  {
    icon: <ReportProblemOutlinedIcon />,
    title: "The Problem",
    body: "Bootstrap gave us a common starting point, but not a common language. Teams created wrappers, added styling props, and built their own variations. By the time we evaluated the system, there were ~30 different button styles.",
  },
  {
    icon: <FlagOutlinedIcon />,
    title: "The Challenge",
    body: "Design needed consistency. Engineering needed flexibility. The existing approach provided neither.",
  },
  {
    icon: <GridViewOutlinedIcon />,
    title: "Creating a Shared Language",
    body: "We defined a small set of core patterns—Text, Contained, and Outlined—and supported permutations for icons, colors, sizes, and states. A clear, predictable system for both design and engineering.",
  },
  {
    icon: <PaletteOutlinedIcon />,
    title: "Moving Decisions Into the Theme",
    body: "We moved styling rules from individual components into the theme, turning design tokens into reusable, consistent building blocks that work across products.",
  },
  {
    icon: <ImportContactsOutlinedIcon />,
    title: "Adoption Matters",
    body: "We built Storybook, documented usage, introduced light and dark mode, and partnered with engineers to migrate and adopt the new system.",
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "The Outcome",
    body: "A shared component foundation that connects design decisions directly to implementation—consistent, flexible, and built to scale.",
  },
];

const outcomes = [
  { stat: "30+", label: "Button variations reduced to a standardized set" },
  { stat: "Consistent", label: "UI across the platform and products" },
  { stat: "Faster", label: "Development with less duplication and fewer regressions" },
  { stat: "Scalable", label: "System that grows with the product and the team" },
];

const tags = [
  "Design Systems",
  "Component Architecture",
  "MUI",
  "Storybook",
  "Theming",
  "Collaboration",
];

const stats = [
  { icon: <AccessTimeOutlinedIcon />, label: "Duration", value: "Jan 2023 – Aug 2025" },
  { icon: <PersonOutlinedIcon />, label: "My Role", value: "Staff Frontend Engineer" },
  { icon: <GroupsOutlinedIcon />, label: "Team", value: "Design, Product, Engineering" },
];

const ComponentSystemCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* Hero image */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 300, md: 400 },
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#1a1826",
        }}
      >
        <Box
          component="img"
          src={uiBg}
          alt="Component system UI"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(20,18,17,0.3) 0%, rgba(20,18,17,0.0) 40%, rgba(20,18,17,0.6) 100%)",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          py: { xs: 5, md: 8 },
          px: { xs: 2.5, sm: 4, md: 6 },
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Back link */}
        <Box
          component="a"
          href="/#work"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: "grey.300",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            mb: 4,
            transition: "color 0.3s",
            textDecoration: "none",
            "&:hover": { color: "grey.100" },
            "& svg": { fontSize: 16 },
          }}
        >
          <ArrowBackIcon /> Back to Work
        </Box>

        {/* Title block */}
        <Box sx={{ mb: 4 }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "secondary.main",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12, md: 13 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Case Study
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "28px", sm: "38px", md: "52px" },
              color: "grey.100",
              mb: 2,
              lineHeight: 1.15,
            }}
          >
            Building the Bridge Between Design and Engineering
          </Typography>

          <Typography
            sx={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: { xs: "16px", sm: "18px", md: "22px" },
              color: "primary.light",
              mb: 3,
              lineHeight: 1.45,
            }}
          >
            Creating a shared component system that transformed design
            decisions into scalable frontend architecture.
          </Typography>

          <Typography
            sx={{
              color: "grey.200",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
            }}
          >
            Bootstrap components were hard to customize and led to
            inconsistency, duplication, and confusion. We built a shared
            component system that connected design intent with
            implementation—making it easier for teams to build the right UI,
            the right way.
          </Typography>
        </Box>

        {/* Stats bar */}
        <Box
          className="glass"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            mb: 6,
            p: { xs: 2, md: 3 },
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

        <Divider sx={{ mb: { xs: 5, md: 6 }, borderColor: "divider" }} />

        {/* Content sections */}
        <Box sx={{ mb: 7 }}>
          {sections.map((section, i) => (
            <Box key={section.title}>
              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  gap: { sm: 4, md: 5 },
                  alignItems: "flex-start",
                  py: { xs: 3.5, md: 4 },
                }}
              >
                {/* Icon + title */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: { sm: 220, md: 260 },
                    flexShrink: 0,
                    mb: { xs: 1.5, sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      borderRadius: "50%",
                      backgroundColor: "rgba(167,138,178,0.1)",
                      border: "1px solid rgba(167,138,178,0.22)",
                      color: "primary.light",
                      flexShrink: 0,
                      "& svg": { fontSize: { xs: 18, md: 22 } },
                    }}
                  >
                    {section.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: 15, md: 17 },
                      color: "grey.100",
                      lineHeight: 1.25,
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>

                {/* Body */}
                <Typography
                  sx={{
                    color: "grey.300",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: { xs: 15, md: 16 },
                    lineHeight: 1.75,
                    flex: 1,
                  }}
                >
                  {section.body}
                </Typography>
              </Box>
              {i < sections.length - 1 && (
                <Divider sx={{ borderColor: "rgba(245,241,236,0.07)" }} />
              )}
            </Box>
          ))}
        </Box>

        {/* Outcome metrics */}
        <Box sx={{ mb: 7 }}>
          <Grid container spacing={2}>
            {outcomes.map((o) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={o.stat}>
                <Box
                  className="glass"
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: { xs: "28px", md: "34px" },
                      color: "primary.light",
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {o.stat}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: { xs: 12, md: 13 },
                      color: "grey.400",
                      lineHeight: 1.5,
                    }}
                  >
                    {o.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Impact */}
        <Box sx={{ mb: 7, pt: 6 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, md: 2 },
              mb: { xs: 3, md: 4 },
            }}
          >
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
              <StarOutlineIcon />
            </Box>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "22px", sm: "26px", md: "32px" }, color: "grey.100", m: 0 }}
            >
              Impact
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "grey.200",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.75,
              mb: 3,
            }}
          >
            By building the bridge between design and engineering, we created a
            system that teams trust, designers rely on, and the product can
            evolve with confidence.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" size="small" />
            ))}
          </Box>
        </Box>

        <Divider sx={{ mb: 5, borderColor: "divider" }} />

        {/* Back link bottom */}
        <Box
          component="a"
          href="/#work"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: "primary.light",
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            textDecoration: "none",
            transition: "gap 0.3s, color 0.3s",
            "&:hover": {
              color: "grey.100",
              gap: 1.5,
            },
            "& svg": { fontSize: 18 },
          }}
        >
          <ArrowBackIcon /> Back to Work
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentSystemCaseStudy;
