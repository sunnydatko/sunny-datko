import { Dispatch, SetStateAction, useState } from "react";

import {
  GameOption,
  gameOptions,
  NewGameOptions,
} from "../helpers/dungeons-riddle";
import { MessageSource } from "../helpers/messages";
import MessageItem from "../types/MessageItem";
import { MessageOptions } from "../types/MessageOption";

const rollDice = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

type useGameOptionsProps = {
  setMessageLog: Dispatch<SetStateAction<MessageItem[]>>;
  setOptions: Dispatch<SetStateAction<MessageOptions>>;
  setShowOptions: (option: boolean) => void;
  addMessagesWithDelay: (
    messagesToAdd: string[],
    showFireworks?: boolean
  ) => void;
};

export const useGameOptions = ({
  setMessageLog,
  setOptions,
  setShowOptions,
  addMessagesWithDelay,
}: useGameOptionsProps) => {
  // game state
  const [hasAmulet, setHasAmulet] = useState(false);
  const [hasSword, setHasSword] = useState(false);
  const [hasDiaryHint, setHasDiaryHint] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  const resetGame = () => {
    setHasDiaryHint(false);
    setHasAmulet(false);
    setHasKey(false);
    setHasSword(false);
  };

  const handleGameOptionClick = (optionKey: GameOption) => {
    setShowOptions(false);
    // Add user input to log
    setMessageLog((prevLog) => [
      ...prevLog,
      {
        message: gameOptions[optionKey],
        user: MessageSource.USER,
      },
    ]);

    switch (optionKey) {
      case GameOption.DungeonsRiddle:
      case GameOption.StartNewGame: {
        addMessagesWithDelay([
          "Welcome to the Dungeon's Riddle!",
          "Trapped in an ancient, mysterious dungeon, you must use your wits to escape.",
          "Which mysterious wall will you investigate first?",
        ]);
        setOptions(NewGameOptions);
        resetGame();
        break;
      }
      case GameOption.GoBackToCenter: {
        if (hasAmulet) {
          addMessagesWithDelay([
            "Returning to the dungeon's core, a subtle change is palpable.",
            "The walls, steeped in ancient lore, seem to whisper their secrets.",
            "Which direction will you choose now?",
          ]);
        } else if (hasKey || hasDiaryHint) {
          addMessagesWithDelay([
            "Once again in the dungeon's heart, you feel the silent hum of the walls.",
            "The echoes of the past grow more insistent.",
            "Where to next?",
          ]);
        } else {
          addMessagesWithDelay([
            "Back in the center of the room, the dungeon seems to respond to your discoveries.",
            "The walls echo with forgotten whispers.",
            "Which path will you take now?",
          ]);
        }
        setOptions(NewGameOptions);
        break;
      }
      case GameOption.NorthWall: {
        addMessagesWithDelay([
          "The North Wall is dominated by a massive, locked door.",
          "Intricate carvings, relics of a bygone era, adorn its surface.",
        ]);
        const options = {
          [GameOption.InspectDoor]: {
            label: gameOptions[GameOption.InspectDoor],
          },
          ...(hasKey
            ? {
                [GameOption.UnlockDoor]: {
                  label: gameOptions[GameOption.UnlockDoor],
                  color: "secondary" as "secondary",
                },
              }
            : null),
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.SouthWall: {
        addMessagesWithDelay([
          "As you approach the South Wall, you notice an old, dust-covered library shelf and a rusty tool set.",
          "The musty aroma of paper and metal permeates the air.",
          "What's your next move?",
        ]);
        const options = {
          [GameOption.InspectShelf]: {
            label: gameOptions[GameOption.InspectShelf],
          },
          [GameOption.InspectToolSet]: {
            label: gameOptions[GameOption.InspectToolSet],
          },
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.InspectEastWall: {
        if (hasAmulet) {
          addMessagesWithDelay([
            "Re-examining the East Wall, you find no new secrets.",
            "The alcove, which once concealed the amulet, lies open and empty, a remnant of a mystery now solved.",
          ]);
          const options = {
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
          break;
        }

        if (hasDiaryHint) {
          addMessagesWithDelay([
            "With the diary's riddle guiding you, you meticulously search the wall.",
            "Suddenly, your fingers uncover a masterfully hidden switch.",
          ]);
          const options = {
            [GameOption.ActivateSwitch]: {
              label: gameOptions[GameOption.ActivateSwitch],
            },
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
          setHasAmulet(true);
          break;
        }

        addMessagesWithDelay([
          "Your fingers trace the East Wall's cold, unyielding surface, searching for hidden clues, but it remains impassive, guarding its secrets well.",
        ]);
        const options = {
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.EastWall: {
        if (hasAmulet) {
          addMessagesWithDelay([
            "The East Wall, once a holder of secrets, now stands unassuming and quiet.",
            "Memories of the diary's riddle linger, but its purpose is fulfilled.",
          ]);
        } else if (hasDiaryHint) {
          addMessagesWithDelay([
            "The East Wall, deceptively barren, hides more than it reveals.",
            "The diary's riddle lingers in your mind, prompting a deeper inspection.",
          ]);
        } else {
          addMessagesWithDelay(["The East Wall stands stark and unadorned."]);
        }

        const options = {
          [GameOption.InspectEastWall]: {
            label: gameOptions[GameOption.InspectEastWall],
          },
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.ActivateSwitch: {
        addMessagesWithDelay([
          "As you activate the switch, a part of the wall retracts, uncovering an alcove.",
          "Inside, you find an amulet, glowing softly with runes that now grant you the power to communicate with trolls.",
        ]);
        const options = {
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.WestWall: {
        if (hasSword) {
          addMessagesWithDelay([
            "As you revisit the West Wall, remnants of the battle with the goblin boss linger.",
            "Now peaceful, the wall reveals no secrets, standing as a silent testament to your victory.",
          ]);
          const options = {
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
        } else {
          addMessagesWithDelay([
            "Approaching the West Wall, a pair of gleaming eyes pierces the gloom.",
            "Emerging from the shadows is a formidable goblin boss, its weapon drawn, exuding menace.",
          ]);
          const options = {
            [GameOption.AttackGoblin]: {
              label: gameOptions[GameOption.AttackGoblin],
            },
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
        }

        break;
      }
      case GameOption.InspectDoor: {
        addMessagesWithDelay([
          "The door, a blend of solid oak and iron, stands as a silent guardian.",
          "A small, ornate keyhole suggests a secret waiting to be unlocked.",
        ]);
        const options = {
          ...(hasKey
            ? {
                [GameOption.UnlockDoor]: {
                  label: gameOptions[GameOption.UnlockDoor],
                  color: "secondary" as "secondary",
                },
              }
            : null),
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.UnlockDoor: {
        addMessagesWithDelay([
          "Inserting the key into the lock, you hear a satisfying click.",
          "The door creaks open, only to reveal a towering troll on the other side, eyes glinting in the dim light.",
        ]);
        const options = {
          ...(hasAmulet
            ? {
                [GameOption.UseAmulet]: {
                  label: gameOptions[GameOption.UseAmulet],
                  color: "secondary" as "secondary",
                },
              }
            : null),
          [GameOption.AttackTroll]: {
            label: gameOptions[GameOption.AttackTroll],
          },
          [GameOption.RunAway]: { label: gameOptions[GameOption.RunAway] },
        };
        setOptions(options);
        break;
      }
      case GameOption.RunAway: {
        addMessagesWithDelay([
          "You attempt to run away from the troll boss, but it swiftly closes in.",
          "To successfully escape, roll a six-sided die.",
          "You'll need a 5 or higher.",
        ]);
        const options = {
          [GameOption.RunAwayRoll]: {
            label: gameOptions[GameOption.RunAwayRoll],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.RunAwayRoll: {
        const roll = rollDice();

        if (roll >= 5) {
          addMessagesWithDelay([
            `You rolled at ${roll}.`,
            "With a burst of speed, you manage to outpace the troll boss, leaving it far behind.",
            "You escape to safety, breathing heavily but victorious.",
            "Well done, adventurer!",
          ]);
        } else {
          addMessagesWithDelay([
            `You rolled at ${roll}.`,
            "Despite your best efforts, the troll boss catches up to you and delivers a devastating blow with its club.",
            "Darkness engulfs your vision, marking the end of your adventure.",
          ]);
        }

        const options = {
          [GameOption.StartNewGame]: {
            label: gameOptions[GameOption.StartNewGame],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.UseAmulet: {
        addMessagesWithDelay([
          "Holding the amulet, you feel its ancient power.",
          "You speak the incantation, and the troll, intrigued by your newfound ability, proposes a challenge instead of combat.",
        ]);
        const options = {
          [GameOption.AnswerRiddle]: {
            label: gameOptions[GameOption.AnswerRiddle],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.AttackTroll: {
        if (hasSword) {
          addMessagesWithDelay([
            "Gripping the hilt of your sword tightly, you prepare to confront the menacing troll.",
            "You must roll a 4 or higher to defeat him, adding your sword's bonus of +2 to the roll.",
            "Roll to determine your fate.",
          ]);
        } else {
          addMessagesWithDelay([
            "Faced with the towering troll, you realize you're without a sword or traditional weapon.",
            "You must roll a 5 or higher to defeat him.",
            "Roll to determine your fate.",
          ]);
        }
        const options = {
          [GameOption.RollAgainstTroll]: {
            label: gameOptions[GameOption.RollAgainstTroll],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.AttackGoblin: {
        addMessagesWithDelay([
          "Bracing yourself, you confront the goblin boss.",
          "You must roll a 2 or higher to defeat him.",
          "Roll to determine your fate.",
        ]);
        const options = {
          [GameOption.RollAgainstGoblin]: {
            label: gameOptions[GameOption.RollAgainstGoblin],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.RollAgainstGoblin: {
        const roll = rollDice();

        if (roll >= 2) {
          // success
          addMessagesWithDelay([
            `You rolled a ${roll}.`,
            "Your successful attack against the goblin boss forces him to retreat in defeat, dropping his sword in the process, which you now acquire.",
          ]);

          const options = {
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
          setHasSword(true);
        } else {
          // fail
          addMessagesWithDelay([
            `Alas, you rolled a ${roll}.`,
            "The goblin boss overpowers you.",
            "This quest ends here, but your story remains unfinished, awaiting the next adventure.",
          ]);
          const options = {
            [GameOption.StartNewGame]: {
              label: gameOptions[GameOption.StartNewGame],
            },
          };
          setOptions(options);
        }
        break;
      }
      case GameOption.RollAgainstTroll: {
        const roll = rollDice();

        if (hasSword) {
          if (roll + 2 >= 4) {
            // success
            addMessagesWithDelay(
              [
                `You rolled a ${roll + 2}.`,
                "With a surge of bravery, your sword arcs through the air, striking the troll with a decisive blow that echoes through the dungeon, sealing your hard-earned victory.",
                "Freedom awaits as you emerge into the light, triumphant.",
                "Dungeon conquered. Well done, adventurer!",
              ],
              true
            );
          } else {
            // fail
            addMessagesWithDelay([
              `Alas, you rolled a ${roll + 2}.`,
              "In a bold strike, you attack, but the troll swiftly overpowers you.",
              "Darkness descends, and your journey ends, the troll too mighty this time.",
              "May fortune smile upon you in your next adventure.",
            ]);
          }
        } else {
          if (roll >= 5) {
            // success
            addMessagesWithDelay(
              [
                `You rolled a ${roll}.`,
                "Outwitting the troll with agility, you dash past its grasp.",
                "Breathless and triumphant, you escape the dungeon's depths.",
                "Your tale of bravery echoes as a testament to survival.",
              ],
              true
            );
          } else {
            // fail
            addMessagesWithDelay([
              `Alas, you rolled a ${roll}.`,
              "Unarmed, you try to evade the troll, but it's too swift, too strong.",
              "Cornered, your valiant effort ends as the troll closes in.",
              "A new journey awaits beyond this defeat.",
            ]);
          }
        }
        const options = {
          [GameOption.StartNewGame]: {
            label: gameOptions[GameOption.StartNewGame],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.AnswerRiddle: {
        addMessagesWithDelay([
          "The troll regards you thoughtfully and rumbles deeply,",
          "Solve this riddle to pass: I am not alive, yet I grow. Without lungs, I need air. Lacking a mouth, yet water is my bane. What am I?",
        ]);
        const options = {
          [GameOption.AnswerIce]: {
            label: gameOptions[GameOption.AnswerIce],
          },
          [GameOption.AnswerFire]: {
            label: gameOptions[GameOption.AnswerFire],
          },
          [GameOption.AnswerShadow]: {
            label: gameOptions[GameOption.AnswerShadow],
          },
          [GameOption.AnswerTree]: {
            label: gameOptions[GameOption.AnswerTree],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.AnswerFire: {
        addMessagesWithDelay(
          [
            "The troll nods in respect, a deep rumble of approval echoing in the chamber,",
            "'Correct, Fire 🔥. The way is clear.'",
            "Triumphantly, you step out of the dungeon, a victor of wits.",
            "Well done, adventurer!",
          ],
          true
        );

        const options = {
          [GameOption.StartNewGame]: {
            label: gameOptions[GameOption.StartNewGame],
          },
        };
        setOptions(options);
        break;
      }

      case GameOption.AnswerIce:
      case GameOption.AnswerShadow:
      case GameOption.AnswerShadow: {
        addMessagesWithDelay([
          "The troll bellows in laughter.",
          "Wrong! Prepare for battle!'",
          "The fight with the troll boss begins.",
        ]);
        const options = {
          [GameOption.AttackTroll]: {
            label: gameOptions[GameOption.AttackTroll],
          },
        };
        setOptions(options);
        break;
      }
      case GameOption.InspectShelf: {
        if (hasDiaryHint) {
          addMessagesWithDelay([
            "A second glance at the shelf offers nothing new.",
            "The books remain silent guardians of their long-forgotten knowledge.",
          ]);
          const options = {
            [GameOption.InspectToolSet]: {
              label: gameOptions[GameOption.InspectToolSet],
            },
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
        } else {
          addMessagesWithDelay([
            "As your hands dance over the aged book spines, a diary, worn and whispering tales of old, calls to you.",
            "Will you delve into its secrets?",
          ]);
          const options = {
            [GameOption.ReadBook]: {
              label: gameOptions[GameOption.ReadBook],
            },
            [GameOption.GoBackToCenter]: {
              label: gameOptions[GameOption.GoBackToCenter],
            },
          };
          setOptions(options);
        }
        break;
      }
      case GameOption.ReadBook: {
        addMessagesWithDelay([
          "The diary whisks you away into the narratives of adventurers past.",
          "A line stands out, hinting at a mystery: 'Beside the East Wall, a hidden switch conceals a clandestine treasure.'",
        ]);
        const options = {
          [GameOption.InspectToolSet]: {
            label: gameOptions[GameOption.InspectToolSet],
          },
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        setHasDiaryHint(true);
        break;
      }
      case GameOption.InspectToolSet: {
        if (hasKey) {
          addMessagesWithDelay([
            "The tools, though steeped in age, offer no further secrets.",
            "Their once-useful forms now lay dormant and decayed.",
          ]);
        } else {
          addMessagesWithDelay([
            "Tucked amidst the tools, a key with a faint gleam of promise captures your attention.",
            "You tuck it away, wondering what secrets it might unlock.",
          ]);
          setHasKey(true);
        }
        const options = {
          [GameOption.InspectShelf]: {
            label: gameOptions[GameOption.InspectShelf],
          },
          [GameOption.GoBackToCenter]: {
            label: gameOptions[GameOption.GoBackToCenter],
          },
        };
        setOptions(options);
        break;
      }
    }
  };

  return { handleGameOptionClick, resetGame };
};
