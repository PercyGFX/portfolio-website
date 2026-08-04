"use client";

import React from "react";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { socials, tickerItems } from "@/lib/data";

const meta = [
  { label: "Currently", value: "Software Engineer @ Botcalm" },
  { label: "Focus", value: "Go · Node.js · iGaming" },
  { label: "Location", value: "Southern Province, Sri Lanka" },
  { label: "Status", value: "Open to opportunities" },
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="scroll-mt-24">
      <div className="border-b border-line px-4 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <p className="label reveal">Kelum Isuranga — Software Engineer</p>

        <h1 className="reveal reveal-1 mt-6 max-w-[20ch] font-display text-[clamp(2.6rem,7.5vw,6rem)] leading-[1.05]">
          Full-stack engineer specializing in{" "}
          <em className="text-accent">Go &amp; Node.js</em> backend systems.
        </h1>

        <p className="reveal reveal-2 mt-8 max-w-[52ch] leading-relaxed text-ink/70">
          3+ years of experience building production iGaming platforms — Kafka
          event streaming at 5000+ concurrent users, crypto payments, and
          KYC/AML compliance for regulated markets.
        </p>

        <div className="reveal reveal-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[0.8rem] uppercase tracking-[0.1em]">
          <Link
            href="#contact"
            className="border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:border-accent hover:bg-accent"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me →
          </Link>
          <a className="link-underline" href={socials.cv} target="_blank">
            Download CV ↓
          </a>
          <a className="link-underline" href={socials.github} target="_blank">
            GitHub ↗
          </a>
          <a className="link-underline" href={socials.linkedin} target="_blank">
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* spec-sheet metadata row */}
      <div className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
        {meta.map((item, i) => (
          <div
            key={item.label}
            className={`px-4 py-4 sm:px-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="label">{item.label}</p>
            <p className="mt-1 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* skills ticker */}
      <div
        className="overflow-hidden border-b border-line py-3"
        aria-hidden="true"
      >
        <div className="flex w-max animate-ticker">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center font-mono text-[0.75rem] uppercase tracking-[0.2em] text-ink/50"
            >
              {tickerItems.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-5">{item}</span>
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
