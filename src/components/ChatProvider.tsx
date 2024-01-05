import { useEffect, useRef, useState } from "react";

import ChatContext from "./ChatContext";

import { fetchCatFact, fetchDadJoke } from "../helpers/chat-helpers";
import {
  messages,
  MessageSource,
  messageOptions,
  MessageOption,
} from "../helpers/messages";
import MessageItem from "../types/MessageItem";

type ChatProviderProps = {
  children: React.ReactNode;
};

const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messageLog, setMessageLog] = useState<MessageItem[]>([]);
  const [options, setOptions] = useState({});
  const [showOptions, setShowOptions] = useState(true);
  const [isSunnyBotSpeaking, setIsSunnyBotSpeaking] = useState(false);
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const bottomRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of window when new messages appear
    const current = bottomRef.current as HTMLDivElement | null;
    if (current) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageLog]);

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

  const handleOptionClick = async ({
    optionKey,
  }: {
    optionKey: MessageOption;
  }) => {
    if (isPlayingGame) {
      return;
    }

    if (optionKey === MessageOption.PlayGame) {
      // Initialize game
      setIsPlayingGame(true);
      //  startNewGame();

      return;
    }

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

  const startNewConversation = () => {
    setLoadingTimer();
    setOptions(messageOptions);
    addMessagesWithDelay(messages.IntroText);
  };

  const onRestartConversation = () => {
    setMessageLog([]);
    setShowContactForm(false);
    startNewConversation();
    setShowOptions(true);
  };

  return (
    <ChatContext.Provider
      value={{
        addMessagesWithDelay,
        bottomRef,
        handleOptionClick,
        handleFormSubmit,
        isSunnyBotSpeaking,
        messageLog,
        onRestartConversation,
        options,
        setMessageLog,
        // setOptions,
        showContactForm,
        setShowContactForm,
        showOptions,
        startNewConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
