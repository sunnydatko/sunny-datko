import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
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
    <Box sx={{ padding: "20px 0" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
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
            <Icon size={16} />
          </Box>
        ))}

        <Tooltip
          title="↑ ↑ ↓ ↓ ← → ← → B A"
          placement="top"
          slotProps={{ tooltip: { sx: { fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em", fontSize: "11px" } } }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              color: "rgba(167,138,178,0.18)",
              fontSize: "12px",
              lineHeight: 1,
              userSelect: "none",
              cursor: "default",
              transition: "color 0.3s",
              "&:hover": { color: "rgba(167,138,178,0.6)" },
            }}
          >
            ✦
          </Box>
        </Tooltip>
      </Container>
    </Box>
  </Box>
);

export default Footer;
