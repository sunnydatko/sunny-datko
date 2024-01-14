import React from "react";

import { MessageOptions } from "../types/MessageOption";
import MessageItem from "../types/MessageItem";
import { MainMessageOption } from "../helpers/messages";

type ChatContextType = {
  bottomRef: React.RefObject<HTMLDivElement>;
  handleFormSubmit: () => void;
  handleOptionClick: ({ optionKey }: { optionKey: MainMessageOption }) => void;
  isSunnyBotSpeaking: boolean;
  messageLog: MessageItem[];
  onRestartConversation: () => void;
  onStartNewConversation: () => void;
  options: MessageOptions;
  showContactForm: boolean;
  showOptions: boolean;
};

const ChatContext = React.createContext<ChatContextType>({
  bottomRef: React.createRef<HTMLDivElement>(),
  handleFormSubmit: () => {},
  handleOptionClick: () => {},
  isSunnyBotSpeaking: false,
  messageLog: [],
  onRestartConversation: () => {},
  onStartNewConversation: () => {},
  options: {},
  showContactForm: false,
  showOptions: true,
});

export default ChatContext;
