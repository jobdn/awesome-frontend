import React from "react";

import { Theme, useTheme } from "shared/config/theme";
import { Button } from "shared/ui/Button";

import DarkThemeSwitcher from "../assets/dark-theme-switcher.svg";
import LightThemeSwitcher from "../assets/light-theme-switcher.svg";

import classes from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classes.ThemeSwitcher}
      onClick={toggleTheme}
      type="button"
    >
      {theme === Theme.DARK ? <LightThemeSwitcher /> : <DarkThemeSwitcher />}
    </Button>
  );
};
