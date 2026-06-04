import { Box, Chip, Container, Typography } from "@mui/material";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Material UI",
  "UI/UX Design",
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
            Connecting product strategy with frontend craft.
          </Typography>

          {/* Key skills */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.25,
              mb: 4,
              justifyContent: "center",
            }}
          >
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </Box>

          <Typography paragraph sx={{ color: "grey.200", lineHeight: 1.7 }}>
            With a background spanning marketing, design, and engineering, I specialize in turning complex product requirements into intuitive frontend systems. I build design systems, platform foundations, and user experiences that help teams move faster while keeping products effortless to use.          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default About;
