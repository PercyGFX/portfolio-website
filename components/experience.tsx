import React from "react";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold tracking-tight">Experience</h2>

      <div className="mt-6 space-y-8">
        {experiencesData.map((item) => (
          <article
            key={`${item.company}-${item.date}`}
            className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <p className="text-sm text-ink/50 sm:pt-0.5">{item.date}</p>
            <div>
              <h3 className="font-medium">
                {item.role} · <span className="text-ink/70">{item.company}</span>
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
