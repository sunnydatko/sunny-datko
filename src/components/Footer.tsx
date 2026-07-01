import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { Icon: SiGithub,     href: "https://github.com/sunnydatko/sunny-datko",       label: "GitHub"   },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sunnydatko/",          label: "LinkedIn" },
  { Icon: FaTwitter,    href: "https://x.com/sunnydatko",                         label: "Twitter"  },
];

const Footer = () => (
  <Box
    className="footer"
    component="footer"
    sx={{ borderTop: "1px solid rgba(245,241,236,0.08)" }}
  >
    <Box sx={{ pt: "32px", pb: "48px" }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          {socials.map(({ Icon, href, label }) => (
            <Box
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "grey.500",
                display: "flex",
                transition: "color 0.2s, transform 0.2s",
                "&:hover": { color: "primary.main", transform: "scale(1.15)" },
              }}
            >
              <Icon size={28} />
            </Box>
          ))}
        </Box>

        <Typography variant="caption" sx={{ color: "grey.600", opacity: 0.6, fontWeight: 500, marginTop: "20px" }}>
          Crafted by{" "}
          <Box
            component="a"
            href="https://github.com/sunnydatko"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "inherit",
              textDecoration: "none",
              transition: "color 0.2s",
              "&:hover": { color: "primary.main", textDecoration: "underline" },
            }}
          >
            Sunny Datko
          </Box>
        </Typography>
      </Container>
    </Box>
  </Box>
);

export default Footer;
