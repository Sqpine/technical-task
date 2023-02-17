import React from "react";
import { useStore } from "effector-react";
import { Box } from "@mui/material";

import {
  CardType,
  playerDisconnected,
  playersReceived,
  SocketAPI,
} from "shared/api";
import { GameCard } from "entities/game-card";
import { ChoiceCard } from "features/choice-card";
import { StatusInfo } from "entities/opponent-status";
import { Score } from "entities/score";
import { User, userModel } from "entities/user";
import { getAllPlayers } from "./api";
import { $players, onPlayerDisconnected, onPlayersUpdated } from "./model";

const GamePage: React.FC = () => {
  const players = useStore($players);
  const username = useStore(userModel.$username);

  React.useLayoutEffect(() => {
    if (username) {
      SocketAPI.start(username);
    }
    return () => SocketAPI.stop();
  }, [username]);

  React.useEffect(() => {
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
        <User />
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
