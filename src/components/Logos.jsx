import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// images
import html from "../assets/html51.png";
import css from "../assets/css3.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";

const Logos = () => {
  return (
    <Box component="section" className="el-logos" sx={{ position: "relative" }}>
      <div className="wrap">
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              "& img": {
                height: "100px",
              },
            }}
          >
            <img src={html} />
            <img src={css} />
            <img src={react} />
            <img src={angular} />
          </Box>
        </Container>
      </div>
    </Box>
  );
};

export default Logos;
