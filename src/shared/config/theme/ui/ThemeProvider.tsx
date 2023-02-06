import React from "react";
import { Theme } from "../model/Theme";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../model/ThemeContext";

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultThemeContextValue = React.useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};