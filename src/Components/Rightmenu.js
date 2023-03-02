import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Divider,
 
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { ColorModeContext } from "../App";
import { Stack } from "@mui/system";
import { AccountCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Rightmenu({ forRightMenu, OpenRight }, props) {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const drawerWidth = 250;
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    flexGrow: 1,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const draweItems = (
    <>
      <Container>
        <Stack direction={"row"} justifyContent="center">
          <Stack
            direction={"column"}
            justifyContent="end"
            alignItems={"end"}
            margin={1}
          >
            <Typography variant="h6"> Login </Typography>
            <Typography> 12/23/3032 </Typography>
          </Stack>
          <IconButton>
            <AccountCircle sx={{ width: 50, height: 50 }} />
          </IconButton>
        </Stack>
      </Container>
      <Divider />
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent="space-evenly"
        alignItems={"center"}
        margin={1}
      >
        <Typography className="capitalize font-bold" >
          
          {theme.palette.mode} mode
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toglleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        {/* <Switch onClick={colorMode.toglleColorMode} /> */}
      </Stack>
      <Box padding={2}>
        <Stack
          direction={"row"}
          spacing={4}
          justifyContent="space-between"
          alignItems={"center"}
          margin={1}
        >
          <Typography> All tasks </Typography>
          <Typography> 5/10 </Typography>
        </Stack>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
      <Stack justifyContent={"center"} padding={2}>
        <Button variant="contained" size="large" title=" Delete all tasks">
          Delete all tasks
        </Button>
      </Stack>
    </>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={OpenRight}
        onClose={forRightMenu}
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
        anchor="right"
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

export default Rightmenu;
