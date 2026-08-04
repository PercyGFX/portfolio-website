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

export const socials = {
  email: "isurangabtk@gmail.com",
  github: "https://github.com/PercyGFX",
  linkedin: "https://www.linkedin.com/in/kelum-isuranga/",
  cv: "https://drive.google.com/file/d/1VEni2s8ym3m_LVpffMOiyviYP9ZUMVB8/view?usp=sharing",
} as const;

export const experiencesData = [
  {
    role: "Software Engineer",
    company: "Botcalm",
    date: "2025 — Present",
    points: [
      "Leading a cross-functional team of 7+ engineers — sprint planning, code reviews, and technical delivery for an iGaming platform.",
      "Architected an iGaming platform handling 5000+ concurrent users with Apache Kafka event streaming.",
      "Built a blockchain project from the ground up using Go.",
      "Developed an AI-powered gaming platform with RAG architecture (OpenAI/DeepSeek, Pinecone, pgvector) for autonomous character interactions.",
      "Integrated KYC/AML compliance for US-regulated markets — ID verification, geolocation, anti-fraud.",
      "CI/CD with GitHub Actions across Azure, DigitalOcean, and AWS, monitored with Grafana/Prometheus.",
    ],
  },
  {
    role: "Associate Full-stack Developer",
    company: "Codesec Global",
    date: "2024 — 2025",
    points: [
      "Built client sites with Next.js, Tailwind CSS, and Strapi CMS; secure backends with Express.js, Passport.js, and Supabase.",
      "Developed e-commerce stores with Shopify Headless, Payload CMS, and custom solutions.",
      "Built the frontend for a market-leading platform on the WAX blockchain.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "BiG ZKOOP",
    date: "2023 — 2024",
    points: [
      "Developed an education management system with Next.js, Nest.js, AWS S3, and PayHere.",
      "Revamped a real estate website for an Australian client with Next.js and SEO improvements.",
      "Guided the internship program and mentored interns.",
    ],
  },
  {
    role: "QA Engineer",
    company: "Freshmilk Software",
    date: "2019 — 2020",
    points: [
      "Daily checkups of SaaS products; API testing for mobile applications and releases.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "AI-Driven Job Portal",
    description:
      "A job portal that matches candidates to roles using OpenAI — built end-to-end as my university capstone project.",
    tags: ["React", "Express.js", "MySQL", "Sequelize", "OpenAI API"],
    imageUrl: "/corpcomment.png",
  },
  {
    title: "Trading Platform UI",
    description:
      "A Binance-style trading interface with live order book layout, dense data views, and dark-first design.",
    tags: ["Next.js", "TypeScript", "ShadCN", "Tailwind"],
    imageUrl: "/rmtdev.png",
  },
  {
    title: "CV Generator",
    description:
      "A drag-and-drop CV builder where users compose documents from customizable components.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: "/wordanalytics.png",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Go"],
  },
  {
    category: "Back-end",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Go + Chi",
      "Apache Kafka",
      "Microservices",
      "RAG Agents",
    ],
  },
  {
    category: "Front-end",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "ShadCN",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "DigitalOcean",
      "Docker",
      "Kubernetes (K3s)",
      "Terraform",
      "ArgoCD",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "AI Tooling",
    items: [
      "Claude Code",
      "Claude API",
      "OpenAI API",
      "Cursor + MCP",
      "Pinecone",
      "pgvector",
    ],
  },
] as const;

export const tickerItems = [
  "Go",
  "Node.js",
  "TypeScript",
  "Apache Kafka",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "React",
  "Nest.js",
  "MongoDB",
] as const;
