"use client";

import * as React from "react";
import { MoonIcon, SunIcon, LaptopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonToSun, SunToMoon } from "./icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (currentTheme === "dark") {
      return (
        <div>
          <SunToMoon className="text-xl -mb-2" />
        </div>
      );
    } else {
      return (
        <div>
          <MoonToSun className="text-xl -mb-2" />
        </div>
      );
    }
  };

  return (
    <Button variant="none" size="icon" onClick={toggleTheme}>
      {getIcon()}
    </Button>
  );
}
