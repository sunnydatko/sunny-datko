import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SmartToy from "@mui/icons-material/SmartToy";
import Close from "@mui/icons-material/Close";

import ChatProvider from "./ChatProvider";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [showChatWindow, setShowChatWindow] = useState(false);

  const onCloseChatBubble = (e: React.FormEvent) => {
    e.stopPropagation();
    setShowChatBubble(false);
  };

  const onOpenChatWindow = () => {
    setShowChatBubble(false);
    setShowChatWindow(true);
  };

  const onCloseChatWindow = () => {
    setShowChatWindow(false);
    setShowChatBubble(true);
  };

  return (
    <ChatProvider>
      <Box
        sx={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 1000,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: 2,
        }}
      >
        {showChatBubble && (
          <Box
            onClick={onOpenChatWindow}
            sx={{
              position: "fixed",
              right: 16,
              bottom: 100,
              zIndex: 1000,
              backgroundColor: "common.white",
              padding: 1,
              borderRadius: 2,
              boxShadow: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>👋 Hello! Want to chat?</Typography>
            <Close
              onClick={onCloseChatBubble}
              sx={{
                padding: 0.5,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "grey.100",
                },
              }}
            />
          </Box>
        )}
        {showChatWindow && <ChatWindow onClose={onCloseChatWindow} />}
        <Box
          sx={{
            padding: 1,
            borderRadius: "50%",
            boxShadow: 2,
            backgroundColor: "primary.main",
            transition: "padding 0.1s ease-out 100ms",
            "&:hover": {
              padding: 1.2,
            },
          }}
          onClick={() => {
            if (showChatWindow) {
              onCloseChatWindow();
            } else {
              onOpenChatWindow();
            }
          }}
        >
          {showChatWindow ? (
            <Close
              sx={{
                fontSize: "40px",
                color: "common.white",
                transition: "font-size 0.1s ease-out 100ms",
                "&:hover": {
                  fontSize: "42px",
                },
              }}
            />
          ) : (
            <SmartToy
              sx={{
                fontSize: "40px",
                color: "common.white",
                transition: "font-size 0.1s ease-out 100ms",
                "&:hover": {
                  fontSize: "42px",
                },
              }}
            />
          )}
        </Box>
      </Box>
    </ChatProvider>
  );
};

export default Chat;
