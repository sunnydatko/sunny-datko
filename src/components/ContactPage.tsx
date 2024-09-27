import { useRef } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

import banner from "../assets/typewriter.jpg";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_g36tuqc",
          "template_h9f3cqa",
          form.current,
          "3qQjX53eMlx5510nE"
        )
        .then(
          () => {
            enqueueSnackbar("Your message was sent.", {
              variant: "success",
            });
          },
          () => {
            enqueueSnackbar("An error occurred.", {
              variant: "error",
            });
          }
        );
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center", // Centers content horizontally
        alignItems: "flex-start", // Aligns content to start higher up
        color: "white",
        paddingTop: "10vh", // Slightly down from the top of the viewport
        overflow: "hidden", // Prevents overflow
        "@media (max-width: 600px)": {
          paddingTop: "5vh", // Less top padding for smaller screens
          backgroundPosition: "top", // Show more of the banner on mobile
        },
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker overlay for text readability
          zIndex: 1,
        }}
      />

      {/* Content on top of the overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: { xs: "100%", sm: "600px" },
          textAlign: "center",
          paddingX: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontWeight: 700,
            marginBottom: { xs: 1, sm: 2 }, // Less space on mobile
          }}
          variant="h2"
        >
          Let's Chat
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            marginBottom: { xs: 2, sm: 4 },
          }}
        >
          Together we can make it happen
        </Typography>

        <form ref={form} onSubmit={sendEmail}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              margin: "0 auto",
              width: "100%",
              maxWidth: { xs: "100%", sm: "100%" },
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: { xs: 2, sm: 4 },
              borderRadius: 2,
            }}
          >
            <TextField
              label="Name"
              name="from_name"
              required
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            />
            <TextField
              label="Email"
              name="reply_to"
              required
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              required
              rows={3}
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust font size for mobile
              }}
            />
            <Button
              size="large"
              sx={{
                alignSelf: "center",
                marginTop: 2,
                width: { xs: "100%", md: "300px" },
                backgroundColor: "primary.main",
                border: "2px solid #1976d2",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": {
                  backgroundColor: "#115293",
                },
              }}
              type="submit"
              variant="contained"
            >
              Send Email
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactPage;
