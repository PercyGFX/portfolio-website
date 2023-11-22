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
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
