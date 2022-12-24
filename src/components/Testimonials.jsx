import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import stars from "../assets/star-5.svg";
import { testimonials } from "../config";

const Testimonials = () => {
  return (
    <Box
      component="section"
      className="el-reviews"
      sx={{ position: "relative" }}
    >
      <Box className="wrap">
        <Container>
          <Typography gutterBottom variant="h3">
            Testimonials
          </Typography>
          <Box className="reviews">
            <div className="review dflex-center">
              <div className="quote">
                <Typography className="dtext" sx={{ textAlign: "center" }}>
                  {testimonials[0].displayText}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingY: 4,
                    gap: 3,
                  }}
                >
                  <Box
                    className="bg-img bg-lazy"
                    sx={{
                      backgroundImage: `url(${testimonials[0].image})`,
                      borderRadius: "100%",
                      boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
                      height: "80px",
                      marginRight: 1,
                      width: "80px",
                    }}
                  />
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: 700,
                      }}
                    >
                      {testimonials[0].name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "normal",
                        marginBottom: 1,
                      }}
                    >
                      {testimonials[0].title}
                    </Typography>
                    <Box
                      className="stars star-5"
                      sx={{
                        backgroundImage: `url(${stars})`,
                      }}
                    ></Box>
                  </Box>
                </Box>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;
