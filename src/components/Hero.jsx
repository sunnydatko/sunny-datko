import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import movie from "../assets/iStock-1193269492.mp4";
import image from "../assets/1566836041.png";

const Hero = () => {
  return (
    <Box
      component="section"
      className="el-hero video"
      sx={{
        position: "relative",
      }}
    >
      <Box className="modifier">
        <Box className="overlay hero-vid" sx={{ overflow: "hidden" }}>
          <video
            className="lazy bg-vid loaded"
            autoPlay
            loop
            muted
            data-src={image}
          >
            <source src={movie} data-src={image} type="video/mp4" />
          </video>
        </Box>
        <Box
          className="overlay"
          sx={{ backgroundColor: "rgba(45, 49, 53, 0.75)" }}
        />
        <Container sx={{ zIndex: 5, textAlign: "center" }}>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "17px",
              letterSpacing: "0.2em",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Hi, my name is
          </Typography>
          <Typography variant="h1" sx={{ color: "common.white" }}>
            Sunny Datko
          </Typography>
          <Divider
            sx={{
              bgcolor: "common.white",
              margin: "8px auto",
              opacity: 0.25,
              width: "70%",
            }}
          />
          <Typography sx={{ color: "common.white" }}>
            I build things for the web
          </Typography>
        </Container>
        <Box className="down-button">
          <a href="#about">
            <i className="bi bi-arrow-down-circle" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
