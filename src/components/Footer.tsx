import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => (
  <Box
    className="footer"
    component="footer"
    sx={{ borderTop: "1px solid rgba(245,241,236,0.08)" }}
  >
    <Box sx={{ padding: "20px 0" }}>
      <Container>
        <Button
          href="https://github.com/sunnydatko/sunny-datko"
          disableFocusRipple
          variant="text"
          sx={{
            color: "grey.400",
            fontSize: 14,
            letterSpacing: "0.04em",
            textTransform: "none",
            "&:hover": { color: "primary.main", backgroundColor: "transparent" },
          }}
        >
          Designed &amp; Built by Sunny Datko 💜
        </Button>
      </Container>
    </Box>
  </Box>
);

export default Footer;
