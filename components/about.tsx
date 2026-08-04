"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section ref={ref} id="about" className="scroll-mt-24 border-b border-line">
      <SectionHeading number="01" title="About" />

      <div className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="max-w-[62ch] space-y-6 font-display text-lg leading-relaxed text-ink/80 sm:text-xl">
          <p>
            I started out as a QA engineer, breaking other people&apos;s
            software — then switched sides to build my own. These days I work
            on production iGaming platforms: Go and Node.js services, Kafka
            event streams, crypto payment rails, and the KYC/AML plumbing that
            regulated markets demand.
          </p>
          <p>
            At Botcalm I lead a cross-functional team of 7+ engineers, running
            sprint planning and code reviews while staying hands-on — from a
            blockchain project built from scratch in Go to an AI gaming
            platform running on RAG architecture.
          </p>
          <p>
            I lean heavily on AI-driven development practices to move faster
            without cutting corners, and I hold a first-class BEng (Hons) in
            Software Engineering from London Metropolitan University.
          </p>
        </div>
      </div>
    </section>
  );
}
