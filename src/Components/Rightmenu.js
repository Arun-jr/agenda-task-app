import React, { createContext, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { Button } from "@material-tailwind/react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { ColorModeContext } from "../App";

function Rightmenu({ forRightMenu, OpenRight }, props) {
  const colorMode = useContext(ColorModeContext);

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
      <div className="text-white flex justify-center">
        <div className="text-right m-2">
          <p className="text-lg font-medium">Login</p>
          <p className="text-sm">20/05/2022</p>
        </div>
        <div className="my-2 flex items-center justify-center bg-secondary  rounded-full w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
      <hr />
      <div className="text-white flex justify-between m-4">
        <p> Dark mode </p>
        <Switch onClick={colorMode.toglleColorMode} />
        {console.log(colorMode)}
      </div>
      <div className="text-white  m-4">
        <div className="flex justify-between m-2">
          <p className=""> All tasks </p>
          <p className=""> 5/10 </p>
        </div>
        <BorderLinearProgress variant="determinate" value={50} />
      </div>
      <Button className="text-white border-2 border-dotted p-2 flex justify-center m-4">
        Delete all tasks
      </Button>
    </>
  );

  return (
    <div className="bg-black">
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
    </div>
  );
}

export default Rightmenu;
