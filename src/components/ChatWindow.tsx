import { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Replay from "@mui/icons-material/Replay";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@emotion/react";

import ChatBubble from "./ChatBubble";
import ChatContactForm from "./ChatContactForm";
import ChatContext from "./ChatContext";
import ChatHeader from "./ChatHeader";

import {
  MainMessageOption,
  messages,
  MessageSource,
} from "../helpers/messages";

const fadeInAnimation = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

type ChatWindowProps = {
  onClose: () => void;
};

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    bottomRef,
    handleFormSubmit,
    handleOptionClick,
    isSunnyBotSpeaking,
    options,
    showOptions,
    messageLog,
    onRestartConversation,
    onStartNewConversation,
    showContactForm,
  } = useContext(ChatContext);

  useEffect(() => {
    // Hide main page scrollbar for mobile views
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = "";
      }
    };
  }, [isMobile]);

  const onCloseWindow = () => {
    onClose();
    onStartNewConversation();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        bottom: 100,
        height: 500,
        width: 350,
        backgroundColor: "common.white",
        borderRadius: 2,
        cursor: "initial",
        display: "flex",
        flexDirection: "column",
        boxShadow: 2,
        zIndex: 9999,
        "@media (max-width: 600px)": {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: 0,
        },
      }}
    >
      <ChatHeader onClose={onCloseWindow} />
      <Box
        sx={{
          flex: 1,
          padding: 2,
          overflowY: "auto",
        }}
      >
        <>
          {messageLog.map((item, index) => {
            return (
              <ChatBubble
                key={index}
                user={item.user}
                message={item.message}
                isLoading={
                  item.isLoading && item.user === MessageSource.SUNNYBOT
                }
              />
            );
          })}
          {!isSunnyBotSpeaking && (
            <>
              {showOptions && !showContactForm && (
                <Box
                  sx={{
                    animation: `${fadeInAnimation} 0.5s ease forwards`,
                    animationDelay: "0.5s",
                    opacity: 0,
                  }}
                >
                  {Object.entries(options).map(([key, option]) => (
                    <Tooltip
                      title={option.disabled ? "Work in Progress 🚧" : ""}
                      arrow
                    >
                      <span>
                        <Chip
                          label={option.label}
                          color={option.color || "default"}
                          variant={option.color ? "filled" : "outlined"}
                          key={key}
                          disabled={option.disabled}
                          onClick={() =>
                            handleOptionClick({
                              optionKey: key as MainMessageOption,
                            })
                          }
                          sx={{ margin: 0.5 }}
                        />
                      </span>
                    </Tooltip>
                  ))}
                </Box>
              )}
              {showContactForm && (
                <ChatContactForm onSubmit={handleFormSubmit} />
              )}
              {showOptions && messageLog.length > messages.IntroText.length && (
                <Button
                  onClick={onRestartConversation}
                  startIcon={
                    <Replay
                      sx={{
                        transition: "transform 0.5s ease-in-out",
                      }}
                    />
                  }
                  sx={{
                    marginTop: 0.5,
                    textTransform: "none",
                    opacity: 0,
                    animation: `${fadeInAnimation} 0.5s ease forwards`,
                    animationDelay: "0.5s",
                    "&:hover .MuiSvgIcon-root": {
                      transform: "rotate(-360deg)",
                    },
                  }}
                >
                  Restart Conversation
                </Button>
              )}
            </>
          )}
        </>
        <div ref={bottomRef} />
      </Box>
    </Box>
  );
};

export default ChatWindow;
