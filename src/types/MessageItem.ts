import { MessageSource } from "../helpers/messages";

type MessageItem = {
  isLoading?: boolean;
  message: string;
  showFireworks?: boolean;
  user: MessageSource;
};

export default MessageItem;
