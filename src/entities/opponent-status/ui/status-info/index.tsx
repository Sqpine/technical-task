import React from "react";
import { Box, Typography } from "@mui/material";
import { useStore } from "effector-react";

import { gameFinished, playerDisconnected, playersReceived } from "shared/api";
import { opponentMadeChoice } from "../../api";
import {
  $opponentStatus,
  onGameFinished,
  onOpponentMadeChoice,
  onPlayerDisconnected,
  onPlayersReceived,
} from "../../model";
import { EmptyStatus } from "../empty-status";
import { StatusItem } from "../status-item";

export const StatusInfo: React.FC = () => {
  const opponentStatus = useStore($opponentStatus);

  React.useEffect(() => {
    const subscribers = [
      playersReceived(onPlayersReceived),
      opponentMadeChoice(onOpponentMadeChoice),
      playerDisconnected(onPlayerDisconnected),
      gameFinished(onGameFinished),
    ];

    return () => {
      subscribers.forEach((subscriber) => subscriber?.close());
    };
  }, []);

  const status = React.useMemo(() => {
    if (opponentStatus)
      return (
        <StatusItem
          status={opponentStatus.status}
          username={opponentStatus.username}
        />
      );
    return <EmptyStatus />;
  }, [opponentStatus]);

  return (
    <Box>
      <Typography variant="subtitle2" textAlign="center">
        Player statuses
      </Typography>
      <Box display="flex" gap={5}>
        {status}
      </Box>
    </Box>
  );
};
