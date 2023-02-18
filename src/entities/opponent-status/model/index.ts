import { createEvent, restore } from "effector";

import { PlayerStatus } from "./types";
import { Status } from "../lib";
import { getSavedUser } from "shared/lib";

export const madeChoice = createEvent();
export const setStatus = createEvent<PlayerStatus | null>();
export const playerDisconnected = createEvent();

export const $opponentStatus = restore(setStatus, null).reset(
  playerDisconnected
);

$opponentStatus.on(madeChoice, (state) => {
  if (!state) return state;

  return {
    ...state,
    status: Status.selectedCard,
  };
});

export const onOpponentMadeChoice = () => madeChoice();

export const onPlayerDisconnected = () => playerDisconnected();

export const onGameFinished = () => {
  const opponentStatus = $opponentStatus.getState();

  if (!opponentStatus) return;

  const userWithStatus = {
    username: opponentStatus.username,
    status: Status.thinking,
  };

  setStatus(userWithStatus);
};

export const onPlayersReceived = (players: string[]) => {
  const opponentWithStatus = players.find(
    (player) => player !== getSavedUser()
  );

  if (!opponentWithStatus) return;

  const userWithStatus = {
    username: opponentWithStatus,
    status: Status.thinking,
  };

  setStatus(userWithStatus);
};
