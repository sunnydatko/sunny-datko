import Box from "@mui/material/Box";

interface CaseStudyHeroProps {
  src: string;
  alt: string;
  objectPosition?: string;
  backgroundColor?: string;
}

const CaseStudyHero = ({
  src,
  alt,
  objectPosition = "center center",
  backgroundColor,
}: CaseStudyHeroProps) => (
  <Box
    sx={{
      width: "100%",
      height: { xs: 220, sm: 300, md: 400 },
      overflow: "hidden",
      position: "relative",
      ...(backgroundColor && { backgroundColor }),
      "&:hover img": { transform: "scale(1.08)" },
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition,
        display: "block",
        transition: "transform 0.6s ease",
      }}
    />
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(180deg, rgba(20,18,17,0.5) 0%, rgba(20,18,17,0.0) 35%, rgba(20,18,17,0.7) 65%, rgba(20,18,17,1.0) 100%)",
      }}
    />
  </Box>
);

export default CaseStudyHero;
