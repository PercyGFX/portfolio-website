"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-ink/60 transition-colors hover:border-accent hover:text-accent"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
