import { AccountCircle, Add, Menu, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Fab,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React, { useState } from "react";
import Leftmenu from "../Components/Leftmenu";
import Rightmenu from "../Components/Rightmenu";
import InputBase from "@mui/material/InputBase";
import AddTask from "../Components/AddTask";
import { Outlet } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { searchTodo } from "../Reducers/todoReducer";

function Navbar() {
  const theme = useTheme();

  const [mobileOpenLeft, setMobileOpenLeft] = useState(false);
  const [mobileOpenRight, setMobileOpenRight] = useState(false);
  const [taskOpen, SetTaskOpen] = useState(false);

  const handleDrawerToggleLeft = () => {
    setMobileOpenLeft(!mobileOpenLeft);
  };

  const handleDrawerToggleRight = () => {
    setMobileOpenRight(!mobileOpenRight);
  };

  const Searcher = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const fabStyle = {
    right: 20,
    position: "fixed",
    bottom: 10,
  };

  const handleTaskDialog = () => {
    SetTaskOpen(!taskOpen);
  };
const dispatch = useDispatch()

  const searchItems = (e) => {
    console.log(e.target.value);
    const searchText = e.target.value
    dispatch(searchTodo(searchText))

  };

  // const [searchVal, setSearchVal] = useState("");

  // function handleSearchClick() {

  //     if (searchVal === "") { setProducts(productList); return; }
  //     const filterBySearch = productList.filter((item) => {
  //         if (item.toLowerCase()
  //             .includes(searchVal.toLowerCase())) { return item; }
  //     })
  //     setProducts(filterBySearch);
  // }

  const AppBarFunct = (
    <>
      <Hidden lgUp={true}>
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

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          AGENDA
        </Typography>
      </Hidden>
      <Hidden smDown>
        <Searcher>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => searchItems(e)}
          />
        </Searcher>
      </Hidden>
      <Hidden lgDown={true}>
        <Box sx={{ flexGrow: 1, textAlign: "right" }}>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleTaskDialog}
            color="inherit"
          >
            <Avatar
              sx={
                theme.palette.mode === "dark"
                  ? { bgcolor: "#2195f2" }
                  : { bgcolor: "#434343" }
              }
            >
              <Add />
            </Avatar>
          </IconButton>
        </Box>
      </Hidden>
      <Hidden lgUp={true}>
        <Button
          size="small"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleDrawerToggleRight}
          color="inherit"
        >
          <AccountCircle sx={{ fontSize: { xs: 40, sm: 45 } }} />
        </Button>
      </Hidden>
    </>
  );

  return (
    <>
      <Hidden lgUp={true}>
        <AppBar position="sticky">
          <Toolbar>{AppBarFunct}</Toolbar>
        </AppBar>
        <Hidden smUp>
          <Box sx={{ margin: 1 }}>
            <Searcher sx={{ border: 1 }}>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => searchItems(e)}
              />
            </Searcher>
          </Box>
        </Hidden>
        <Outlet />
      </Hidden>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={0.5} className="flex justify-center ">
          <Grid item>
            <Leftmenu
              forLeftMenu={handleDrawerToggleLeft}
              OpenLeft={mobileOpenLeft}
            />
          </Grid>
          <Grid item lg={7.22} xl={7.93}>
            <Hidden lgDown={true}>
              <AppBar position="sticky">
                <Toolbar>{AppBarFunct}</Toolbar>
              </AppBar>
              <Outlet />
            </Hidden>
          </Grid>
          <Grid item>
            <Rightmenu
              forRightMenu={handleDrawerToggleRight}
              OpenRight={mobileOpenRight}
            />
          </Grid>
        </Grid>

        <AddTask forAddTask={handleTaskDialog} OpenTask={taskOpen} />
      </Box>
      <Fab
        onClick={handleTaskDialog}
        size="small"
        color="primary"
        aria-label="add"
        style={fabStyle}
      >
        <Add />
      </Fab>
    </>
  );
}

export default Navbar;
