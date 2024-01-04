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
            I'm a Lead Front-End Software Engineer with more than a decade of
            experience dedicated to crafting exceptional digital experiences. My
            journey began in the world of online marketing and web design, and
            I've continued to evolve and excel in the field. With a BS in
            Business Marketing, I've seamlessly blended my expertise in
            marketing, design, and software engineering to connect user needs
            with product innovation.
          </Typography>
          <Typography paragraph>
            My passion for creativity drives me to create visually stunning
            interfaces that captivate and engage users. What sets me apart is my
            innate ability to communicate effectively and foster collaboration
            across diverse teams. I thrive on embracing various perspectives and
            relish challenges with a growth mindset, always pushing myself to
            excel.
          </Typography>
          <Typography paragraph>
            My approach involves rigorous testing and an unwavering commitment
            to creating meaningful digital-human connections. Outside of my
            professional life, I maintain balance through yoga, culinary
            experiments, and personal web projects.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default About;
