import { useEffect, useCallback, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StarMark } from "./BrandMark";

const SEQ = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

const KEY_LABELS: Record<string, string> = {
  ArrowUp: "↑", ArrowDown: "↓", ArrowLeft: "←", ArrowRight: "→",
  b: "B", a: "A",
};

const SPARKLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${((i * 3.89 + 5) % 88) + 4}%`,
  bottom: `${(i * 6.23) % 30}%`,
  delay: `${(i * 0.19) % 2.8}s`,
  duration: `${3.2 + (i % 7) * 0.45}s`,
  fontSize: i % 5 === 0 ? "16px" : i % 3 === 0 ? "11px" : "8px",
  alpha: 0.1 + (i % 4) * 0.08,
  gold: i % 5 === 0,
  twinkle: i % 4 === 0,
  twinkleDelay: `${(i * 1.3) % 5}s`,
}));

const KonamiEgg = () => {
  const [active, setActive] = useState(false);
  const [seqProgress, setSeqProgress] = useState(0);
  const progressRef = useRef(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (active) return;
    if (e.key === SEQ[progressRef.current]) {
      progressRef.current += 1;
      setSeqProgress(progressRef.current);
      if (progressRef.current === SEQ.length) {
        setActive(true);
        progressRef.current = 0;
        setSeqProgress(0);
        clearTimeout(resetTimer.current);
        return;
      }
    } else {
      progressRef.current = e.key === SEQ[0] ? 1 : 0;
      setSeqProgress(progressRef.current);
    }
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      progressRef.current = 0;
      setSeqProgress(0);
    }, 3000);
  }, [active]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => setActive(false), 8000);
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(false); };
    window.addEventListener("keydown", onEsc);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onEsc);
    };
  }, [active]);

  return (
    <>
      {/* Typing progress HUD */}
      {seqProgress > 0 && !active && (
        <Box
          aria-hidden="true"
          sx={{
            "@keyframes kFadeIn": { from: { opacity: 0 }, to: { opacity: 1 } },
            position: "fixed",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9998,
            display: "flex",
            gap: 0.75,
            alignItems: "center",
            px: 2,
            py: 1,
            borderRadius: "10px",
            backgroundColor: "rgba(20,18,17,0.88)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(245,241,236,0.08)",
            animation: "kFadeIn 0.25s ease-out forwards",
            pointerEvents: "none",
          }}
        >
          {SEQ.map((key, i) => (
            <Typography
              key={i}
              component="span"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                lineHeight: 1,
                color: i < seqProgress
                  ? "rgba(167,138,178,1)"
                  : "rgba(245,241,236,0.15)",
                transition: "color 0.15s",
              }}
            >
              {KEY_LABELS[key]}
            </Typography>
          ))}
        </Box>
      )}

      {/* Main overlay */}
      {active && (
        <Box
          role="dialog"
          aria-modal="true"
          aria-label="Easter egg unlocked"
          onClick={() => setActive(false)}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(20,18,17,0.96)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            cursor: "pointer",

            "@keyframes kFadeIn": { from: { opacity: 0 }, to: { opacity: 1 } },
            "@keyframes kFloat": {
              "0%": { transform: "translateY(0)", opacity: "var(--sa)" },
              "75%": { opacity: "var(--sa)" },
              "100%": { transform: "translateY(-88vh)", opacity: 0 },
            },
            "@keyframes kStarIn": {
              "0%": { transform: "scale(0.4) rotate(-10deg)", opacity: 0 },
              "65%": { transform: "scale(1.08) rotate(2deg)", opacity: 1 },
              "100%": { transform: "scale(1) rotate(0deg)", opacity: 1 },
            },
            "@keyframes kGlow": {
              "0%, 100%": { filter: "drop-shadow(0 0 4px rgba(201,169,97,0.2))" },
              "50%": { filter: "drop-shadow(0 0 14px rgba(201,169,97,0.55))" },
            },
            "@keyframes kTextIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            "@keyframes kBadgeIn": {
              "0%": { transform: "scale(0.5) rotate(-8deg)", opacity: 0 },
              "70%": { transform: "scale(1.1) rotate(2deg)", opacity: 1 },
              "100%": { transform: "scale(1) rotate(0deg)", opacity: 1 },
            },
            "@keyframes kTwinkle": {
              "0%, 78%, 100%": { filter: "brightness(1)" },
              "85%": { filter: "brightness(3)" },
              "92%": { filter: "brightness(1)" },
            },
            "@keyframes kHaloSpin": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },

            animation: "kFadeIn 0.45s ease-out forwards",
            "@media (prefers-reduced-motion: reduce)": {
              "& *": { animation: "none !important", opacity: "1 !important", transform: "none !important" },
            },
          }}
        >
          {/* Floating sparkles */}
          {SPARKLES.map(s => (
            <Box
              key={s.id}
              component="span"
              aria-hidden="true"
              style={{ "--sa": s.alpha } as React.CSSProperties}
              sx={{
                position: "absolute",
                left: s.left,
                bottom: s.bottom,
                fontSize: s.fontSize,
                color: s.gold ? "#C9A961" : "rgba(167,138,178,0.8)",
                pointerEvents: "none",
                userSelect: "none",
                lineHeight: 1,
                animation: s.twinkle
                  ? `kFloat ${s.duration} ease-in ${s.delay} infinite, kTwinkle 5s ease-in-out ${s.twinkleDelay} infinite`
                  : `kFloat ${s.duration} ease-in ${s.delay} infinite`,
              }}
            >
              ✦
            </Box>
          ))}

          {/* Central content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: { xs: 3, md: 4 },
              gap: 2,
              pointerEvents: "none",
            }}
          >
            <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Conic gradient halo ring */}
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  width: 144,
                  height: 144,
                  borderRadius: "50%",
                  background: `conic-gradient(
                    from 0deg,
                    transparent 0deg,
                    transparent 200deg,
                    rgba(167,138,178,0.25) 240deg,
                    rgba(167,138,178,0.75) 285deg,
                    rgba(201,169,97,0.65) 318deg,
                    rgba(167,138,178,0.75) 350deg,
                    transparent 360deg
                  )`,
                  mask: "radial-gradient(circle, transparent 55px, black 57px, black 65px, transparent 67px)",
                  WebkitMask: "radial-gradient(circle, transparent 55px, black 57px, black 65px, transparent 67px)",
                  animation: "kHaloSpin 12s linear 0.9s infinite, kFadeIn 0.8s ease-out 0.5s both",
                  pointerEvents: "none",
                }}
              />
              <Box
                aria-hidden="true"
                sx={{
                  animation: "kStarIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both, kGlow 3s ease-in-out 1s infinite",
                }}
              >
                <StarMark size={96} />
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(167,138,178,0.8)",
                mt: { xs: 1.5, md: 2 },
                animation: "kTextIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both",
              }}
            >
              ✦ &nbsp; Achievement Unlocked &nbsp; ✦
            </Typography>

            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: { xs: "48px", md: "72px" },
                fontWeight: 400,
                color: "#F5F1EC",
                lineHeight: 1.0,
                animation: "kTextIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both",
              }}
            >
              You found it.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.4,
                animation: "kTextIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.82s both",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "15px", md: "17px" },
                  color: "rgba(245,241,236,0.62)",
                  lineHeight: 1,
                }}
              >
                Most people browse.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "15px", md: "17px" },
                  fontWeight: 500,
                  color: "rgba(245,241,236,0.78)",
                  lineHeight: 1,
                }}
              >
                You explored.
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "12px", md: "13px" },
                color: "rgba(245,241,236,0.52)",
                mt: 2.5,
                animation: "kTextIn 0.65s ease-out 0.96s both",
              }}
            >
              Reward: bragging rights.
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.06em",
                color: "rgba(245,241,236,0.08)",
                mt: 0.5,
                animation: "kTextIn 0.65s ease-out 1.1s both",
              }}
            >
              click anywhere to close
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default KonamiEgg;
