"use client";

import * as React from "react";
import { MoonIcon, SunIcon, LaptopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (currentTheme === "system") {
      setTheme("light");
    } else if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("system");
    }
  };

  const getIcon = () => {
    if (currentTheme === "dark") {
      return <MoonIcon className="h-[1.2rem] w-[1.2rem] mt-1" />;
    } else if (currentTheme === "light") {
      return <SunIcon className="h-[1.2rem] w-[1.2rem] mt-1" />;
    } else {
      return <LaptopIcon className="h-[1.2rem] w-[1.2rem] mt-1" />;
    }
  };

  return (
    <Button variant="none" size="icon" onClick={toggleTheme}>
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
