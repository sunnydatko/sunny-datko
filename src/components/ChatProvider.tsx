import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ChatContext from "./ChatContext";
import { useGameOptions } from "./useGameOptions";

import { fetchCatFact, fetchJoke } from "../helpers/chat-helpers";
import {
  messages,
  MessageSource,
  mainMessageOptions,
  MainMessageOption,
} from "../helpers/messages";
import { GameOption, gameOptions } from "../helpers/dungeons-riddle";
import MessageItem from "../types/MessageItem";
import { MessageOptions } from "../types/MessageOption";

import "../fireworks.scss";

type ChatProviderProps = {
  children: React.ReactNode;
};

const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messageLog, setMessageLog] = useState<MessageItem[]>([]);
  const [options, setOptions] = useState<MessageOptions>({});
  const [showOptions, setShowOptions] = useState(true);
  const [isSunnyBotSpeaking, setIsSunnyBotSpeaking] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const bottomRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // Scroll to bottom of window when new messages appear
    const current = bottomRef.current as HTMLDivElement | null;
    if (current) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageLog]);

  useEffect(() => {
    debugger;
    if (isMobile) {
      document.body.style.overflow = "";
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = "hidden";
      }
    };
  }, [isMobile]);

  const addMessagesWithDelay = (
    messagesToAdd: string[],
    showFireworks?: boolean
  ) => {
    setIsSunnyBotSpeaking(true);

    messagesToAdd.forEach((msg, index) => {
      // Set a delay for each message
      setTimeout(() => {
        setMessageLog((prevLog) => [
          ...prevLog.map((item) => ({ ...item, isLoading: false })), // Set isLoading to false for previous messages
          {
            message: msg,
            user: MessageSource.SUNNYBOT,
            isLoading: true,
          }, // Add new message with isLoading = true
        ]);

        // After a short delay, set isLoading to false for the last message
        if (index === messagesToAdd.length - 1) {
          setTimeout(() => {
            setMessageLog((prevLog) =>
              prevLog.map((item, idx) =>
                idx === prevLog.length - 1
                  ? { ...item, isLoading: false, showFireworks: showFireworks }
                  : item
              )
            );
            setIsSunnyBotSpeaking(false);
          }, 2500); // control how long the loading animation shows
        }
      }, 2000 * index); // Delay for each message
    });

    setShowOptions(true);
  };

  const selectNewGame = () => {
    addMessagesWithDelay(["Choose your adventure."]);
    setOptions({
      [GameOption.DungeonsRiddle]: {
        label: gameOptions[GameOption.DungeonsRiddle],
      },
      [GameOption.HauntedMansion]: {
        label: gameOptions[GameOption.HauntedMansion],
        disabled: true,
      },
    });
  };

  const { handleGameOptionClick, resetGame } = useGameOptions({
    setMessageLog,
    setOptions,
    setShowOptions,
    addMessagesWithDelay,
  });

  // Type guard to check if the option is a GameOption
  const isGameOption = (option: any): option is GameOption => {
    return Object.values(GameOption).includes(option);
  };

  // Handle click options
  const handleOptionClick = async ({
    optionKey,
  }: {
    optionKey: MainMessageOption | GameOption;
  }) => {
    if (isGameOption(optionKey)) {
      handleGameOptionClick(optionKey as GameOption);
      return;
    }

    setShowOptions(false);
    // Add user input to log
    setMessageLog((prevLog) => [
      ...prevLog,
      {
        message: mainMessageOptions[optionKey].label,
        user: MessageSource.USER,
      },
    ]);

    // Add sunnybot input to log
    const messagesToAdd = [];
    messages[optionKey]?.forEach((message: string) => {
      messagesToAdd.push(message);
    });

    switch (optionKey) {
      case MainMessageOption.SendMessage:
        setShowContactForm(true);
        break;
      case MainMessageOption.CatFact:
        const catFact = await fetchCatFact();
        messagesToAdd.push(catFact);
        break;
      case MainMessageOption.Joke:
        const joke = await fetchJoke();
        if (joke.includes("?")) {
          const jokeParts = joke
            .split(/\?(.+)/)
            .map((part: string) => part.trim())
            .filter((part: string) => part);
          messagesToAdd.push(jokeParts[0] + "?");
          if (jokeParts[1]) {
            messagesToAdd.push(jokeParts[1]);
          }
        } else {
          messagesToAdd.push(joke);
        }
        break;
      case MainMessageOption.PlayGame:
        selectNewGame();
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
  };

  const handleFormSubmit = () => {
    setShowContactForm(false);
    addMessagesWithDelay(messages.ThanksMessage);
    setShowOptions(true);
  };

  const setLoadingTimer = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const onStartNewConversation = () => {
    setMessageLog([]);
    setLoadingTimer();
    setOptions(mainMessageOptions);
    setShowOptions(true);
    addMessagesWithDelay(messages.IntroText);
    setShowContactForm(false);
    resetGame();
  };

  return (
    <ChatContext.Provider
      value={{
        bottomRef,
        handleOptionClick,
        handleFormSubmit,
        isSunnyBotSpeaking,
        messageLog,
        options,
        showContactForm,
        showOptions,
        onStartNewConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
