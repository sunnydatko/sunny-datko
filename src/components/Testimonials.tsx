import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { testimonials } from "../helpers/data";

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Box
    role="listitem"
    className="review-card reveal"
    sx={{
      borderRadius: "18px",
      background: "rgba(245, 241, 236, 0.035)",
      border: "1px solid rgba(245, 241, 236, 0.08)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      boxShadow:
        "0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(245, 241, 236, 0.05)",
      p: { xs: 3, md: 3.5 },
    }}
  >
    <Box component="figure" sx={{ m: 0 }}>
      <Box
        aria-hidden
        sx={{
          fontFamily: "'DM Serif Display', serif",
          color: "primary.main",
          opacity: 0.45,
          fontSize: { xs: 44, md: 52 },
          lineHeight: 0.5,
          height: { xs: 22, md: 26 },
        }}
      >
        &ldquo;
      </Box>
      <Typography
        component="blockquote"
        sx={{
          m: 0,
          color: "grey.200",
          fontSize: { xs: 15, md: 15.5 },
          fontWeight: { xs: 300, md: 400 },
          lineHeight: { xs: "24px", md: "26px" },
        }}
      >
        {testimonial.highlight}
      </Typography>
      <Box
        component="figcaption"
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 2.5,
          gap: 1.5,
        }}
      >
        <Box
          className="bg-img"
          aria-hidden="true"
          sx={{
            backgroundImage: `url(${testimonial.image})`,
            borderRadius: "100%",
            boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
            height: "48px",
            width: "48px",
            flexShrink: 0,
          }}
        />
        <Box sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              color: "text.primary",
              fontSize: "14.5px",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {testimonial.name}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "13px",
              lineHeight: 1.3,
            }}
          >
            {testimonial.title} · {testimonial.company}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
const rightColumn = testimonials.filter((_, i) => i % 2 !== 0);

const Testimonials = () => {
  return (
    <Box component="section" className="el-reviews" sx={{ position: "relative" }}>
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
            <Typography variant="h3" component="h2" sx={{ mt: 2 }}>
              Recommendations
            </Typography>
          </Box>
          <Box
            role="list"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2.5, md: 3 },
              }}
            >
              {leftColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2.5, md: 3 },
                mt: { xs: 0, sm: 7 },
              }}
            >
              {rightColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;
