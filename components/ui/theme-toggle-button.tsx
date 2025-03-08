"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { Sun, Moon } from "lucide-react";

interface Props {
  customClass?: string;
}

export function ThemeToggleButton({ customClass }: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      className={`p-2 ${customClass}`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
}
