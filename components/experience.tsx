"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-24 border-b border-line"
    >
      <SectionHeading number="04" title="Experience" />

      <div>
        {experiencesData.map((item) => (
          <article
            key={`${item.company}-${item.date}`}
            className="grid gap-3 border-b border-line px-4 py-8 last:border-b-0 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-8"
          >
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-ink/50 lg:pt-1.5">
              {item.date}
            </p>

            <div>
              <h3 className="font-display text-xl sm:text-2xl">
                {item.role}
                <span className="text-ink/50"> — {item.company}</span>
              </h3>
              <ul className="mt-4 max-w-[65ch] space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-relaxed text-ink/70"
                  >
                    <span className="mt-[0.05rem] shrink-0 text-accent">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
