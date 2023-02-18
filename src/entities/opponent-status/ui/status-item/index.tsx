import React from "react";
import { Box, Typography } from "@mui/material";

import { StatusRowProps } from "./types";

export const StatusItem: React.FC<StatusRowProps> = ({ username, status }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Username: {username}</Typography>
      <Typography variant="subtitle1">Status: {status}</Typography>
    </Box>
  );
};
