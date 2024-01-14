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
  Joke: ["Switching gears to a bit of humor!", "Here's a joke for you."],
  PlayGame: null,
};

export enum MainMessageOption {
  TellMeAboutYourself = "TellMeAboutYourself",
  AnyHobbies = "AnyHobbies",
  CatFact = "CatFact",
  Joke = "Joke",
  PlayGame = "PlayGame",
  SendMessage = "SendMessage",
}

export const mainMessageOptions = {
  [MainMessageOption.TellMeAboutYourself]: {
    label: "Tell me about yourself 💬",
  },
  [MainMessageOption.AnyHobbies]: { label: "Any hobbies? 🏕️" },
  [MainMessageOption.CatFact]: { label: "Cat fact 🐈" },
  [MainMessageOption.Joke]: { label: "Joke 😜" },
  [MainMessageOption.PlayGame]: { label: "Play a game 🎮" },
  [MainMessageOption.SendMessage]: { label: "Send a message 📧" },
};

export enum MessageSource {
  USER = "user",
  SUNNYBOT = "sunnybot",
}
