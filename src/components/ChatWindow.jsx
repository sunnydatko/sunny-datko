import React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close";
import Replay from "@mui/icons-material/Replay";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@emotion/react";

import ChatBubble from "./ChatBubble";
import ChatContactForm from "./ChatContactForm";

import { messages, MessageSource, messageOptions } from "../helpers/messages";
import sunny from "../assets/sunny.jpg";

const fadeInAnimation = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ChatHeader = ({ onClose }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        padding: theme.spacing(1.2, 2),
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
        backgroundColor: "primary.main",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        color: "common.white",
        zIndex: 1500,
      }}
    >
      <Avatar alt="Sunny" src={sunny} sx={{ marginRight: 2 }} />
      <Typography sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}>
        SunnyBot
      </Typography>
      <Close
        onClick={onClose}
        sx={{
          padding: 0.5,
          borderRadius: "50%",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      />
    </Box>
  );
};

const ChatWindow = ({ onClose }) => {
  const [messageLog, setMessageLog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [options, setOptions] = React.useState({});
  const [showOptions, setShowOptions] = React.useState({});
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [isSunnyBotSpeaking, setIsSunnyBotSpeaking] = React.useState(false);
  const bottomRef = React.useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    startNewConversation();
  }, []);

  React.useEffect(() => {
    // scroll to bottom of window when new messages appear
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageLog]);

  React.useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = "";
      }
    };
  }, [isMobile]);

  const handleOptionClick = async ({ optionKey }) => {
    // Add user input to log
    if (messages[optionKey]) {
      setShowOptions(false);

      setMessageLog((prevLog) => [
        ...prevLog,
        {
          message: messageOptions[optionKey],
          user: MessageSource.USER,
        },
      ]);

      // Add sunnybot input to log
      const messagesToAdd = [];
      messages[optionKey].forEach((message) => {
        messagesToAdd.push(message);
      });

      switch (optionKey) {
        case "SendMessage":
          setShowContactForm(true);
          break;
        case "CatFact":
          const catFact = await fetchCatFact();
          messagesToAdd.push(catFact);
          break;
        case "DadJoke":
          const dadJoke = await fetchDadJoke();

          if (dadJoke.includes("?")) {
            const jokeParts = dadJoke
              .split(/\?(.+)/)
              .map((part) => part.trim())
              .filter((part) => part);
            messagesToAdd.push(jokeParts[0] + "?");
            if (jokeParts[1]) {
              messagesToAdd.push(jokeParts[1]);
            }
          } else {
            messagesToAdd.push(dadJoke);
          }
          break;
        default:
          break;
      }

      addMessagesWithDelay(messagesToAdd);

      // Filter out the selected option
      setOptions((prevOptions) => {
        const updatedOptions = { ...prevOptions };
        delete updatedOptions[optionKey];
        return updatedOptions;
      });
    }
  };

  const addMessagesWithDelay = (messagesToAdd) => {
    setIsSunnyBotSpeaking(true);

    messagesToAdd.forEach((msg, index) => {
      // Set a delay for each message
      setTimeout(() => {
        setMessageLog((prevLog) => [
          ...prevLog.map((item) => ({ ...item, isLoading: false })), // Set isLoading to false for previous messages
          { message: msg, user: MessageSource.SUNNYBOT, isLoading: true }, // Add new message with isLoading = true
        ]);

        // After a short delay, set isLoading to false for the last message
        if (index === messagesToAdd.length - 1) {
          setTimeout(() => {
            setMessageLog((prevLog) =>
              prevLog.map((item, idx) =>
                idx === prevLog.length - 1
                  ? { ...item, isLoading: false }
                  : item
              )
            );
            setIsSunnyBotSpeaking(false);
          }, 1500); // control how long the loading animation shows
        }
      }, 2000 * index); // Delay for each message
    });

    setShowOptions(true);
  };

  const startNewConversation = () => {
    setLoadingTimer();
    setOptions(messageOptions);
    addMessagesWithDelay(messages.IntroText);
  };

  const setLoadingTimer = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const handleFormSubmit = () => {
    setShowContactForm(false);
    addMessagesWithDelay(messages.ThanksMessage);
    setShowOptions(true);
  };

  const fetchCatFact = async () => {
    try {
      const response = await axios.get(
        "https://catfact.ninja/fact?max_length=140"
      );
      return response.data.fact;
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      return "Could not fetch a cat fact at this time.";
    }
  };

  const fetchDadJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      return response.data.joke;
    } catch (error) {
      console.error("Error fetching dad joke:", error);
      return "Could not fetch a dad joke at this time.";
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        bottom: 100,
        zIndex: 1000,
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
      <ChatHeader onClose={onClose} />
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
                  {Object.entries(options).map(([key, value]) => (
                    <Chip
                      label={value}
                      sx={{ margin: 0.5 }}
                      variant="outlined"
                      key={key}
                      onClick={() =>
                        handleOptionClick({ optionKey: key, value })
                      }
                    />
                  ))}
                </Box>
              )}
              {showContactForm && (
                <ChatContactForm onSubmit={handleFormSubmit} />
              )}
              {showOptions && messageLog.length > messages.IntroText.length && (
                <Button
                  onClick={() => {
                    setMessageLog([]);
                    setShowContactForm(false);
                    startNewConversation();
                    setShowOptions(true);
                  }}
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
