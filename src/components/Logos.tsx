import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// images
import html from "../assets/html51.png";
import css from "../assets/css3.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";

const Logos = () => {
  return (
    <Box component="section" className="el-logos" sx={{ position: "relative" }}>
      <div className="wrap">
        <Container className="reveal">
          <Typography
            align="center"
            sx={{
              color: "secondary.main",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12, md: 13 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 4,
            }}
          >
            Built With
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 4,
              width: "100%",
              "& img": {
                height: { xs: "56px", md: "80px" },
                filter: "grayscale(1) brightness(0) invert(0.9)",
                opacity: 0.5,
                transition: "filter 0.4s, opacity 0.4s, transform 0.4s",
              },
              "& img:hover": {
                filter: "none",
                opacity: 1,
                transform: "translateY(-4px)",
              },
            }}
          >
            <img src={html} alt="HTML5" />
            <img src={css} alt="CSS3" />
            <img src={react} alt="React" />
            <img src={angular} alt="Angular" />
          </Box>
        </Container>
      </div>
    </Box>
  );
};

export default Logos;
