import Link from "@mui/material/Link";
import { Box, Container, Typography } from "@mui/material";

import { certifications, education } from "../helpers/data";

const overlineSx = {
  color: "secondary.main",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: { xs: 12.5, md: 14 },
  letterSpacing: "0.28em",
  textTransform: "uppercase",
} as const;

const entrySx = {
  position: "relative",
  pl: { xs: 2.5, md: 4 },
  py: 1,
  mb: 4,
  borderLeft: "2px solid",
  borderColor: "rgba(167,138,178,0.35)",
} as const;

const titleSx = {
  fontSize: { xs: "22px", md: "26px" },
} as const;

const subtitleSx = {
  color: "grey.100",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: { xs: 15, md: 17 },
  mt: 1.5,
} as const;

const datesSx = {
  color: "secondary.main",
  fontFamily: "'Inter', sans-serif",
  fontSize: { xs: 13, md: 14 },
  letterSpacing: "0.04em",
} as const;

const Education = () => (
  <Box
    component="section"
    className="el-title"
    id="education"
    sx={{ position: "relative" }}
  >
    <div className="wrap" style={{ paddingTop: 0 }}>
      <Container sx={{ maxWidth: "880px !important" }}>
        <Box sx={{ textAlign: "center", mb: 6 }} className="reveal">
          <Typography component="span" sx={overlineSx}>
            Background
          </Typography>
          <Typography variant="h3" sx={{ mt: 2 }}>
            Education & Certifications
          </Typography>
        </Box>

        {certifications.map((cert) => (
          <Box key={cert.name} className="reveal" sx={entrySx}>
            <Typography variant="h4" sx={titleSx}>
              <Link href={cert.url} target="_blank" rel="noopener">
                {cert.name}
              </Link>
            </Typography>
            <Typography sx={subtitleSx}>{cert.issuer}</Typography>
            <Typography sx={datesSx}>{cert.date}</Typography>
          </Box>
        ))}

        {education.map((item) => (
          <Box key={item.institution} className="reveal" sx={entrySx}>
            <Typography variant="h4" sx={titleSx}>
              <Link href={item.url} target="_blank" rel="noopener">
                {item.institution}
              </Link>
            </Typography>
            <Typography sx={subtitleSx}>{item.credential}</Typography>
            <Typography sx={datesSx}>{item.dates}</Typography>
          </Box>
        ))}
      </Container>
    </div>
  </Box>
);

export default Education;
