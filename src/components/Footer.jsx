import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

const icons = [
  {
    href: "https://www.linkedin.com/in/sunnydatko",
    className: "bi bi-linkedin",
  },
  {
    href: "mailto:sunnydatko@gmail.com",
    className: "bi bi-envelope-fill",
  },
  {
    href: "https://github.com/sunnydatko",
    className: "bi bi-github",
  },
];

const Footer = () => {
  return (
    <Box className="footer" component="footer">
      <Box sx={{ padding: "30px 0 10px" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "16px",
            }}
          >
            {icons.map(({ className, href }) => (
              <IconButton key={className} href={href}>
                <i className={className} />
              </IconButton>
            ))}
          </Box>
          <Button
            href="https://github.com/sunnydatko"
            disableFocusRipple
            disableRipple
            sx={{ marginTop: 1 }}
            variant="text"
          >
            Designed &amp; Built by Sunny Datko
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
