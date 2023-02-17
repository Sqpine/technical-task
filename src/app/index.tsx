import { Box } from "@mui/material";

import { withProviders } from "./providers";
import "./index.css";
import { Routing } from "pages";

const App = () => {
  return (
    <Box minHeight="100vh">
      <Routing />
    </Box>
  );
};

export default withProviders(App);
