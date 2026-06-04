import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import sun from "../assets/sun.png";
import botanical from "../assets/botanical-bg.png";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const NotFound = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: MouseEvent) => {
      // normalize to -1..1 relative to viewport center
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const loop = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;

      if (bgRef.current)
        bgRef.current.style.transform = `translate3d(${x * 18}px, ${y * 12}px, 0) scale(1.06)`;
      if (sunRef.current)
        sunRef.current.style.transform = `translate3d(${x * -28}px, ${y * -20}px, 0)`;
      if (contentRef.current)
        contentRef.current.style.transform = `translate3d(${x * -8}px, ${y * -5}px, 0)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "100svh", md: "calc(100vh - 64px)" },
        overflow: "hidden",
      }}
    >
      <Helmet title="Page Not Found" />

      {/* botanical / constellation backdrop — parallax deep layer */}
      <Box
        ref={bgRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: "-6%",
          backgroundImage: `url(${botanical})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.75,
          zIndex: 0,
          willChange: "transform",
        }}
      />
      {/* soft wash so the copy stays legible over the backdrop */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(20,18,17,0.1) 0%, rgba(20,18,17,0.5) 70%, rgba(20,18,17,0.72) 100%)",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Box
          className="reveal is-visible"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            py: { xs: 8, md: 10 },
          }}
        >
          {/* radiant sun — mid parallax layer */}
          <Box
            ref={sunRef}
            component="img"
            src={sun}
            alt=""
            aria-hidden
            className="float-sun"
            sx={{
              width: { xs: 200, sm: 240, md: 300 },
              height: "auto",
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 48px rgba(217,176,99,0.35))",
              mb: { xs: 1, md: 2 },
              willChange: "transform",
            }}
          />

          {/* text content — shallow parallax layer */}
          <Box ref={contentRef} sx={{ willChange: "transform" }}>
            {/* 404 */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "96px", sm: "128px", md: "160px" },
                lineHeight: 1,
                color: "grey.100",
              }}
            >
              404
            </Typography>

            {/* headline */}
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "26px", sm: "32px", md: "40px" },
                mt: { xs: 1, md: 2 },
                maxWidth: 640,
              }}
            >
              Looks like you've wandered off the path.
            </Typography>

            {/* subtext */}
            <Typography
              sx={{
                color: "grey.300",
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.6,
                mt: { xs: 2, md: 3 },
                maxWidth: 460,
              }}
            >
              The page you're looking for doesn't exist, or may have moved elsewhere.
            </Typography>

            {/* CTA */}
            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              disableElevation
              sx={{
                mt: { xs: 4, md: 5 },
                px: 4,
                py: 1.5,
                borderRadius: 10,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: { xs: 13, md: 14 },
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "grey.900",
                bgcolor: "primary.light",
                boxShadow: "0 12px 36px rgba(167,138,178,0.4)",
                transition: "0.3s",
                "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                "&:hover": {
                  bgcolor: "primary.light",
                  boxShadow: "0 14px 44px rgba(167,138,178,0.55)",
                },
                "&:hover .arrow": { transform: "translateX(4px)" },
              }}
            >
              Return Home
              <Box component="span" className="arrow" aria-hidden>
                →
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
