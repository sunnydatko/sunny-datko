import { useEffect, useCallback, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StarMark } from "./BrandMark";

const SEQ = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

const SPARKLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: `${((i * 3.89 + 5) % 88) + 4}%`,
  bottom: `${(i * 6.23) % 30}%`,
  delay: `${(i * 0.19) % 2.8}s`,
  duration: `${2.6 + (i % 7) * 0.38}s`,
  fontSize: i % 5 === 0 ? "22px" : i % 3 === 0 ? "15px" : "9px",
  alpha: 0.18 + (i % 5) * 0.14,
  gold: i % 5 === 0,
}));

const KonamiEgg = () => {
  const [active, setActive] = useState(false);
  const progress = useRef(0);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === SEQ[progress.current]) {
      progress.current += 1;
      if (progress.current === SEQ.length) {
        setActive(true);
        progress.current = 0;
      }
    } else {
      progress.current = e.key === SEQ[0] ? 1 : 0;
    }
  }, []);

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

  if (!active) return null;

  return (
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
        "@keyframes kRing": {
          "0%": { transform: "scale(0.1)", opacity: 0.85 },
          "100%": { transform: "scale(5)", opacity: 0 },
        },
        "@keyframes kFloat": {
          "0%": { transform: "translateY(0)", opacity: "var(--sa)" },
          "75%": { opacity: "var(--sa)" },
          "100%": { transform: "translateY(-88vh)", opacity: 0 },
        },
        "@keyframes kStarIn": {
          "0%": { transform: "scale(0.15) rotate(-20deg)", opacity: 0 },
          "65%": { transform: "scale(1.2) rotate(5deg)", opacity: 1 },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: 1 },
        },
        "@keyframes kGlow": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(201,169,97,0.35))" },
          "50%": { filter: "drop-shadow(0 0 28px rgba(201,169,97,0.85))" },
        },
        "@keyframes kTextIn": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },

        animation: "kFadeIn 0.45s ease-out forwards",
        "@media (prefers-reduced-motion: reduce)": {
          "& *": { animation: "none !important", opacity: "1 !important", transform: "none !important" },
        },
      }}
    >
      {/* Expanding rings */}
      {[0, 1, 2, 3].map(i => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "1px solid rgba(167,138,178,0.55)",
            animation: `kRing 2.6s ease-out ${i * 0.44}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

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
            animation: `kFloat ${s.duration} ease-in ${s.delay} infinite`,
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
          gap: 2.5,
          pointerEvents: "none",
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            animation: "kStarIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both, kGlow 3s ease-in-out 1s infinite",
          }}
        >
          <StarMark size={96} />
        </Box>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(167,138,178,0.8)",
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
            animation: "kTextIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both",
          }}
        >
          You found it.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: "15px", md: "17px" },
            color: "rgba(245,241,236,0.5)",
            maxWidth: 400,
            lineHeight: 1.7,
            animation: "kTextIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.85s both",
          }}
        >
          ↑ ↑ ↓ ↓ ← → ← → B A — the universal password
          <br />for people who pay attention to details.
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "rgba(245,241,236,0.18)",
            mt: 1,
            animation: "kTextIn 0.65s ease-out 1.1s both",
          }}
        >
          click anywhere · press esc · closes in 8s
        </Typography>
      </Box>
    </Box>
  );
};

export default KonamiEgg;
