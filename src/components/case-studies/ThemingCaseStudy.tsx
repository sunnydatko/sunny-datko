import { useEffect } from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import ReadingProgressBar from "../ReadingProgressBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import themeImg from "../../assets/theme.jpg";

const approachItems = [
  {
    icon: <PaletteOutlinedIcon />,
    title: "Design Tokens",
    body: "A single source of truth for colors, typography, and spacing.",
  },
  {
    icon: <StyleOutlinedIcon />,
    title: "Theme-Aware Components",
    body: "Components adapt automatically based on the active theme.",
  },
  {
    icon: <DashboardCustomizeOutlinedIcon />,
    title: "Multiple Themes",
    body: "Create and manage themes for different products and customers.",
  },
];

const keyOutcomes = [
  {
    icon: <PaletteOutlinedIcon />,
    title: "Unified Theming",
    body: "One theming architecture across App and Trust Center.",
  },
  {
    icon: <LocalOfferOutlinedIcon />,
    title: "White Labeling at Scale",
    body: "Customers can customize their brand without engineering effort.",
  },
  {
    icon: <WbSunnyOutlinedIcon />,
    title: "Light & Dark Mode",
    body: "Full light and dark mode support using the same system.",
  },
  {
    icon: <LayersOutlinedIcon />,
    title: "Reduced Duplication",
    body: "Eliminated product-specific component variations and override chains.",
  },
  {
    icon: <SecurityOutlinedIcon />,
    title: "Fewer Regressions",
    body: "Consistent styling and tokens reduce bugs and visual drift.",
  },
  {
    icon: <BoltOutlinedIcon />,
    title: "Developer Velocity",
    body: "Faster implementation of visual updates and new themes.",
  },
];

const tags = [
  "Design Tokens",
  "Theming",
  "White Labeling",
  "Dark Mode",
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
      {icon}
    </Box>
    <Typography
      variant="h4"
      sx={{
        fontSize: { xs: "22px", sm: "26px", md: "32px" },
        color: "grey.100",
        m: 0,
      }}
    >
      {title}
    </Typography>
  </Box>
);

const ThemingCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
      <ReadingProgressBar />
      {/* Hero */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 300, md: 400 },
          overflow: "hidden",
          position: "relative",
          "&:hover img": { transform: "scale(1.08)" },
        }}
      >
        <Box
          component="img"
          src={themeImg}
          alt="Theme-driven platform screenshots"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            transition: "transform 0.6s ease",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(20,18,17,0.5) 0%, rgba(20,18,17,0.0) 35%, rgba(20,18,17,0.7) 65%, rgba(20,18,17,1.0) 100%)",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 920,
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
          Building a Theme-Driven Platform
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
          Enabling white labeling and dark mode at scale with design tokens
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
          As SafeBase grew, customers needed their Trust Centers to reflect
          their own brand—not ours. I led the effort to build a scalable
          theming system that supports white labeling, multiple products, and
          light/dark mode from a single foundation.
        </Typography>

        {/* Stats */}
        <Box
          className="glass"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            mb: 6,
            p: { xs: 2, md: 3 },
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

        {/* Two-column layout: main content + Key Outcomes sidebar */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            gap: { md: 6 },
            alignItems: "flex-start",
            mb: 7,
          }}
        >
          {/* Left: Challenge + Approach */}
          <Box sx={{ flex: "1 1 0", minWidth: 0, mb: { xs: 7, md: 0 } }}>
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
                Our original styling approach relied on Bootstrap overrides,
                styled-components, and product-specific implementations. Each
                new branding request added complexity and technical debt.
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
                    lineHeight: 1.5,
                    mb: 0.4,
                    "&::marker": { color: "secondary.main" },
                  },
                }}
              >
                <li>Customizations were scattered and hard to scale</li>
                <li>Components behaved differently across products</li>
                <li>Styling changes often introduced regressions</li>
                <li>New themes required engineering effort</li>
                <li>Dark mode was difficult and expensive to implement</li>
                <li>No single source of truth for visual styling</li>
              </Box>
            </Box>

            {/* My Approach */}
            <Box>
              <SectionHeader icon={<RocketLaunchOutlinedIcon />} title="My Approach" />
              <Typography
                sx={{
                  color: "grey.200",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: 16, md: 17 },
                  lineHeight: 1.75,
                  mb: 4,
                }}
              >
                I reframed branding as a theming problem, not a component
                problem. By introducing a design token system, we separated
                visual decisions from component logic.
              </Typography>

              {/* 4 approach items */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                  gap: 3,
                  mb: 4,
                }}
              >
                {approachItems.map((item) => (
                  <Box key={item.title}>
                    <Box
                      sx={{
                        color: "secondary.main",
                        mb: 1.25,
                        "& svg": { fontSize: 22 },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: { xs: 13, md: 14 },
                        color: "grey.100",
                        lineHeight: 1.3,
                        mb: 0.75,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: { xs: 13, md: 14 },
                        color: "grey.400",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </Typography>
                  </Box>
                ))}
              </Box>

            </Box>
          </Box>

          {/* Right: Key Outcomes sidebar */}
          <Box
            sx={{
              width: { md: 280 },
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: { xs: "22px", md: "24px" },
                color: "#C9A961",
                mb: 3,
              }}
            >
              Key Outcomes
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {keyOutcomes.map((outcome) => (
                <Box
                  key={outcome.title}
                  sx={{ display: "flex", gap: 1.75, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "rgba(167,138,178,0.1)",
                      border: "1px solid rgba(167,138,178,0.2)",
                      color: "primary.light",
                      flexShrink: 0,
                      mt: "2px",
                      "& svg": { fontSize: 16 },
                    }}
                  >
                    {outcome.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: { xs: 14, md: 15 },
                        color: "grey.100",
                        mb: 0.4,
                      }}
                    >
                      {outcome.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: { xs: 13, md: 13 },
                        color: "grey.400",
                        lineHeight: 1.55,
                      }}
                    >
                      {outcome.body}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Enabling Dark Mode */}
        <Box sx={{ mb: 7 }}>
          <SectionHeader icon={<DarkModeOutlinedIcon />} title="Enabling Dark Mode" />
          <Typography
            sx={{
              color: "grey.200",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            Dark mode was once a highly requested feature but was nearly
            impossible to implement with our previous architecture. With design
            tokens, we introduced an alternate set of values for colors and
            surfaces—unlocking dark mode across the Trust Center without
            rewriting components.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {[
              {
                icon: <NightlightOutlinedIcon />,
                title: "Same components",
                body: "No duplicate implementations. Just different token values.",
              },
              {
                icon: <WbSunnyOutlinedIcon />,
                title: "Future-ready",
                body: "The same architecture powers other products and new themes.",
              },
            ].map((item) => (
              <Box
                key={item.title}
                sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
              >
                <Box
                  sx={{
                    color: "secondary.main",
                    flexShrink: 0,
                    pt: "2px",
                    "& svg": { fontSize: 22 },
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: 15, md: 16 },
                      color: "grey.100",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: { xs: 14, md: 15 },
                      color: "grey.400",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
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
            What was once a manual, error-prone process is now a scalable
            platform capability. By centralizing visual decisions into themes
            and design tokens, we enabled our customers to own their brand
            experience—without increasing complexity for engineering.
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
            transition: "color 0.3s",
            "&:hover": { color: "grey.100" },
            "& svg": { fontSize: 18 },
          }}
        >
          <ArrowBackIcon /> Back to Work
        </Box>
      </Box>
    </Box>
  );
};

export default ThemingCaseStudy;
