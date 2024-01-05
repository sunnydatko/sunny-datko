import { MessageSource } from "../helpers/messages";

type MessageItem = {
  isLoading?: boolean;
  user: MessageSource;
  message: string[];
};

export default MessageItem;
