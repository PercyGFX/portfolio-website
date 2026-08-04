"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  return (
    <article className="group grid gap-6 border-b border-line px-4 py-10 last:border-b-0 sm:px-8 sm:py-12 lg:grid-cols-[4rem_1fr_minmax(0,22rem)] lg:gap-10">
      <span className="hidden font-mono text-[0.75rem] tracking-[0.2em] text-ink/40 lg:block">
        P.0{index + 1}
      </span>

      <div>
        <h3 className="font-display text-2xl transition-colors group-hover:text-accent sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-[48ch] leading-relaxed text-ink/70">
          {description}
        </p>
        <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink/50">
          {tags.join(" · ")}
        </p>
      </div>

      <div className="border border-line p-2">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 1024px) 22rem, 100vw"
            quality={90}
            className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </div>
      </div>
    </article>
  );
}
