"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-24 border-b border-line"
    >
      <SectionHeading number="03" title="Skills" />

      <div>
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-[minmax(0,1fr)] gap-2 border-b border-line px-4 py-6 last:border-b-0 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8 sm:px-8"
          >
            <p className="label pt-1">{group.category}</p>
            <p className="font-display text-lg leading-relaxed sm:text-xl">
              {group.items.map((item, i) => (
                <React.Fragment key={item}>
                  <span className="whitespace-nowrap">{item}</span>
                  {i < group.items.length - 1 && (
                    <>
                      {" "}
                      <span className="px-1 text-accent">·</span>{" "}
                    </>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
