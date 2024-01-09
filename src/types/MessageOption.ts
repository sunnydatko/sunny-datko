export type MessageOption = {
  label: string;
  disabled?: boolean;
  color?: "default" | "primary" | "secondary";
};

export type MessageOptions = {
  [key: string]: MessageOption;
};
