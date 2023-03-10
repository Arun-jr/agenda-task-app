import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  List,
  Avatar,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { ColorModeContext } from "../App";
import { Stack } from "@mui/system";
import { AccountCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {getCurrentDate , GetCurrentTime} from './CurrentDate'


console.log(getCurrentDate())


function Rightmenu({ forRightMenu, OpenRight }, props) {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  // const navigate = useNavigate();

  // const Login = () => {
  //   navigate("/login");
  //   forRightMenu();
  // };

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
      <Container
        sx={
          theme.palette.mode === "dark"
            ? { color: "white" }
            : { color: "white" }
        }
      >
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems={"center"}
          margin={2}
        >
          <Stack direction={"column"} justifyContent="end" alignItems={"end"}>
            <Typography> Hi,user </Typography>
            <Typography fontSize={13}> {getCurrentDate()} </Typography>
          </Stack>
          <Avatar  sx={
              theme.palette.mode === "dark"
                ? { bgcolor: "#2195f2" , marginX : 1 }
                : { bgcolor: "#434343" , marginX : 1}
            }>
            <AccountCircle  />
          </Avatar>
        </Stack>
      </Container>
      <Divider />
      <List component="nav" >
        <ListItemButton title="Dark mode" alignItems="center" onClick={colorMode.toglleColorMode}>
          <ListItemText
            primary={"Dark mode"}
            sx={
              theme.palette.mode === "dark"
                ? { color: "white" , textAlign : 'center' }
                : { color: "white" , textAlign : 'center' }
            }
          />
          <ListItemIcon>
            {theme.palette.mode === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness4Icon />
            )}
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Box
        padding={2}
        sx={
          theme.palette.mode === "dark"
            ? { color: "white" }
            : { color: "white" }
        }
      >
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
      <Stack justifyContent={"center"} padding={2} marginTop="auto">
      <Typography fontSize={13} margin={1} textAlign="end" sx={
          theme.palette.mode === "dark"
            ? { color: "grey" }
            : { color: "primary" }
        }> {GetCurrentTime()} </Typography>
        <Button variant="contained" size="small" title=" Delete all tasks">
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
