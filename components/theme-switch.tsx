"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink/60 transition-colors hover:text-accent"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      [{theme === "light" ? "dark" : "light"}]
    </button>
  );
}
