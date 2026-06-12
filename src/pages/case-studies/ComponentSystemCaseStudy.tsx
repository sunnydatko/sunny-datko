import { useEffect } from "react";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import ReadingProgressBar from "../../components/ReadingProgressBar";
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
import uiBg from "../../assets/ui-bg.jpg";
import SectionHeader from "../../components/case-studies/SectionHeader";
import CaseStudyHero from "../../components/case-studies/CaseStudyHero";
import StatsBar from "../../components/case-studies/StatsBar";
import BackLink from "../../components/case-studies/BackLink";

const sections = [
  {
    icon: <ReportProblemOutlinedIcon />,
    title: "The Problem",
    body: "Bootstrap gave us a common starting point, but not a common language. Teams wrapped Bootstrap components in styled-components, introduced styling props like $isBold, and created page-specific variations. By the time we evaluated the system, there were roughly 30 different button implementations across the application.",
  },
  {
    icon: <FlagOutlinedIcon />,
    title: "The Challenge",
    body: "Design needed consistency. Engineering needed flexibility. The existing approach provided neither.",
  },
  {
    icon: <GridViewOutlinedIcon />,
    title: "Creating a Shared Language",
    body: "We established a small set of core component patterns and moved visual customization into the theme layer. The same buttons, forms, tabs, and inputs could support internal experiences, light and dark mode, and customer-specific branding requirements without requiring separate component implementations.",
  },
  {
    icon: <PaletteOutlinedIcon />,
    title: "Moving Decisions Into the Theme",
    body: "We moved styling decisions from individual components into the theme layer, allowing the same components to support internal applications, customer-branded Trust Centers, and light/dark mode experiences without requiring separate implementations.",
  },
  {
    icon: <ImportContactsOutlinedIcon />,
    title: "Adoption Matters",
    body: "We built Storybook with light and dark mode previews, documented component usage, and partnered with engineers to migrate existing experiences onto the shared system.",
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "The Outcome",
    body: "A shared component foundation that powers internal tools, customer-branded experiences, and light/dark mode from a single source of truth.",
  },
];

const outcomes = [
  {
    stat: "30+",
    label: "Button variations consolidated into a standardized system",
  },
  {
    stat: "Shared",
    label: "Component APIs used across products and experiences",
  },
  {
    stat: "Theme-Aware",
    label: "Light mode, dark mode, and customer branding built in",
  },
  {
    stat: "Scalable",
    label: "One foundation powering internal and customer-facing experiences",
  },
];

const stats = [
  { icon: <AccessTimeOutlinedIcon />, label: "Duration", value: "Jan 2023 – Aug 2025" },
  { icon: <PersonOutlinedIcon />, label: "My Role", value: "Staff Frontend Engineer" },
  { icon: <GroupsOutlinedIcon />, label: "Team", value: "Design, Product, Engineering" },
];

const tags = [
  "Design Systems",
  "Component Architecture",
  "MUI",
  "Storybook",
  "Theming",
  "Collaboration",
];

const ComponentSystemCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
      <ReadingProgressBar />
      <CaseStudyHero src={uiBg} alt="Component system UI" backgroundColor="#1a1826" />

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
        <BackLink />

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
            Bootstrap components were difficult to customize, leading to inconsistent implementations, duplicated patterns, and growing maintenance costs. We built a shared component system that connected design intent with implementation while supporting light mode, dark mode, and customer-specific branding from a single foundation.
          </Typography>
        </Box>

        <StatsBar stats={stats} />

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
          <SectionHeader icon={<StarOutlineIcon />} title="Impact" />
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

        <BackLink variant="bottom" />
      </Box>
    </Box>
  );
};

export default ComponentSystemCaseStudy;
