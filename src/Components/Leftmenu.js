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
  Add,
  DoneAll,
  ListAlt,
  Pending,
  PendingActions,
  PlusOne,
  Task,
} from "@mui/icons-material";

function Leftmenu({ forLeftMenu, OpenLeft }, props) {
  const [taskOpen, SetTaskOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleTaskDialog = () => {
    SetTaskOpen(!taskOpen);
  };

  const drawerWidth = 250;
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const draweItems = (
    <Container>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center" , py :3 }}
      >
        AGENDA
      </Typography>

      <Divider />

      <AddTask forAddTask={handleTaskDialog} OpenTask={taskOpen} />
      <Stack style={{ margin: 20 }}>
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
            <Task />
          </ListItemIcon>
          <ListItemText primary="Today Task" />
        </ListItemButton>
        <ListItemButton
          title="all task"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="All task" />
        </ListItemButton>
        <ListItemButton
          title="Completed task"
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <DoneAll />
          </ListItemIcon>
          <ListItemText primary="Completed task" />
        </ListItemButton>
        <ListItemButton
          title="Uncompleted task"
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <PendingActions />
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
