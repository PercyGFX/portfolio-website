import React from "react";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold tracking-tight">Projects</h2>

      <div className="mt-6 space-y-7">
        {projectsData.map((project) => (
          <article key={project.title}>
            <h3 className="font-medium">{project.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">
              {project.description}
            </p>
            <p className="mt-1.5 font-mono text-xs text-ink/50">
              {project.tags.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
