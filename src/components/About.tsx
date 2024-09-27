import { Box, Button, Container, Typography } from "@mui/material";

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
            textAlign: "center",
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
          <Button href="/about" disableRipple>
            Learn More
          </Button>
        </Container>
      </div>
    </Box>
  );
};

export default About;
