import { createEvent, createStore } from "effector";

import { CardType } from "shared/api";
import { selectCard } from "../api";

export const updateSelectedCard = createEvent<CardType>();
const resetSelectedCard = createEvent();

export const onGameFinished = () => {
  resetSelectedCard();
};

export const $selectedCard = createStore<CardType | null>(null)
  .on(updateSelectedCard, (_, card) => {
    selectCard(card);
    return card;
  })
  .reset(resetSelectedCard);
