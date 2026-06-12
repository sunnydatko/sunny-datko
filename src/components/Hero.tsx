import { useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import lavender from "../assets/lavender.jpg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.7s ease-out ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseOverlayRef = useRef<HTMLDivElement>(null);

  const NEUTRAL = "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 0%, rgba(21,19,19,0.38) 100%)";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseOverlayRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseOverlayRef.current.style.background =
      `radial-gradient(ellipse 70% 80% at ${x}% ${y}%, transparent 0%, rgba(21,19,19,0.38) 100%)`;
  };

  const handleMouseLeave = () => {
    if (mouseOverlayRef.current) mouseOverlayRef.current.style.background = NEUTRAL;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const progress = Math.min(window.scrollY / sectionRef.current.offsetHeight, 1);
      bgRef.current.style.transform = `scale(${1 + progress * 0.08})`;
      bgRef.current.style.opacity = String(1 - progress * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <Box
    ref={sectionRef}
    component="section"
    className="el-hero"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      minHeight: { xs: "100svh", md: "100vh" },
      overflow: "hidden",
      backgroundColor: "#151313",
      mt: { xs: 0, md: -8 },
    }}
  >
    {/* sunset photo — kept to the right where the light falls */}
    <Box
      ref={bgRef}
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${lavender})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "right center" },
        willChange: "transform, opacity",
        transformOrigin: "center center",
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
          xs: "linear-gradient(180deg, rgba(21,19,19,0.92) 0%, rgba(21,19,19,0.85) 45%, rgba(21,19,19,0.92) 100%)",
          md: "linear-gradient(90deg, rgba(21,19,19,0.97) 0%, rgba(21,19,19,0.9) 32%, rgba(21,19,19,0.70) 58%, rgba(21,19,19,0.30) 100%)",
        },
      }}
    />
    {/* cursor-tracked radial overlay — desktop only, no mobile */}
    <Box
      ref={mouseOverlayRef}
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        background: NEUTRAL,
        transition: "background 0.18s ease",
        display: { xs: "none", md: "block" },
        pointerEvents: "none",
      }}
    />

    {/* top gradient veil — gives transparent nav links a dark ledge over the photo on the right */}
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 120,
        background: "linear-gradient(to bottom, rgba(21,19,19,0.72) 0%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />

    {/* bottom gradient veil — softens the hero edge into the section below */}
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        background: "linear-gradient(to top, rgba(21,19,19,1) 0%, rgba(21,19,19,0.6) 50%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />

    <Container sx={{ position: "relative", zIndex: 2, py: { xs: 12, md: 10 } }}>
      <Box sx={{ maxWidth: { xs: "100%", md: 620 } }}>
        {/* role */}
        <Typography
          sx={{
            ...anim("0.1s"),
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
            ...anim("0.3s"),
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
            ...anim("0.5s"),
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
            ...anim("0.65s"),
            color: "grey.200",
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: 16, md: 19 },
            lineHeight: 1.6,
            maxWidth: 500,
            mb: { xs: 4, md: 5 },
          }}
        >
          Connecting product strategy, design systems, and frontend architecture to create intuitive user experiences.
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            ...anim("0.85s"),
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: { xs: 2.5, md: 4 },
          }}
        >
          <Button
            href="#experience"
            variant="outlined"
            sx={{
              fontSize: { xs: 15, md: 16 },
              px: 3.5,
              py: 1.4,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
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
            About Me
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
  );
};

export default Hero;
