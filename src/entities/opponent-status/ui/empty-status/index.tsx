import React from "react";
import { Box, Typography } from "@mui/material";

export const EmptyStatus: React.FC = () => {
  return (
    <Box>
      <Typography variant="subtitle1">Need second player!</Typography>
      <Typography variant="subtitle2">Please wait ...</Typography>
    </Box>
  );
};
