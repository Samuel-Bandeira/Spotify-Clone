import React from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
const Main = () => {
  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mr: "40px",
          ml: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              pr: "20px",
            }}
          >
            AL
          </Box>
          <Box>AR</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button variant="contained">upgrade</Button>
          <Button
            startIcon={<Box>UII</Box>}
            sx={{
              color: "white",
              ml: "40px",
            }}
            endIcon={<Box>.</Box>}
          >
            samuel.bandei...
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Main;
