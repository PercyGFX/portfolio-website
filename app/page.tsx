import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import { socials } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kelum Isuranga",
  jobTitle: "Software Engineer",
  url: "https://kelum.me",
  email: `mailto:${socials.email}`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Southern Province",
    addressCountry: "LK",
  },
  sameAs: [socials.github, socials.linkedin],
  knowsAbout: [
    "Go",
    "Node.js",
    "TypeScript",
    "Apache Kafka",
    "Next.js",
    "PostgreSQL",
    "AWS",
    "Kubernetes",
  ],
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[42rem] px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
