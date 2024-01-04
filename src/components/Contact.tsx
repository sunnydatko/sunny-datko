import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const Contact = () => {
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
            enqueueSnackbar("An error occured.", {
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
        backgroundColor: "grey.100",
        padding: "48px 0",
        position: "relative",
      }}
    >
      <Box className="wrap">
        <Container>
          <Typography
            gutterBottom
            sx={{ fontSize: "2rem", fontWeight: 700 }}
            variant="h3"
          >
            Let's Chat
          </Typography>
          <Typography align="center" sx={{ marginBottom: 4 }}>
            Together we can make it happen
          </Typography>

          <form ref={form} onSubmit={sendEmail}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                margin: "0 auto",
                width: { xs: "100%", sm: "90%", md: "70%" },
              }}
            >
              <TextField label="Name" name="from_name" required />
              <TextField label="Email" name="reply_to" required />
              <TextField
                label="Message"
                name="message"
                multiline
                required
                rows={3}
              />
              <Button
                size="large"
                sx={{
                  alignSelf: "center",
                  marginTop: 1,
                  width: { xs: "100%", md: "300px" },
                }}
                type="submit"
                variant="outlined"
              >
                Send Email
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
