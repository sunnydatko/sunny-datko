import { Box, Container, Typography } from "@mui/material";
import { SiReact, SiJavascript, SiTypescript, SiMui } from "react-icons/si";
import { FaUniversalAccess } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

const skills: { label: string; Icon: IconType }[] = [
  { label: "React",           Icon: SiReact            },
  { label: "JavaScript",     Icon: SiJavascript       },
  { label: "TypeScript",     Icon: SiTypescript       },
  { label: "Material UI",    Icon: SiMui              },
  { label: "Accessibility",  Icon: FaUniversalAccess  },
];

const About = () => {
  return (
    <Box
      component="section"
      className="el-title"
      id="about"
      sx={{ position: "relative" }}
    >
      <div className="wrap">
        <Container
          className="reveal"
          sx={{
            textAlign: "center",
            maxWidth: "970px !important",
            ".MuiTypography-body1": {
              fontSize: { xs: "17px", md: "21px" },
            },
          }}
        >
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
            About Me
          </Typography>
          <Typography variant="h3" sx={{ mt: "32px", mb: "48px" }}>
            Building products people love.
          </Typography>

          <Typography paragraph sx={{ color: "grey.200", lineHeight: 1.7, mb: 3, maxWidth: "770px", mx: "auto" }}>
            I bring together product thinking, design, and engineering through design systems and front-end platforms that help teams deliver faster without sacrificing quality.
          </Typography>

          {/* Tech stack icons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, md: 2.5 },
              justifyContent: "center",
            }}
          >
            {skills.map(({ label, Icon }) => (
              <Icon key={label} size={20} color="rgba(245,241,236,0.42)" title={label} />
            ))}
          </Box>
        </Container>
      </div>
    </Box>
  );
};

export default About;
