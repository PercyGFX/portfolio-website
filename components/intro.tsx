import React from "react";
import { socials } from "@/lib/data";
import ThemeSwitch from "./theme-switch";

export default function Intro() {
  return (
    <section>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Kelum Isuranga
          </h1>
          <p className="mt-1 text-ink/60">
            Software Engineer · Southern Province, Sri Lanka
          </p>
        </div>
        <ThemeSwitch />
      </div>

      <div className="mt-8 space-y-4 leading-relaxed text-ink/80">
        <p>
          Full-stack engineer with 3+ years of experience and a strong
          foundation in the MERN stack, now specializing in Go and Node.js
          backend systems for production iGaming platforms serving social
          casino products. Built a blockchain project from the ground up, with
          experience in event-driven architecture and crypto payment systems —
          alongside KYC/AML and geolocation compliance for regulated markets.
        </p>
        <p>
          Leverages AI-driven development practices to accelerate delivery and
          code quality. Skilled in cloud infrastructure and DevOps, with
          hands-on experience across Azure, DigitalOcean, and AWS, and CI/CD
          pipeline automation.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          href={socials.github}
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          href={socials.linkedin}
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          href={socials.cv}
          target="_blank"
        >
          Résumé
        </a>
        <a
          className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          href={`mailto:${socials.email}`}
        >
          {socials.email}
        </a>
      </div>
    </section>
  );
}
