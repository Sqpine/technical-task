import { createApi, createEvent, createStore } from "effector";

import { Score, ScoreApi } from "./types";
import { GameFinished } from "shared/api";
import { CardType, getSavedUser } from "shared/lib";

const playerLeft = createEvent();

export const $score = createStore({
  lose: 0,
  win: 0,
  tie: 0,
}).reset(playerLeft);

export const scoreApi = createApi<Score, ScoreApi>($score, {
  win: (score) => ({ ...score, win: score.win + 1 }),
  lose: (score) => ({ ...score, lose: score.lose + 1 }),
  tie: (score) => ({ ...score, tie: score.tie + 1 }),
});

export const onPlayerLeft = () => playerLeft();

export const onGameFinished = ({ results }: GameFinished) => {
  const player = results.find(({ username }) => username === getSavedUser());
  const opponent = results.find(({ username }) => username !== getSavedUser());

  if (!player || !opponent) return;

  if (player.choice === opponent.choice) scoreApi.tie();

  if (player.choice === CardType.Rock && opponent.choice === CardType.Scissors)
    scoreApi.win();

  if (player.choice === CardType.Scissors && opponent.choice === CardType.Paper)
    scoreApi.win();

  if (player.choice === CardType.Paper && opponent.choice === CardType.Rock)
    scoreApi.win();

  if (player.choice === CardType.Scissors && opponent.choice === CardType.Rock)
    scoreApi.lose();

  if (player.choice === CardType.Paper && opponent.choice === CardType.Scissors)
    scoreApi.lose();

  if (player.choice === CardType.Rock && opponent.choice === CardType.Paper)
    scoreApi.lose();
};
