import React from "react";

import { MessageOptions } from "../types/MessageOption";
import MessageItem from "../types/MessageItem";
import { MainMessageOption } from "../helpers/messages";

type ChatContextType = {
  addMessagesWithDelay: (messagesToAdd: string[]) => void;
  bottomRef: React.RefObject<HTMLDivElement>;
  handleFormSubmit: () => void;
  handleOptionClick: ({ optionKey }: { optionKey: MainMessageOption }) => void;
  isSunnyBotSpeaking: boolean;
  messageLog: MessageItem[];
  onRestartConversation: () => void;
  onStartNewConversation: () => void;
  options: MessageOptions;
  setMessageLog: (messageItem: MessageItem[]) => void;
  setShowContactForm: (showForm: boolean) => void;
  showContactForm: boolean;
  showOptions: boolean;
};

const ChatContext = React.createContext<ChatContextType>({
  addMessagesWithDelay: () => {},
  bottomRef: React.createRef<HTMLDivElement>(),
  handleFormSubmit: () => {},
  handleOptionClick: () => {},
  isSunnyBotSpeaking: false,
  messageLog: [],
  onRestartConversation: () => {},
  onStartNewConversation: () => {},
  options: {},
  setMessageLog: () => {},
  setShowContactForm: () => {},
  showContactForm: false,
  showOptions: true,
});

export default ChatContext;
