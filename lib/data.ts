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
    summary:
      "Leading a team of 7+ engineers on an iGaming platform handling 5000+ concurrent users with Kafka event streaming. Built a blockchain project from scratch in Go, an AI gaming platform on RAG architecture, and KYC/AML compliance for US-regulated markets.",
  },
  {
    role: "Associate Full-stack Developer",
    company: "Codesec Global",
    date: "2024 — 2025",
    summary:
      "Client sites with Next.js and Strapi, secure Express.js backends, Shopify Headless e-commerce, and the frontend for a market-leading platform on the WAX blockchain.",
  },
  {
    role: "Full-stack Developer",
    company: "BiG ZKOOP",
    date: "2023 — 2024",
    summary:
      "Built an education management system with Next.js, Nest.js, AWS S3, and PayHere. Revamped a real estate site for an Australian client and mentored interns.",
  },
  {
    role: "QA Engineer",
    company: "Freshmilk Software",
    date: "2019 — 2020",
    summary:
      "Daily checkups of SaaS products and API testing for mobile applications and releases.",
  },
] as const;

export const projectsData = [
  {
    title: "Layer-1 Blockchain",
    description:
      "Built a Layer-1 blockchain in Go from the ground up, implementing BFT consensus, post-quantum cryptography, and PebbleDB-based state storage.",
    tags: ["Go", "libp2p", "PebbleDB"],
  },
  {
    title: "Social Casino Platform",
    description:
      "A production iGaming platform handling 5000+ concurrent users, built on an event-driven microservices architecture with US-regulated compliance (KYC/AML, geolocation) included.",
    tags: ["Go", "Next.js", "Kafka", "Redis", "Microservices"],
  },
  {
    title: "AI-Powered Trading Bot",
    description:
      "An automated crypto trading bot that pulls live market data from Binance and uses Gemini and DeepSeek models to analyze signals and drive trade decisions.",
    tags: ["Express.js", "Gemini API", "DeepSeek API", "Binance API"],
  },
  {
    title: "AI-Driven Job Portal",
    description:
      "A job portal that matches candidates to roles using OpenAI — built end-to-end as my university capstone project.",
    tags: ["React", "Express.js", "MySQL", "OpenAI API"],
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    items: "JavaScript, TypeScript, Go",
  },
  {
    category: "Back-end",
    items: "Node.js, Express.js, Nest.js, Go + Chi, Apache Kafka, Microservices",
  },
  {
    category: "Front-end",
    items: "React, Next.js, Tailwind CSS, Redux, React Query, ShadCN",
  },
  {
    category: "Databases",
    items: "PostgreSQL, MySQL, MongoDB, Redis, Prisma, Sequelize",
  },
  {
    category: "Cloud & DevOps",
    items: "AWS, Azure, DigitalOcean, Docker, Kubernetes, Terraform, ArgoCD",
  },
  {
    category: "AI Tooling",
    items: "Claude Code, Claude API, OpenAI API, Cursor + MCP, Pinecone, pgvector",
  },
] as const;
