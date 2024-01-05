import React from "react";

import { MessageOption } from "../helpers/messages";
import MessageItem from "../types/MessageItem";

const ChatContext = React.createContext({
  addMessagesWithDelay: (messagesToAdd: string[]) => {},
  bottomRef: { current: null } as React.RefObject<HTMLDivElement>,
  handleFormSubmit: () => {},
  handleOptionClick: ({ optionKey }: { optionKey: MessageOption }) => {},
  isSunnyBotSpeaking: false,
  messageLog: [] as MessageItem[],
  onRestartConversation: () => {},
  options: {},
  setMessageLog: (messageItem: MessageItem[]) => {},
  // setShowOptions: (showOption: boolean) => {},
  setShowContactForm: (showForm: boolean) => {},
  showContactForm: false,
  showOptions: true,
  startNewConversation: () => {},
});

export default ChatContext;
