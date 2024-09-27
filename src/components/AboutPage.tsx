import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import banner from "../assets/about.jpg";

const AboutPage = () => (
  <Box component="section" id="about">
    {/* Top Banner with Darkened Overlay and Text */}
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: { xs: "250px", md: "350px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        paddingX: { xs: 2, md: 0 },
      }}
    >
      {/* Dark Overlay to improve text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Text over Banner */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "72px" },
          }}
        >
          Sunny Datko
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: 1,
            fontSize: { xs: "18px", md: "26px" },
            opacity: 0.9,
          }}
        >
          Lead Front-End Engineer
        </Typography>
      </Box>
    </Box>

    {/* Main Content */}
    <Container
      sx={{
        marginTop: 4,
        textAlign: "left",
        paddingX: { xs: 4, sm: 2, md: 2 },
        ".MuiTypography-body1": {
          fontSize: { xs: "16px", md: "20px" },
          lineHeight: 1.8,
          marginBottom: 2,
        },
      }}
    >
      <Typography paragraph>
        I am a Lead Front-End Software Engineer with more than a decade of
        experience dedicated to crafting exceptional digital experiences. My
        journey began in the world of online marketing and web design, and I've
        continued to evolve and excel in the field. With a BS in Business
        Marketing, I've seamlessly blended my expertise in marketing, design,
        and software engineering to connect user needs with product innovation.
      </Typography>

      <Typography paragraph>
        My passion for creativity drives me to create visually stunning
        interfaces that captivate and engage users. What sets me apart is my
        innate ability to communicate effectively and foster collaboration
        across diverse teams. I thrive on embracing various perspectives and
        relish challenges with a growth mindset, always pushing myself to excel.
      </Typography>

      <Typography paragraph>
        My approach involves rigorous testing and an unwavering commitment to
        creating meaningful digital-human connections. Outside of my
        professional life, I maintain balance through yoga, culinary
        experiments, and personal web projects.
      </Typography>

      {/* Key Skills as Chips */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}>
        <Chip label="React" variant="outlined" color="primary" />
        <Chip label="Material UI" variant="outlined" color="primary" />
        <Chip label="JavaScript" variant="outlined" color="primary" />
        <Chip label=" TypeScript" variant="outlined" color="primary" />
        <Chip label="UI/UX Design" variant="outlined" color="primary" />
      </Box>
    </Container>

    {/* CTA Section */}
    <Box
      sx={{
        backgroundColor: "grey.200",
        paddingY: 4,
        textAlign: "center",
        marginTop: 6,
        borderTop: "1px solid grey",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Want to Collaborate?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        I'm always excited to explore new projects and opportunities. Let’s work
        together!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/contact"
        sx={{ textTransform: "none", marginBottom: 2 }}
        startIcon={<MailOutlineIcon />} // Add an icon for visual interest
      >
        Get in Touch
      </Button>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <IconButton
          href="https://www.linkedin.com/sunnydatko"
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: "primary.main" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://www.github.com/sunnydatko"
          target="_blank"
          aria-label="GitHub"
          sx={{ color: "primary.main" }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

export default AboutPage;
