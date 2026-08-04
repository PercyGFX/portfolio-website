import React from "react";
import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold tracking-tight">Skills</h2>

      <div className="mt-6 space-y-3">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="grid gap-0.5 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <p className="text-sm text-ink/50">{group.category}</p>
            <p className="text-[15px] leading-relaxed text-ink/80">
              {group.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
