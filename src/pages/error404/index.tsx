import React from "react";
import { Box, Typography } from "@mui/material";

const Error404Page: React.FC = () => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography textAlign="center" variant="h1">
        !
      </Typography>
      <Typography textAlign="center" variant="h4">
        Page not found
      </Typography>
    </Box>
  );
};

export default Error404Page;
