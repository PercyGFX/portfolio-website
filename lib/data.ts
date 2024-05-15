import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "QA Engineer",
    location: "Freshmilk Software",
    description:
      "After completing my HND, I joined this company as a QA Engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2021",
  },
  {
    title: "Intern Web Developer",
    location: "CYNTREK",
    description:
      "After switching my career, I joined CYNTREK for an internship position as a web developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "BigZkoop",
    description:
      "I am currently working as a full-stack developer. My tech stack includes React, Next.js, TypeScript, Tailwind, and Nest.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Driven Job Portal",
    description:
      "I created a AI driven Job Portal as my university project using OpenAI",
    tags: [
      "React",
      "Express.js",
      "MySQL",
      "Tailwind",
      "Sequalize",
      "OpenAI API",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Trading Platform UI",
    description:
      "Trading platform UI like binance created using Nextjs, Tailwind CSS & Shadcn",
    tags: ["Next.Js", "TypeScript", "ShadCN", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "CV Generator",
    description:
      "CV generator that user can add componants and customize it.",
    tags: ["React", "Redux", "Tailwind", ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Laraval (PHP)",
  "React",
  "Next.js",
  "Node.js",
  "Nestjs",
  "Git",
  "Tailwind",
  "Ant Design",
  "MUI",
  "Prisma",
  "Sequelize",
  "MongoDB",
  "Redux",
  "Redux Saga",
  "ExpressJS",
  "PostgreSQL",
  "Photoshop",
] as const;
