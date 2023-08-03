import { createContext, useMemo, useState } from "react";
import {
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { StyledEngineProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import AppRouter from "./AppRouter";
import { defaultMode } from "./consts/mode";

export const ColorModeContext = createContext({
  mode: defaultMode,
  toggleColorMode: () => {},
});

const App = (): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);
  const colorMode = useMemo(
    () => ({
      mode: mode,
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    [mode]
  );

  const commonColor = {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    active: "#0573e0",
    contrastText: "#000",
  };

  const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1976d2",
            },
            bgMain: {
              main: "#f3f3f3",
            },
            secondary: {
              main: purple[500],
            },
            light: {
              main: "#bbbbbb",
            },
            active: {
              main: "#00000013",
            },
            error: commonColor,
          }
        : {
            primary: {
              main: "#1db925",
            },
            bgMain: {
              main: "#292929",
            },
            light: {
              main: "#3d3d3d",
            },
            secondary: {
              main: "#836183",
            },
            active: {
              main: "#ffffff11",
            },
            error: commonColor,
          }),
    },
  });
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ThemeProviderStyled theme={theme}>
            <CssBaseline />
            <AppRouter />
          </ThemeProviderStyled>
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
