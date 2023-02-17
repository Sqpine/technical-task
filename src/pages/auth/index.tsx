import React from "react";
import { Box, Typography } from "@mui/material";
import { Auth } from "features/auth";

const AuthPage = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography marginBottom={5} variant="h6">
        Type your Nickname
      </Typography>
      <Auth />
    </Box>
  );
};

export default AuthPage;
