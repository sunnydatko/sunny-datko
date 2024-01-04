export const messages = {
  IntroText: [
    "Hey there! 👋 I'm SunnyBot, your virtual guide.",
    "What can I help you with today?",
  ],
  TellMeAboutYourself: [
    "Curious about me? Let's dive in.",
    "I’ve spent over 10 years in the tech industry, focusing on high-quality, user-friendly applications.",
    "My expertise? React and Material UI to craft intuitive interfaces.",
    "Drop me a line if you want to learn more!",
  ],
  AnyHobbies: [
    "As for hobbies...",
    "Outside of work, I enjoy reading, spending quality time with my family, and practicing yoga for well-being.",
  ],
  SendMessage: [
    "Great! Just type your message below.",
    "I look forward to hearing from you.",
  ],
  ThanksMessage: ["Thanks for the message.", "I'll get back to you soon!"],
  CatFact: ["Curious about cats, huh?", "Let me fetch a cat fact for you..."],
  DadJoke: ["Switching gears to a bit of humor!", "Here's a dad joke for you."],
  PlayGame: [
    "Brace yourself for 'The Dungeon's Riddle'!",
    "You're trapped in a dungeon and need to find your way out.",
    "Which wall will you explore first?",
  ],
};

export enum MessageSource {
  USER = "user",
  SUNNYBOT = "sunnybot",
}

export enum MessageOption {
  TellMeAboutYourself = "TellMeAboutYourself",
  AnyHobbies = "AnyHobbies",
  CatFact = "CatFact",
  DadJoke = "DadJoke",
  SendMessage = "SendMessage",
}

export const messageOptions = {
  [MessageOption.TellMeAboutYourself]: ["Tell me about yourself 💬"],
  [MessageOption.AnyHobbies]: ["Any hobbies? 🏕️"],
  [MessageOption.CatFact]: ["Cat fact 🐈"],
  [MessageOption.DadJoke]: ["Dad joke 😜"],
  [MessageOption.SendMessage]: ["Send a message 📧"],
  // [MessageOption.PlayGame]: ["Play a game 🎮"],
};
