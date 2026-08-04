import React from "react";

type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line px-4 py-5 sm:px-8">
      <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent">
        {number}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
    </div>
  );
}
