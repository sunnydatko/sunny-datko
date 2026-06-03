import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import lavender from "../assets/lavender.png";

const Hero = () => (
  <Box
    component="section"
    className="el-hero"
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      minHeight: { xs: "100svh", md: "100vh" },
      overflow: "hidden",
      backgroundColor: "#151313",
    }}
  >
    {/* sunset photo — kept to the right where the light falls */}
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${lavender})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "right center" },
      }}
    />
    {/* gradient: solid charcoal on the left fading to the photo on the right
        (desktop); a softer all-over wash on mobile so text stays legible */}
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        background: {
          xs: "linear-gradient(180deg, rgba(21,19,19,0.86) 0%, rgba(21,19,19,0.7) 45%, rgba(21,19,19,0.85) 100%)",
          md: "linear-gradient(90deg, rgba(21,19,19,0.97) 0%, rgba(21,19,19,0.9) 32%, rgba(21,19,19,0.55) 58%, rgba(21,19,19,0.12) 100%)",
        },
      }}
    />

    <Container sx={{ position: "relative", zIndex: 2, py: { xs: 12, md: 10 } }}>
      <Box sx={{ maxWidth: { xs: "100%", md: 620 } }}>
        {/* role */}
        <Typography
          sx={{
            color: "secondary.main",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: { xs: 12.5, md: 15 },
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: { xs: 2.5, md: 4 },
          }}
        >
          Staff Frontend Engineer
        </Typography>

        {/* headline */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "42px", sm: "60px", md: "82px" },
            lineHeight: 1.02,
            mb: { xs: 3, md: 4 },
          }}
        >
          Building beautiful systems for{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            humans.
          </Box>
        </Typography>

        {/* accent rule */}
        <Box
          sx={{
            width: 64,
            height: 3,
            borderRadius: 2,
            bgcolor: "primary.main",
            mb: { xs: 3, md: 4 },
          }}
        />

        {/* intro */}
        <Typography
          sx={{
            color: "grey.200",
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: 16, md: 19 },
            lineHeight: 1.6,
            maxWidth: 500,
            mb: { xs: 4, md: 5 },
          }}
        >
          I build frontend systems, design architecture, and user experiences that scale.
          Currently focused on trust, security, and design system experiences at Drata.
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: { xs: 2.5, md: 4 },
          }}
        >
          <Button
            href="#experience"
            sx={{
              fontSize: { xs: 15, md: 16 },
              px: 3.5,
              py: 1.4,
              "& .arrow": {
                ml: 1.5,
                transition: "transform 0.3s",
              },
              "&:hover .arrow": {
                transform: "translateX(4px)",
              },
            }}
          >
            View my work
            <Box component="span" className="arrow" aria-hidden>
              →
            </Box>
          </Button>

          <Box
            component="a"
            href="#about"
            sx={{
              color: "secondary.main",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: 15, md: 16 },
              fontWeight: 500,
              borderBottom: "1px solid",
              borderColor: "secondary.main",
              pb: "3px",
              transition: "0.3s",
              "&:hover": {
                color: "secondary.light",
                borderColor: "secondary.light",
              },
            }}
          >
            Read my story
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Hero;
