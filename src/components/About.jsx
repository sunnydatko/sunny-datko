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
          <Typography gutterBottom sx={{ fontWeight: 700 }}>
            Where innovation, creativity, and all things technology collide.
          </Typography>
          <Typography paragraph>
            Pursuing the engineering world on a foundation of authenticity and
            passion, I am a longstanding Senior Software Engineer with 8+ years
            of experience accentuating this ever-evolving digital space.
          </Typography>
          <Typography paragraph>
            To date, I hold an extensive background involving front-end software
            development, web application deployment, and working alongside
            productive teams. Even more, I enjoy leveraging that history to
            secure value-based results via humanizing digital interactions,
            leading by example, and of course, keeping an open mind.
          </Typography>
          <Typography paragraph>
            Prior to engineering, I specialized in online marketing and web
            design after attaining a BS in Business Marketing. From there, I
            branched into software engineering for several organizations -
            blending my experiences in marketing and design to connect product
            requirements with user experiences and convey complex workflows. But
            also being someone who firmly believes that strong results stem from
            strong teams, I value transparent communication, inspiring new
            technical approaches, and executing every project with a moral
            compass.
          </Typography>
          <Typography paragraph>
            As a solutions-oriented professional, I am passionate about
            translating front-end goals into tangible realities and doing so
            while ensuring everyone involved has positive experiences. Overall,
            connecting the digital world with the human one is my focus, I enjoy
            collaborating with people FOR people, and every effort that I do as
            a lifelong learner of this field rests on one cornerstone notion: my
            passion for both seeing and helping others succeed.
          </Typography>
          <Typography paragraph>
            Free time? Off the clock, you can often find me practicing yoga,
            cooking, playing the ukulele, and building things for the web.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default About;
