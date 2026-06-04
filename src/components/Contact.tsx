import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { from_name: string; reply_to: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const validate = (fields: Fields): Errors => {
  const errors: Errors = {};
  if (!fields.from_name.trim()) {
    errors.from_name = "Name is required.";
  } else if (fields.from_name.trim().length < 2) {
    errors.from_name = "Name must be at least 2 characters.";
  }
  if (!fields.reply_to.trim()) {
    errors.reply_to = "Email is required.";
  } else if (!EMAIL_REGEX.test(fields.reply_to.trim())) {
    errors.reply_to = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
};

const EMPTY: Fields = { from_name: "", reply_to: "", message: "" };

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof Fields]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { from_name: true, reply_to: true, message: true };
    setTouched(allTouched);
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    emailjs
      .send(
        "service_g36tuqc",
        "template_h9f3cqa",
        { from_name: fields.from_name, reply_to: fields.reply_to, message: fields.message },
        "NdM8NyR0F77gTL9mL",
      )
      .then(
        () => {
          enqueueSnackbar("Your message was sent.", { variant: "success" });
          setFields(EMPTY);
          setErrors({});
          setTouched({});
        },
        (err) => {
          console.error("EmailJS error:", err);
          enqueueSnackbar("An error occured.", { variant: "error" });
        },
      );
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ padding: "72px 0", position: "relative" }}
    >
      <Box className="wrap">
        <Container className="reveal" sx={{ maxWidth: "760px !important" }}>
          <Typography
            component="span"
            align="center"
            sx={{
              display: "block",
              color: "secondary.main",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            align="center"
            variant="h3"
            sx={{  mt: 2, mb: 4 }}
          >
            Let's connect
          </Typography>
          <form onSubmit={sendEmail} noValidate>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                margin: "0 auto",
                width: { xs: "100%", sm: "90%", md: "70%" },
              }}
            >
              <TextField
                label="Name"
                name="from_name"
                value={fields.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.from_name}
                helperText={errors.from_name}
              />
              <TextField
                label="Email"
                name="reply_to"
                type="email"
                value={fields.reply_to}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.reply_to}
                helperText={errors.reply_to}
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={3}
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.message}
                helperText={errors.message}
              />
              <Button
                size="large"
                type="submit"
                sx={{
                  alignSelf: "center",
                  marginTop: 1,
                  width: { xs: "100%", md: "300px" },
                  py: 1.4,
                }}
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
