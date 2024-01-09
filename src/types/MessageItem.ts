import { MessageSource } from "../helpers/messages";

type MessageItem = {
  isLoading?: boolean;
  message: string;
  user: MessageSource;
};

export default MessageItem;
