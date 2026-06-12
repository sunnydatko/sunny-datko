import { Box, Container, Typography } from "@mui/material";
import { SiReact, SiJavascript, SiTypescript, SiMui, SiFigma } from "react-icons/si";
import type { IconType } from "react-icons/lib";

const skills: { label: string; Icon: IconType }[] = [
  { label: "React",        Icon: SiReact        },
  { label: "JavaScript",  Icon: SiJavascript   },
  { label: "TypeScript",  Icon: SiTypescript   },
  { label: "Material UI", Icon: SiMui          },
  { label: "Figma",       Icon: SiFigma        },
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
            maxWidth: "860px !important",
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
          <Typography variant="h3" sx={{ mt: 2, mb: 4 }}>
            Connecting product strategy with frontend craft
          </Typography>

          <Typography paragraph sx={{ color: "grey.200", lineHeight: 1.7, mb: 3 }}>
            With a background spanning marketing, design, and engineering, I specialize in turning complex product requirements into intuitive frontend systems. I build design systems, platform foundations, and user experiences that help teams move faster while keeping products effortless to use.
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
              <Icon key={label} size={20} color="rgba(255,255,255,0.3)" title={label} />
            ))}
          </Box>
        </Container>
      </div>
    </Box>
  );
};

export default About;
