import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";

import AddTask from "./AddTask";
import {
  Button,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  Bookmark,
  DoneAll,
  ListAlt,
  PendingActions,
  Task,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

function Leftmenu({ forLeftMenu, OpenLeft }, props) {
  const [taskOpen, SetTaskOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const navigate = useNavigate();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 0) {
      navigate("/todaytask");
    } else if (index === 1) {
      navigate("/");
    } else if (index === 2) {
      navigate("/important");
    } else if (index === 3) {
      navigate("/completed");
    } else if (index === 4) {
      navigate("/uncompleted");
    }
    forLeftMenu();
  };

  const handleTaskDialog = () => {
    SetTaskOpen(!taskOpen);
  };

  const drawerWidth = 250;
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = useTheme();

  const draweItems = (
    <Container
      sx={
        theme.palette.mode === "dark" ? { color: "white" } : { color: "white" }
      }
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center", py: 3 }}
      >
        AGENDA
      </Typography>

      <Divider />

      <Stack>
        <Button
          variant="contained"
          size="large"
          title="Add new task"
          color="primary"
          onClick={handleTaskDialog}
        >
          add new task
        </Button>
      </Stack>

      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          title="today task"
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Task
              sx={
                theme.palette.mode === "dark"
                  ? { color: "white" }
                  : { color: "white" }
              }
            />
          </ListItemIcon>
          <ListItemText primary="Today Task" />
        </ListItemButton>
        <ListItemButton
          title="all task"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <ListAlt
              sx={
                theme.palette.mode === "dark"
                  ? { color: "white" }
                  : { color: "white" }
              }
            />
          </ListItemIcon>
          <ListItemText primary="All task" />
        </ListItemButton>
        <ListItemButton
          title="Important Task"
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <Bookmark
              sx={
                theme.palette.mode === "dark"
                  ? { color: "white" }
                  : { color: "white" }
              }
            />
          </ListItemIcon>
          <ListItemText primary="Important Task" />
        </ListItemButton>
        <ListItemButton
          title="Completed task"
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <DoneAll
              sx={
                theme.palette.mode === "dark"
                  ? { color: "white" }
                  : { color: "white" }
              }
            />
          </ListItemIcon>
          <ListItemText primary="Completed task" />
        </ListItemButton>
        <ListItemButton
          title="Uncompleted task"
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <PendingActions
              sx={
                theme.palette.mode === "dark"
                  ? { color: "white" }
                  : { color: "white" }
              }
            />
          </ListItemIcon>
          <ListItemText primary="Uncompleted task" />
        </ListItemButton>
      </List>
    </Container>
  );

  return (
    <>
      <Drawer
        color=""
        container={container}
        variant="temporary"
        open={OpenLeft}
        onClose={forLeftMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {draweItems}
      </Drawer>
      <AddTask forAddTask={handleTaskDialog} OpenTask={taskOpen} />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { lg: "20%", xl: "17%" },
          },
        }}
        open
      >
        {draweItems}
      </Drawer>
    </>
  );
}

export default Leftmenu;
