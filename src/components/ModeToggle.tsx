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
          <SunToMoon className="text-3xl sm:text-2xl text-primary -mb-2" />
        </div>
      );
    } else {
      return (
        <div>
          <MoonToSun className="text-3xl sm:text-2xl text-primary -mb-2" />
        </div>
      );
    }
  };

  return (
    <Button
      className="mt-1 sm:mt-0"
      variant="none"
      size="icon"
      onClick={toggleTheme}
    >
      {getIcon()}
    </Button>
  );
}
