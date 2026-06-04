import { useEffect } from "react";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import trustImg from "../assets/trust.png";

const approachSteps = [
  {
    icon: <TerminalOutlinedIcon />,
    title: "Start Small, Prove Value",
    body: "Rebuilt the broken sidebar with MUI, then introduced foundational components like typography, menus, and forms.",
  },
  {
    icon: <ExtensionOutlinedIcon />,
    title: "Build the System",
    body: "Created a shared component library with design tokens, Storybook docs, and theme-aware components.",
  },
  {
    icon: <ColorLensOutlinedIcon />,
    title: "Shift the Architecture",
    body: "Product differences became theme differences. One component adapts to the closest theme automatically.",
  },
  {
    icon: <PublicOutlinedIcon />,
    title: "Scale Across Products",
    body: "Rolled out light & dark mode in Trust Center, then extended the same token system to the application.",
  },
];

const metrics = [
  { icon: <DeleteOutlineIcon />, stat: "280+", label: "React-Bootstrap imports removed" },
  { icon: <LayersOutlinedIcon />, stat: "3", label: "Frameworks retired (Bootstrap, Atlantis, Custom SCSS)" },
  { icon: <WbSunnyOutlinedIcon />, stat: "2", label: "Themes supported (Light & Dark Mode)" },
  { icon: <GridViewOutlinedIcon />, stat: "1", label: "Unified design system shared across products" },
  { icon: <BoltOutlinedIcon />, stat: "Faster", label: "Feature delivery with less duplication and fewer regressions" },
];

const tags = [
  "Design Systems",
  "Theming",
  "Component Architecture",
  "MUI",
  "Storybook",
  "Frontend Leadership",
];

const SectionHeader = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
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

const MuiCaseStudy = () => {
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
        }}
      >
        <Box
          component="img"
          src={trustImg}
          alt="Trust Center design system screenshots"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
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

      <Box
        sx={{
          maxWidth: 800,
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

        {/* Overline */}
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

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", sm: "42px", md: "52px" },
            color: "grey.100",
            mb: 2,
          }}
        >
          Modernizing Frontend Architecture
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: { xs: "18px", md: "22px" },
            color: "#C9A961",
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          From Bootstrap to a Unified Design System with MUI
        </Typography>

        {/* Intro */}
        <Typography
          sx={{
            color: "grey.200",
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          I led the migration from a heavily customized Bootstrap stack to
          Material UI, creating a scalable design system that unlocked theming,
          white-labeling, and faster development across products.
        </Typography>

        {/* Stats */}
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
          {[
            { icon: <AccessTimeOutlinedIcon />, label: "Duration", value: "2 Years" },
            { icon: <PersonOutlinedIcon />, label: "My Role", value: "Lead Frontend Engineer" },
            { icon: <GroupsOutlinedIcon />, label: "Team", value: "6+ Engineers" },
          ].map((stat, i) => (
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

        <Divider sx={{ mb: 6, borderColor: "divider" }} />

        {/* The Challenge */}
        <Box sx={{ mb: 7 }}>
          <SectionHeader icon={<LightbulbOutlinedIcon />} title="The Challenge" />
          <Typography
            sx={{
              color: "grey.200",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.75,
              mb: 3,
            }}
          >
            SafeBase supported multiple product surfaces with different branding
            needs: the core application and customer-facing Trust Centers.
            Bootstrap had no true theming model, which meant every customization
            required layers of workarounds and duplicate components.
          </Typography>
          <Box
            component="ul"
            sx={{
              m: 0,
              pl: 2.5,
              "& li": {
                color: "grey.300",
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.7,
                mb: 1.25,
                "&::marker": { color: "secondary.main" },
              },
            }}
          >
            <li>Separate button implementations for App and Trust Center due to different primary colors</li>
            <li>Extensive styled-components wrappers and SCSS overrides</li>
            <li>Fragile override chains that caused regressions and styling drift</li>
            <li>Difficult and expensive white-labeling and dark mode implementation</li>
            <li>Slow feature velocity due to complexity and duplication</li>
          </Box>
        </Box>

        {/* My Approach */}
        <Box sx={{ mb: 7 }}>
          <SectionHeader icon={<RocketLaunchOutlinedIcon />} title="My Approach" />
          <Grid container spacing={2.5}>
            {approachSteps.map((step) => (
              <Grid size={{ xs: 12, sm: 6 }} key={step.title}>
                <Box
                  className="glass"
                  sx={{ p: { xs: 2.5, md: 3 }, height: "100%" }}
                >
                  <Box
                    sx={{
                      color: "secondary.main",
                      mb: 1.5,
                      "& svg": { fontSize: 24 },
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: 14, md: 15 },
                      color: "grey.100",
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: { xs: 14, md: 15 },
                      color: "grey.300",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* The Results */}
        <Box sx={{ mb: 7, pt: 6 }}>
          <SectionHeader icon={<TrackChangesOutlinedIcon />} title="The Results" />
          <Typography
            sx={{
              color: "grey.200",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            We retired Bootstrap, Atlantis, react-select, sass, and legacy overrides and replaced
            them with a unified Material UI design system that continues to
            support product growth today.
          </Typography>
          <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
            {metrics.map((m, i) => (
              <Grid size={{ xs: 12, sm: 6, md: i >= 3 ? 6 : 4 }} key={m.stat} sx={{ display: "flex" }}>
                <Box
                  className="glass"
                  sx={{ p: { xs: 2, md: 2.5 }, textAlign: "center", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                >
                  <Box sx={{ color: "secondary.main", mb: 1, "& svg": { fontSize: 28 } }}>
                    {m.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: { xs: "28px", md: "36px" },
                      color: "#C9A961",
                      lineHeight: 1.1,
                      mb: 0.75,
                    }}
                  >
                    {m.stat}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: { xs: 12, md: 13 },
                      color: "grey.300",
                      lineHeight: 1.5,
                    }}
                  >
                    {m.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Impact */}
        <Box sx={{ mb: 7 }}>
          <SectionHeader icon={<TaskAltOutlinedIcon />} title="Impact" />
          <Typography
            sx={{
              color: "grey.200",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            The migration transformed frontend development from a collection of
            disconnected styling systems into a cohesive platform. Engineers
            spend less time fighting CSS and more time building features that
            deliver value to our customers.
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

export default MuiCaseStudy;
