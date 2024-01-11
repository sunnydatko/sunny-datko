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
  PlayGame: null,
};

export enum MainMessageOption {
  TellMeAboutYourself = "TellMeAboutYourself",
  AnyHobbies = "AnyHobbies",
  CatFact = "CatFact",
  DadJoke = "DadJoke",
  PlayGame = "PlayGame",
  SendMessage = "SendMessage",
}

export const mainMessageOptions = {
  [MainMessageOption.TellMeAboutYourself]: {
    label: "Tell me about yourself 💬",
  },
  [MainMessageOption.AnyHobbies]: { label: "Any hobbies? 🏕️" },
  [MainMessageOption.CatFact]: { label: "Cat fact 🐈" },
  [MainMessageOption.DadJoke]: { label: "Dad joke 😜" },
  [MainMessageOption.PlayGame]: { label: "Play a game 🎮" },
  [MainMessageOption.SendMessage]: { label: "Send a message 📧" },
};

export enum GameOption {
  DungeonsRiddle = "DungeonsRiddle",
  HauntedMansion = "HauntedMansion",
  NorthWall = "NorthWall",
  SouthWall = "SouthWall",
  WestWall = "WestWall",
  EastWall = "EastWall",
  InspectDoor = "InspectDoor",
  UnlockDoor = "UnlockDoor",
  UseAmulet = "UseAmulet",
  InspectShelf = "InspectShelf",
  ReadBook = "ReadBook",
  InspectToolSet = "InspectToolSet",
  AttackGoblin = "AttackGoblin",
  AttackTroll = "AttackTroll",
  ActivateSwitch = "ActivateSwitch",
  AnswerRiddle = "AnswerRiddle",
  AnswerIce = "AnswerIce",
  AnswerFire = "AnswerFire",
  AnswerShadow = "AnswerShadow",
  AnswerTree = "AnswerTree",
  RunAway = "RunAway",
  GoBackToCenter = "GoBackToCenter",
  RollAgainstTroll = "RollAgainstTroll",
  RollAgainstGoblin = "RollAgainstGoblin",
  StartNewGame = "StartNewGame",
  InspectEastWall = "InspectEastWall",
  RunAwayRoll = "RunAwayRoll",
}

export const gameOptions = {
  [GameOption.DungeonsRiddle]: "The Dungeon's Riddle 🏰",
  [GameOption.HauntedMansion]: "Haunted Mansion",
  [GameOption.NorthWall]: "North Wall ⬆️",
  [GameOption.SouthWall]: "South Wall ⬇️",
  [GameOption.WestWall]: "West Wall ⬅️",
  [GameOption.EastWall]: "East Wall ➡️",
  [GameOption.InspectDoor]: "Inspect Door 🔍",
  [GameOption.UnlockDoor]: "Unlock Door 🗝️",
  [GameOption.UseAmulet]: "Use Amulet 📿",
  [GameOption.InspectShelf]: "Inspect Shelf 📚",
  [GameOption.ReadBook]: "Read Diary 📕",
  [GameOption.InspectToolSet]: "Inspect Tool Set ⚒️",
  [GameOption.AttackGoblin]: "Attack Goblin 👊",
  [GameOption.AttackTroll]: "Attack Troll 👊",
  [GameOption.ActivateSwitch]: "Activate Switch 🕹",
  [GameOption.AnswerRiddle]: "Solve Riddle ❓",
  [GameOption.RunAway]: "Run Away",
  [GameOption.GoBackToCenter]: "Go Back To Center",
  [GameOption.RollAgainstTroll]: "Roll Dice 🎲",
  [GameOption.RollAgainstGoblin]: "Roll Dice 🎲",
  [GameOption.StartNewGame]: "Play Again",
  [GameOption.InspectEastWall]: "Inspect Wall 🔍",
  [GameOption.AnswerFire]: "Fire 🔥",
  [GameOption.AnswerTree]: "Tree 🌲",
  [GameOption.AnswerShadow]: "Shadow 👥",
  [GameOption.AnswerIce]: "Ice 🧊",
  [GameOption.RunAwayRoll]: "Roll Dice 🎲",
};

export enum MessageSource {
  USER = "user",
  SUNNYBOT = "sunnybot",
}
