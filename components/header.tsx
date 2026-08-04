"use client";

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="sticky top-0 z-[999] border-b border-line bg-paper">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link
          href="#home"
          className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.2em]"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
        >
          Kelum&nbsp;Isuranga
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links
              .filter((link) => link.name !== "Home")
              .map((link, index) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "group font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors hover:text-accent",
                      activeSection === link.name
                        ? "text-accent"
                        : "text-ink/60"
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    <span className="mr-1 text-ink/40 group-hover:text-accent/60">
                      0{index + 1}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <ThemeSwitch />
      </div>

      {/* mobile nav strip */}
      <nav className="overflow-x-auto border-t border-line md:hidden">
        <ul className="flex items-center gap-5 px-4 py-2">
          {links
            .filter((link) => link.name !== "Home")
            .map((link) => (
              <li key={link.hash} className="shrink-0">
                <Link
                  className={clsx(
                    "font-mono text-[0.7rem] uppercase tracking-[0.15em]",
                    activeSection === link.name ? "text-accent" : "text-ink/60"
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
