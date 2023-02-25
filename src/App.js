import React, { createContext, useContext, useMemo, useState } from "react";
import Navbar from "./Screens/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

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
            
          }
        }
      : {
          primary: {
            main: "#2195f2",
            light: "#6ec5ff",
            dark: "#0068bf",
          }
        })
  },
//   palette : {
// mode , 
// primary : {
//   ...(
//     mode === " dark" ? {
//       main :  "#2195f2",
//     } : {
//       main : "rgb(0,53,0)"
//     }
//   )
// }

//   },
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
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme2}>
          <CssBaseline />
          <Navbar />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
