import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";

import { MessageSource } from "../helpers/messages";

// Define the animations
const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const appearAnimation = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

type ChatBubbleProps = {
  user: MessageSource;
  message: string[];
  isLoading?: boolean;
};

const ChatBubble = ({ user, message, isLoading = false }: ChatBubbleProps) => {
  const loadingText = "...".split("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:
          user === MessageSource.SUNNYBOT ? "flex-start" : "flex-end",
        marginBottom: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) =>
            user === MessageSource.SUNNYBOT ? "primary.main" : "grey.100",
          color:
            user === MessageSource.SUNNYBOT ? "common.white" : "common.black",
          borderRadius: 1,
          borderTopLeftRadius: user === MessageSource.SUNNYBOT ? 0 : 8,
          borderTopRightRadius: user === MessageSource.SUNNYBOT ? 8 : 0,
          textAlign: user === MessageSource.SUNNYBOT ? "left" : "right",
          marginBottom: 1,
          padding: 1,
          boxShadow: 2,
          width: "auto",
          maxWidth: "85%",
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          animation:
            user === MessageSource.SUNNYBOT
              ? `${appearAnimation} 1s ease-out`
              : "undefined",
        }}
      >
        {isLoading ? (
          loadingText.map((letter, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: 14,
                lineHeight: 1.5,
                display: "inline-block",
                animation: `${bounceAnimation} 1s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </Typography>
          ))
        ) : (
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChatBubble;
