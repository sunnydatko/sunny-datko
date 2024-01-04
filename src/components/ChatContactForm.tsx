import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { keyframes } from "@emotion/react";

import emailjs from "emailjs-com";

const fadeInAnimation = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

type ChatContactFormProps = {
  onSubmit: () => void;
};

const ChatContactForm = ({ onSubmit }: ChatContactFormProps) => {
  const form = useRef<HTMLFormElement | null>(null);

  const onSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_g36tuqc",
        "template_h9f3cqa",
        form.current,
        "3qQjX53eMlx5510nE"
      );
    }

    onSubmit();
  };

  return (
    <form ref={form} onSubmit={onSendEmail}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          marginBottom: 1,
          opacity: 0,
          animation: `${fadeInAnimation} 0.5s ease forwards`,
          animationDelay: "0.5s",
        }}
      >
        <TextField
          label="Name"
          name="from_name"
          required
          size="small"
          sx={{
            "& .MuiInputBase-root, & .MuiInputLabel-root": {
              fontSize: "1rem",
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              transform: "translate(14px, -6px) scale(0.75)",
            },
          }}
        />
        <TextField
          label="Email"
          name="reply_to"
          required
          size="small"
          sx={{
            "& .MuiInputBase-root, & .MuiInputLabel-root": {
              fontSize: "1rem",
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              transform: "translate(14px, -6px) scale(0.75)",
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          required
          rows={3}
          size="small"
          sx={{
            "& .MuiInputBase-root, & .MuiInputLabel-root": {
              fontSize: "1rem",
            },
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              transform: "translate(14px, -6px) scale(0.75)",
            },
          }}
        />
        <Button
          size="large"
          sx={{
            alignSelf: "center",
            width: "100%",
          }}
          type="submit"
          variant="outlined"
        >
          Send Email
        </Button>
      </Box>
    </form>
  );
};

export default ChatContactForm;
