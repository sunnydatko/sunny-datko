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
            I am a skilled Remote Front-End React Engineer with a passion for
            building exceptional digital experiences. With over 10 years of
            experience, I have honed my expertise in this ever-evolving digital
            landscape.
          </Typography>
          <Typography paragraph>
            My journey began in online marketing and web design, where I
            cultivated my skills after obtaining a BS in Business Marketing.
            Combining my marketing and design background with software
            engineering, I excel at bridging the gap between product
            requirements and user experiences, creating seamless and intuitive
            workflows. I firmly believe in the strength of teams and value
            transparent communication, inspiring technical innovation, and
            approaching every project with integrity.
          </Typography>
          <Typography paragraph>
            In addition to my technical prowess in CSS, HTML, JavaScript, and
            Responsive Design, I bring a host of soft skills to the table.
            Creativity is my driving force, allowing me to think outside the box
            and craft visually stunning interfaces. Effective communication is
            second nature to me, fostering collaboration and ensuring everyone
            involved has a positive experience. As a team player, I thrive on
            working collectively, leveraging diverse perspectives, and achieving
            shared goals. My growth mindset and problem-solving abilities enable
            me to adapt quickly to new challenges and find innovative solutions.
          </Typography>
          <Typography paragraph>
            Test-driven development and rigorous testing/debugging are
            fundamental aspects of my workflow, ensuring robust and high-quality
            code. I am well-versed in Git/Version Control, enabling seamless
            collaboration and efficient code management.
          </Typography>
          <Typography paragraph>
            Above all, my passion lies in connecting the digital world with
            human interactions. I am dedicated to leveraging my skills to create
            impactful digital experiences that truly resonate with users. As a
            lifelong learner in this field, I am committed to staying up to date
            with the latest trends and technologies.
          </Typography>
          <Typography paragraph>
            Outside of work, I embrace a balanced lifestyle. You may find me on
            my yoga mat, experimenting with culinary delights in the kitchen, or
            building exciting web projects during my downtime.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default About;
