import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        zIndex: 9999,
        backgroundColor: "rgba(167,138,178,0.15)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #533B5E 0%, #7A5C87 50%, #A78AB2 100%)",
          transition: "width 0.1s linear",
        }}
      />
    </Box>
  );
};

export default ReadingProgressBar;
