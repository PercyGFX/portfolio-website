"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-24 border-b border-line"
    >
      <SectionHeading number="02" title="Selected Projects" />
      <div>
        {projectsData.map((project, index) => (
          <Project key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
