import React, { useEffect, useLayoutEffect } from "react";
import { useStore } from "effector-react";
import { Box } from "@mui/material";

import { playerDisconnected, playersReceived, SocketAPI } from "shared/api";
import { CardType } from "shared/lib";
import { GameCard } from "entities/game-card";
import { ChoiceCard } from "features/choice-card";
import { StatusInfo } from "entities/opponent-status";
import { Score } from "entities/score";
import { userModel } from "entities/user";
import { getAllPlayers } from "./api";
import { $players, onPlayerDisconnected, onPlayersUpdated } from "./model";

const GamePage = () => {
  const players = useStore($players);
  const username = useStore(userModel.$username);

  useLayoutEffect(() => {
    if (username) {
      SocketAPI.start(username);
    }
    return () => SocketAPI.stop();
  }, [username]);

  useEffect(() => {
    const subscribers = [
      playersReceived(onPlayersUpdated),
      playerDisconnected(onPlayerDisconnected),
    ];
    getAllPlayers();

    return () => {
      subscribers.forEach((subscriber) => subscriber?.close());
    };
  }, []);

  const isChoiceDisabled = players.length <= 1;

  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Score />
        <Box display="flex" gap={10}>
          <GameCard
            cardType={CardType.Scissors}
            title={"Scissors"}
            bottomContent={
              <ChoiceCard
                cardType={CardType.Scissors}
                disabled={isChoiceDisabled}
              />
            }
          />
          <GameCard
            cardType={CardType.Paper}
            title={"Paper"}
            bottomContent={
              <ChoiceCard
                cardType={CardType.Paper}
                disabled={isChoiceDisabled}
              />
            }
          />
          <GameCard
            cardType={CardType.Rock}
            title={"Rock"}
            bottomContent={
              <ChoiceCard
                cardType={CardType.Rock}
                disabled={isChoiceDisabled}
              />
            }
          />
        </Box>
        <StatusInfo />
      </Box>
    </>
  );
};

export default GamePage;
