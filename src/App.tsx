import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
function App() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Main />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
