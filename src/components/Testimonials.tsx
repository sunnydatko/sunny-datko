import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { BsStarFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { testimonials } from "../helpers/data";

const Arrow = styled(IconButton)({
  cursor: "pointer",
  height: "44px",
  width: "44px",
  padding: 0,
  boxSizing: "border-box",
  fontSize: "16px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(167,138,178,0.5)",
  borderRadius: "50%",
  color: "#F5F1EC",
  transition: "border-color .3s, background-color .3s",
  zIndex: 2,
  "&:hover": {
    borderColor: "#A78AB2",
    backgroundColor: "rgba(167,138,178,0.12)",
  },
  "&:focus-visible": {
    outline: "2px solid #A78AB2",
    outlineOffset: "2px",
  },

  svg: {
    fontSize: "1.1em",
    opacity: 0.85,
  },
});

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [current, setCurrent] = useState(testimonials[0]);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = hovered || focused;

  const showNextTestimonial = () => {
    setActive((prevCount) =>
      prevCount === testimonials.length - 1 ? 0 : prevCount + 1
    );
  };

  const showPreviousTestimonial = () => {
    setActive((prevCount) =>
      prevCount === 0 ? testimonials.length - 1 : prevCount - 1
    );
  };

  useEffect(() => {
    setCurrent(testimonials[active]);
  }, [active]);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      showNextTestimonial();
    }, 15000);

    return () => clearInterval(id);
  }, [active, paused]);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setFocused(false);
    }
  };

  return (
    <Box
      component="section"
      className="el-reviews"
      sx={{ position: "relative" }}
    >
      <Box className="wrap">
        <Container>
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }} className="reveal">
            <Typography
              component="span"
              sx={{
                color: "secondary.main",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: { xs: 12.5, md: 14 },
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              Kind Words
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              Recommendations
            </Typography>
          </Box>
          <Box
            className="reviews reveal"
            sx={{ minHeight: { xs: "440px", sm: "470px", md: "400px" } }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
          >
            <div className="review dflex-center" aria-live="polite" aria-atomic="true">
              <div className="quote">
                <Box
                  aria-hidden
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "primary.main",
                    opacity: 0.45,
                    fontSize: { xs: 52, sm: 68 },
                    lineHeight: 0.5,
                    height: { xs: 24, sm: 32 },
                  }}
                >
                  &ldquo;
                </Box>
                <Typography
                  align="center"
                  className="dtext"
                  sx={{
                    color: "grey.200",
                    fontSize: { xs: 15, sm: 18 },
                    fontWeight: { xs: 300, sm: 400 },
                    lineHeight: { xs: "24px", sm: "30px" },
                  }}
                >
                  {current.displayText}
                </Typography>
                <Box
                  aria-label="5 out of 5 stars"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 0.5,
                    mt: 0.5,
                    color: "#C9A961",
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Box
                      key={i}
                      component={BsStarFill}
                      sx={{ fontSize: { xs: 13, sm: 15 } }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pt: 2.5,
                    gap: 1.5,
                  }}
                >
                  <Box
                    className="bg-img"
                    role="img"
                    aria-label={current.name}
                    sx={{
                      backgroundImage: `url(${current.image})`,
                      borderRadius: "100%",
                      boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
                      height: "54px",
                      width: "54px",
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "15px",
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {current.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "13.5px",
                        lineHeight: 1.3,
                      }}
                    >
                      {current.title} · {current.company}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>
            <Box>
              <Arrow
                aria-label="Previous testimonial"
                onClick={showPreviousTestimonial}
                sx={{ left: 0, marginLeft: 0.5 }}
              >
                <BsChevronLeft />
              </Arrow>
              <Arrow
                aria-label="Next testimonial"
                onClick={showNextTestimonial}
                sx={{ right: 0, marginRight: 0.5 }}
              >
                <BsChevronRight />
              </Arrow>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;
