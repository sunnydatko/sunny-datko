export const NorthWall = {
  label: "North wall",
  description: [
    "The north wall is dominated by a formidable locked door. It appears ancient, with intricate carvings",
  ],
  options: {
    InspectDoor: {
      label: "Inspect door",
      description: [
        "The door is sturdy, made of thick oak with iron reinforcements. A keyhole suggests it can be unlocked.",
      ],
    },
    UnlockDoor: {
      label: "Unlock door 🗝️",
      description: [
        "You unlock the door and push it open, only to be confronted by a towering troll boss!",
      ],
      condition: "hasKey",
      options: {
        UseAmulet: {
          label: "Use amulet 💎",
          description: [
            "Wearing the amulet, you speak to the troll boss in its tongue.",
            "Intrigued by your ability, the troll agrees to let you pass without a fight, but only if you solve its riddle.",
          ],
          condition: "hasAmulet",
        },
        UseSword: {
          label: "Use sword ⚔️",
          description: [
            "Armed with the hammer from the goblin boss, you're ready to fight.",
          ],
          condition: "hasSword",
        },
      },
    },
  },
};

export const SouthWall = {
  label: "South wall",
  description: [
    "The south wall reveals an old, dust-covered library shelf and a rusty tool set.",
  ],
  options: {
    InspectLibraryShelf: {
      label: "Inspect library shelf 📚",
      description: [
        "The shelf holds a variety of old books. One book seems particularly out of place.",
      ],
      options: {
        InspectBook: {
          label: "Inspect book 📕",
          description: [
            "It's a diary! Reading through, you find hints about the dungeon's layout and a cryptic reference to a hidden switch near the east wall.",
          ],
        },
      },
    },
    InspectToolSet: {
      label: "Inspect tool set 🛠️",
      description: [
        "Amidst the tools, you find a key! This could unlock new possibilities.",
        "You take the key, but as soon you grab it, another one appears.",
      ],
    },
  },
};

export const EastWall = {
  label: "East wall",
  description: ["The east wall appears barren."],
  options: {
    FindSwitch: {
      label: "Find Switch",
      description: [
        "You press the hidden switch. A section of the wall slides open, revealing a small alcove.",
        "Inside, you find a glowing amulet. It pulses with a soft light.",
        "Inscribed on it are ancient runes. When worn, it grants you the ability to understand and speak the language of trolls.",
      ],
      condition: "hasDiaryHint",
    },
  },
};

export const WestWall = {
  label: "West wall",
  description: ["Glowing eyes peer at you from the darkness of the west wall."],
  options: {
    InspectWall: {
      label: "Inspect wall",
      description: [
        "The creature in the shadows is a goblin boss, armed and dangerous.",
      ],
      options: {
        FightGoblin: {
          label: "Attack 🥊",
          description: [
            "The challenge the goblin boss for a fight.",
            "The goblin boss scurries away, dropping a sword.",
          ],
        },
        AvoidGoblin: {
          label: "Avoid",
          description: ["You choose to leave the goblin alone for now."],
        },
      },
    },
  },
};

export const mainOptions = {
  NorthWall: [NorthWall],
  SouthWall: [SouthWall],
  EastWall: [EastWall],
  WestWall: [WestWall],
};
