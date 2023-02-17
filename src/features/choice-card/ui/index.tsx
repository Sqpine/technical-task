import React from "react";
import { Button } from "@mui/material";
import { useEvent, useStore } from "effector-react";

import { $selectedCard, onGameFinished, updateSelectedCard } from "../model";
import { ChoiceCardProps } from "./types";
import { gameFinished } from "shared/api";

export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  cardType,
  disabled = false,
}) => {
  const chosenCard = useStore($selectedCard);
  const selectCard = useEvent(updateSelectedCard);

  const isActiveButton = chosenCard === cardType || disabled;

  React.useEffect(() => {
    const subscribers = [gameFinished(onGameFinished)];
    return () => {
      subscribers.forEach((subscriber) => subscriber?.close());
    };
  }, []);

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        onClick={() => selectCard(cardType)}
        disabled={isActiveButton}
      >
        Make a choice
      </Button>
    </>
  );
};
