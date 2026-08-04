import React from "react";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex flex-col gap-3 px-4 py-6 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Kelum Isuranga</p>
        <p className="flex gap-6">
          <a
            className="transition-colors hover:text-accent"
            href={socials.github}
            target="_blank"
          >
            GitHub ↗
          </a>
          <a
            className="transition-colors hover:text-accent"
            href={socials.linkedin}
            target="_blank"
          >
            LinkedIn ↗
          </a>
          <a
            className="transition-colors hover:text-accent"
            href={`mailto:${socials.email}`}
          >
            Email ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
