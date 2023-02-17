import React from "react";
import { Button } from "@mui/material";
import { useEvent, useStore } from "effector-react";

import { CardType } from "shared/lib";
import { $selectedCard, updateSelectedCard } from "../model";

type ChoiceCardProps = {
  cardType: CardType;
  disabled?: boolean;
};
export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  cardType,
  disabled = false,
}) => {
  const chosenCard = useStore($selectedCard);
  const selectCard = useEvent(updateSelectedCard);

  const isActiveButton = chosenCard === cardType || disabled;

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
