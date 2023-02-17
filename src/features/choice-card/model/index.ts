import { createEvent, createStore } from "effector";

import { CardType } from "shared/lib";
import { selectCard } from "../api";

export const updateSelectedCard = createEvent<CardType>();

export const $selectedCard = createStore<CardType | null>(null).on(
  updateSelectedCard,
  (_, card) => {
    selectCard(card);
    return card;
  }
);
