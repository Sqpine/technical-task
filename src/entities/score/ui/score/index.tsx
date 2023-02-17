import React from "react";
import { useStore } from "effector-react";
import { Box, Typography } from "@mui/material";

import { $score, onGameFinished, onPlayerLeft } from "../../model";
import { gameFinished, playerDisconnected } from "shared/api";

export const Score: React.FC = () => {
  const { win, lose, tie } = useStore($score);

  React.useEffect(() => {
    const subscribers = [
      playerDisconnected(onPlayerLeft),
      gameFinished(onGameFinished),
    ];
    return () => {
      subscribers.forEach((subscriber) => subscriber?.close());
    };
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography textAlign="center" variant="h3">
        Score
      </Typography>
      <Typography>
        Win: {win}; Lose: {lose}; Tie {tie};
      </Typography>
    </Box>
  );
};
