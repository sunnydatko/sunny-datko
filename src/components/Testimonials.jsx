import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import stars from "../assets/star-5.svg";
import { testimonials } from "../config";

const Arrow = styled("div")({
  cursor: "pointer",
  height: "36px",
  position: "absolute",
  top: "calc(50% - 18px)",
  width: "36px",
  border: "1px solid lightgrey",
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "2.3em",

  i: {
    fontSize: "1.1em",
    transition: ".3s",
    opacity: 0.7,
    "&:hover": {
      color: "#00a3d9",
    },
  },
});

const Testimonials = () => {
  const [active, setActive] = React.useState(0);
  const [current, setCurrent] = React.useState(testimonials[0]);
  const [intervalId, setIntervalId] = React.useState(0);

  const showNextTestimonial = () => {
    setActive((prevCount) => (prevCount === testimonials.length - 1 ? 0 : prevCount + 1));
  };

  const showPreviousTestimonial = () => {
    setActive((prevCount) => (prevCount === 0 ? testimonials.length - 1 : prevCount - 1));
  };

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
    }

    const newIntervalId = setInterval(() => {
      showNextTestimonial();
    }, 15000);
    setIntervalId(newIntervalId);
  };

  React.useEffect(() => {
    setCurrent(testimonials[active]);
  }, [active]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      showNextTestimonial();
    }, 15000);
    setIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, []);

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
          <Box
            className="reviews"
            sx={{ minHeight: { xs: "565px", sm: "614px", md: "542px" } }}
          >
            <div className="review dflex-center">
              <div className="quote">
                <Typography
                  align="center"
                  className="dtext"
                  sx={{
                    fontSize: { xs: 16, sm: 20 },
                    fontWeight: { xs: 300, sm: 400 },
                    lineHeight: { xs: "25px", sm: "36px" },
                  }}
                >
                  {current.displayText}
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
                      backgroundImage: `url(${current.image})`,
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
                      {current.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "normal",
                        marginBottom: 1,
                      }}
                    >
                      {current.title}
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
            <Box>
              <Arrow
                onClick={() => {
                  showPreviousTestimonial();
                  handleClick();
                }}
                sx={{ left: 0, marginLeft: 0.5 }}
              >
                <i className="bi bi-chevron-left" />
              </Arrow>
              <Arrow
                onClick={() => {
                  showNextTestimonial();
                  handleClick();
                }}
                sx={{ right: 0, marginRight: 0.5 }}
              >
                <i className="bi bi-chevron-right" />
              </Arrow>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;
