import React from "react";
import { Button, Input } from "@mui/material";
import { useStore } from "effector-react";

import { $username, handleChange, submitted } from "../model";

export const Auth: React.FC = () => {
  const username = useStore($username);

  return (
    <form onSubmit={submitted}>
      <Input
        required
        value={username}
        onChange={handleChange}
        placeholder="John..."
      />
      <Button sx={{ marginLeft: 2 }} variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};
