"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a proficient full-stack developer based in Sri Lanka's Southern
        Province. Driven by a passion for technology and a relentless desire to
        learn, I transitioned from a role as a QA engineer to pursue a career in
        development. Currently, I am immersed in MERN stack technologies,
        alongside Next.js and Nest.js.
      </p>

      <p>
        Education has played a pivotal role in shaping my journey. I hold a
        Higher National Diploma in Information Technology from the Sri Lanka
        Institute of Advanced Technological Education and a BEng (Hons) in
        Software Engineering from London Metropolitan University.
      </p>
    </motion.section>
  );
}
