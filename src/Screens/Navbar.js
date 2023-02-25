import { AccountCircle, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Leftmenu from "../Components/Leftmenu";
import Rightmenu from "../Components/Rightmenu";

function Navbar() {
  const [mobileOpenLeft, setMobileOpenLeft] = useState(false);
  const [mobileOpenRight, setMobileOpenRight] = useState(false);
 

  const handleDrawerToggleLeft = () => {
    setMobileOpenLeft(!mobileOpenLeft);
  };

  const handleDrawerToggleRight = () => {
    setMobileOpenRight(!mobileOpenRight);
  };



  return (
    <Box sx={{ display: 'flex' }}>
    <AppBar position="static">
      <Toolbar>
       
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerToggleLeft}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AGENDA
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleDrawerToggleRight}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
      
    </AppBar>
    <Leftmenu
          forLeftMenu={handleDrawerToggleLeft}
          OpenLeft={mobileOpenLeft}
        />
    <Rightmenu
        forRightMenu={handleDrawerToggleRight}
        OpenRight={mobileOpenRight}
      />
    </Box>
  );
}

export default Navbar;
