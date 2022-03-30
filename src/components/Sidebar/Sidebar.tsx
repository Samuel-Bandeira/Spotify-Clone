import React from "react";
import SideBarContent from "../../data/Sidebar_content";
import Actions_content from "../../data/Actions_content";
import Playlist_content from "../../data/Playlist_content";
import {
  Box,
  List,
  ListItem,
  Drawer,
  Typography,
  Divider,
} from "@mui/material";
const Sidebar = () => {
  return (
    <Box
      sx={{
        background: "red",
        overflow: "hidden",
        height: "400px",
      }}
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          "& .MuiPaper-root": {
            width: "17%",
            boxSizing: "border-box",
          },
          "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            height: "90%",
          },
        }}
      >
        <List>
          <ListItem>
            <Typography>Spotify</Typography>
          </ListItem>
          {SideBarContent.map((content) => (
            <ListItem>
              <Typography>{content.name}</Typography>
            </ListItem>
          ))}
        </List>
        <List>
          {Actions_content.map((content) => (
            <ListItem>
              <Typography>{content.name}</Typography>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            overflow: "auto",
          }}
        >
          <List>
            {Playlist_content.map((content) => (
              <ListItem>
                <Typography>{content.name}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <List>
          <ListItem>
            <Typography>Install App</Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
