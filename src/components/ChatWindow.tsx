import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Replay from "@mui/icons-material/Replay";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@emotion/react";

import ChatBubble from "./ChatBubble";
import ChatHeader from "./ChatHeader";
import ChatContactForm from "./ChatContactForm";

import {
  messages,
  MessageSource,
  messageOptions,
  MessageOption,
} from "../helpers/messages";
// import { mainOptions } from "../helpers/dungeon-riddle";
import { fetchCatFact, fetchDadJoke } from "../helpers/chat-helpers";

const fadeInAnimation = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

type ChatWindowProps = {
  onClose: () => void;
};

type MessageItem = {
  isLoading?: boolean;
  user: MessageSource;
  message: string[];
};

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messageLog, setMessageLog] = useState<MessageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState({});
  const [showOptions, setShowOptions] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSunnyBotSpeaking, setIsSunnyBotSpeaking] = useState(false);
  // const [isPlayingGame, setIsPlayingGame] = useState(false);
  // const [gameState, setGameState] = useState({});

  const bottomRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    startNewConversation();
  }, []);

  useEffect(() => {
    // Scroll to bottom of window when new messages appear
    const current = bottomRef.current as HTMLDivElement | null;
    if (current) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageLog]);

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

  const handleOptionClick = async ({
    optionKey,
  }: {
    optionKey: MessageOption;
  }) => {
    // if (optionKey === MessageOption.PlayGame) {
    //   // Initialize game and set initial state
    //   setIsPlayingGame(true);
    //   setGameState({ hasKey: false, hasSword: false, hasAmulet: false });
    //   addMessagesWithDelay([
    //     "Welcome to 'A Dungeon's Riddle'!",
    //     "Choose a wall to begin.",
    //   ]);
    //   return;
    // }

    // if (isPlayingGame) {
    // Handle game progression
    //  const gameResponse = processGameOption(gameState, optionKey);
    // addMessagesWithDelay([gameResponse.text]);
    //  setGameState(gameResponse.newState);
    //   return;
    // }

    // Regular chatbot functionality
    if (messages[optionKey]) {
      setShowOptions(false);
      // Add user input to log
      setMessageLog((prevLog) => [
        ...prevLog,
        {
          message: messageOptions[optionKey],
          user: MessageSource.USER,
        },
      ]);

      // Add sunnybot input to log
      const messagesToAdd = [];
      messages[optionKey].forEach((message: string) => {
        messagesToAdd.push(message);
      });

      switch (optionKey) {
        case MessageOption.SendMessage:
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
              .map((part: string) => part.trim())
              .filter((part: string) => part);
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
        const updatedOptions: any = { ...prevOptions };
        delete updatedOptions[optionKey];
        return updatedOptions;
      });
    }
  };

  const addMessagesWithDelay = (messagesToAdd: string[]) => {
    setIsSunnyBotSpeaking(true);

    messagesToAdd.forEach((msg, index) => {
      // Set a delay for each message
      setTimeout(() => {
        setMessageLog((prevLog) => [
          ...prevLog.map((item) => ({ ...item, isLoading: false })), // Set isLoading to false for previous messages
          { message: [msg], user: MessageSource.SUNNYBOT, isLoading: true }, // Add new message with isLoading = true
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

  // Utility function to handle game logic
  // const processGameOption = (currentState, optionKey) => {
  // Define game logic here
  // Return the new game state and text response
  // };

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
                      label={value as string}
                      sx={{ margin: 0.5 }}
                      variant="outlined"
                      key={key}
                      onClick={() =>
                        handleOptionClick({
                          optionKey: key as MessageOption,
                        })
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
