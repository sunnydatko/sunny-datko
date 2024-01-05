import { useState } from "react";

const useTheDungeonsRiddle = () => {
  // Example state variables

  const [hasAmulet, setHasAmulet] = useState(false);
  const [hasSword, setHasSword] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  const startNewGame = () => {
    console.log("starting new game");
  };

  // Placeholder function to fetch a new riddle
  const fetchNewRiddle = () => {
    // Logic to fetch a new riddle
  };

  // Placeholder function to submit an answer
  const submitAnswer = (userAnswer) => {
    // Logic to submit the answer
  };

  // Placeholder function to check if the answer is correct
  const checkAnswer = () => {
    // Logic to check if the answer is correct
  };

  // You can add more functionalities as needed

  return {
    startNewGame,
    fetchNewRiddle,
    submitAnswer,
    checkAnswer,
  };
};

export default useTheDungeonsRiddle;
