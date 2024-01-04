import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => (
  <Box className="footer" component="footer">
    <Box sx={{ padding: "10px 0" }}>
      <Container>
        <Button
          href="https://github.com/sunnydatko/sunny-datko"
          disableFocusRipple
          disableRipple
          variant="text"
        >
          Designed &amp; Built by Sunny Datko
        </Button>
      </Container>
    </Box>
  </Box>
);

export default Footer;
