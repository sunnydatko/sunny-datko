import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box
      component="section"
      className="el-title"
      id="about"
      sx={{
        backgroundColor: "grey.100",
        position: "relative",
        paddingBottom: 1,
      }}
    >
      <div className="wrap">
        <Container
          sx={{
            ".MuiTypography-body1": {
              fontSize: { xs: "16px", md: "20px" },
            },
          }}
        >
          <Typography variant="h3" gutterBottom>
            About Me
          </Typography>
          <Typography paragraph>
            I'm a skilled remote Front-End React Engineer with over a decade of
            experience crafting exceptional digital experiences. Starting in
            online marketing and web design after earning a BS in Business
            Marketing, I blend marketing, design, and software engineering to
            bridge product and user needs seamlessly. My creative drive fuels
            visually stunning interfaces, while my natural communication fosters
            collaboration. A team player, I thrive on diverse perspectives and
            tackle challenges with a growth mindset. My workflow includes
            rigorous testing, Git expertise, and a dedication to impactful
            digital-human connections. Outside of work, I balance with yoga,
            cooking experiments, and web projects.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default About;
