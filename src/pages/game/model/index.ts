import { createEvent, restore } from "effector";

const playersUpdated = createEvent<string[]>();
const playerDisconnected = createEvent();

export const $players = restore<string[]>(playersUpdated, []).reset(
  playerDisconnected
);

export const onPlayersUpdated = (players: string[]) => playersUpdated(players);

export const onPlayerDisconnected = () => playerDisconnected();
