import { useEffect } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Seo from "../components/Seo";

const sectionSx = { mb: 5 };
const bodySx = {
  color: "grey.200",
  fontFamily: "'Inter', sans-serif",
  fontSize: { xs: 15, md: 16 },
  lineHeight: 1.75,
  mb: 2,
};
const headingSx = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: { xs: 18, md: 20 },
  color: "grey.100",
  mb: 2,
};
const listSx = {
  m: 0,
  pl: 2.5,
  "& li": {
    color: "grey.300",
    fontFamily: "'Inter', sans-serif",
    fontSize: { xs: 15, md: 16 },
    lineHeight: 1.7,
    mb: 1,
    "&::marker": { color: "secondary.main" },
  },
};

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Seo
        title="Privacy Policy | Sunny Datko"
        description="How sunnydatko.com collects, uses, and protects your information."
        path="/privacy"
      />

      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          py: { xs: 8, md: 12 },
          px: { xs: 2.5, sm: 4, md: 6 },
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            color: "grey.300",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            textDecoration: "none",
            mb: 4,
            transition: "color 0.3s",
            "& svg": { fontSize: 16 },
            "&:hover": { color: "grey.100" },
          }}
        >
          <ArrowBackIcon /> Back Home
        </Box>

        <Typography variant="h2" sx={{ fontSize: { xs: "32px", sm: "42px", md: "52px" }, color: "grey.100", mb: 2 }}>
          Privacy Policy
        </Typography>

        <Typography sx={{ color: "grey.400", fontFamily: "'Inter', sans-serif", fontSize: 14, mb: 5 }}>
          Last updated: September 17, 2026
        </Typography>

        <Divider sx={{ mb: 5, borderColor: "divider" }} />

        <Box sx={sectionSx}>
          <Typography sx={bodySx}>
            This policy explains what information sunnydatko.com ("this site") collects, how
            it's used, and the choices you have. This is a personal portfolio site — no accounts,
            no sales, no data is ever sold.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Information Collected</Typography>
          <Typography sx={bodySx}>
            <strong>Contact form.</strong> If you use the contact form, the name, email address,
            and message you submit are sent via EmailJS directly to my inbox so I can reply. This
            information isn't stored on this site or used for any other purpose.
          </Typography>
          <Typography sx={bodySx}>
            <strong>Automatically collected data.</strong> Like most websites, this site uses
            Google Analytics to understand traffic and usage, which relies on cookies and
            collects information such as your IP address, browser, device type, and pages
            visited.
          </Typography>
          <Typography sx={bodySx}>
            <strong>reCAPTCHA.</strong> The contact form is protected by Google reCAPTCHA to
            prevent spam. reCAPTCHA collects hardware and software information, such as device
            and application data, and sends it to Google for analysis.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>How Information Is Used</Typography>
          <Box component="ul" sx={listSx}>
            <li>To respond to messages sent through the contact form</li>
            <li>To understand how visitors use the site and improve it</li>
            <li>To detect and prevent spam or abuse</li>
          </Box>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Third-Party Services</Typography>
          <Typography sx={bodySx}>
            This site relies on the following third-party services, each governed by its own
            privacy policy:
          </Typography>
          <Box component="ul" sx={listSx}>
            <li>
              <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Analytics
              </Link>{" "}
              — site traffic and usage analytics
            </li>
            <li>
              <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google reCAPTCHA
              </Link>{" "}
              — spam and abuse prevention on the contact form
            </li>
            <li>
              <Link href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
                EmailJS
              </Link>{" "}
              — delivers contact form submissions by email
            </li>
          </Box>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Cookies</Typography>
          <Typography sx={bodySx}>
            Google Analytics and reCAPTCHA set cookies in your browser. You can block or delete
            cookies through your browser settings; doing so may affect reCAPTCHA's ability to
            verify you're not a bot when submitting the contact form.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Your Choices</Typography>
          <Typography sx={bodySx}>
            You can opt out of Google Analytics tracking using the{" "}
            <Link
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </Link>
            , or by using your browser's "Do Not Track" and cookie-blocking settings. To request
            that any data submitted through the contact form be deleted, reach out via the email
            address below.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Children's Privacy</Typography>
          <Typography sx={bodySx}>
            This site isn't directed at children under 13, and doesn't knowingly collect
            information from them.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Changes to This Policy</Typography>
          <Typography sx={bodySx}>
            This policy may be updated occasionally to reflect changes to the site or applicable
            law. The date at the top reflects the most recent revision.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography sx={headingSx}>Contact</Typography>
          <Typography sx={bodySx}>
            Questions about this policy can be sent to{" "}
            <Link href="mailto:sunnydatko@gmail.com">sunnydatko@gmail.com</Link>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Privacy;
