import React from "react";
import { Box, Typography } from "@mui/material";
import { useStore } from "effector-react";

import { $username } from "../../model";

export const User: React.FC = () => {
  const username = useStore($username);

  return (
    <Box>
      <Typography variant="h5">Hello, {username}!</Typography>
    </Box>
  );
};
