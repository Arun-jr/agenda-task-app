import React, { createContext, useContext, useMemo, useState } from "react";
import Navbar from "./Screens/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CompletedTask from "./Screens/CompletedTask";
import ImportantTask from "./Screens/ImportantTask";
import TodayTask from "./Screens/TodayTasks";
import UnCompletedTask from "./Screens/UncompletedTask";
import NotFound from "./Screens/NotFound";
import Login from "./Screens/Login";

export const ColorModeContext = createContext({
  toglleColorMode: () => {},
});

const theme = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#2195f2",
            light: "#6ec5ff",
            dark: "#0068bf",
          },
        }
      : {
          primary: {
            main: "#2195f2",
            light: "#6ec5ff",
            dark: "#0068bf",
          },
        }),
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/completed",
        element: <CompletedTask />,
      },
      {
        path: "/important",
        element: <ImportantTask />,
      },
      {
        path: "/todaytask",
        element: <TodayTask />,
      },
      {
        path: "/uncompleted",
        element: <UnCompletedTask />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toglleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme2 = useMemo(() => createTheme(theme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme2}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
