import { Icon } from "@iconify/react";
import { Reveal } from "@/components/site/reveal";

const EXPERIENCE = [
  {
    role: "Next.js / Redux Developer",
    company: "TheraSwift",
    period: "2023, 2025",
    description:
      "Own React-based projects end to end, from inception through deployment, and build reusable component libraries that speed up delivery across the team.",
  },
  {
    role: "Front-End Developer",
    company: "MEGA einfalls · Port Harcourt",
    period: "2021, 2023",
    description:
      "Built and maintained multiple React web applications, drove performance optimization work, and ran code reviews to keep quality high across the codebase.",
  },
];

const SKILL_GROUPS = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "HTML", "CSS"] },
  { label: "Frontend", items: ["React", "Redux", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "NestJS", "REST APIs", "MongoDB", "PostgreSQL"] },
  { label: "Blockchain", items: ["Solana"] },
  { label: "Mobile", items: ["React Native", "Cross-Platform Apps"] },
  { label: "Tools", items: ["Git", "Docker", "Kubernetes", "CI/CD", "Agile/Scrum"] },
];

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full px-6 py-32 max-w-5xl mx-auto flex flex-col items-center"
    >
      <Reveal className="mb-20">
        <h2 className="text-3xl sm:text-5xl font-thin tracking-tight text-neutral-100">
          About
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full mb-6">
        {/* Bio panel */}
        <Reveal className="md:col-span-3">
          <div className="p-8 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 flex flex-col justify-between text-left h-full">
            <div>
              <h3 className="text-2xl font-thin tracking-tight text-neutral-100 mb-1">
                Hillary Chikendu
              </h3>
              <p className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mb-6">
                Fullstack React / Next.js Developer
              </p>
              <p className="text-sm font-extralight leading-[1.8] text-neutral-400">
                I&apos;m a fullstack developer with 5 years of experience building
                high-quality, user-friendly web applications. Most of that time has
                been spent deep in the React ecosystem, from pixel-perfect
                frontends to the backend systems and blockchain integrations behind
                them, and I&apos;m still as eager to learn new things as I was on
                day one.
              </p>
            </div>

            <a
              href="/cv.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-normal tracking-tight text-neutral-100 transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] no-underline self-start mt-8 w-full sm:w-auto"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Icon icon="solar:download-linear" className="text-base" />
              Download CV
            </a>
          </div>
        </Reveal>

        {/* Quick facts panel */}
        <Reveal className="md:col-span-2" delay={0.12}>
          <div className="p-8 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 flex flex-col justify-center gap-8 text-left h-full">
            <div>
              <div className="text-3xl font-thin tracking-tight text-neutral-100">
                5+
              </div>
              <div className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mt-1">
                Years of experience
              </div>
            </div>
            <div>
              <div className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mb-2">
                Education
              </div>
              <div className="text-sm font-extralight text-neutral-300">
                Electronics Engineering
              </div>
              <div className="text-xs font-extralight text-neutral-500 mt-1">
                Federal University of Technology, Owerri
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
        {EXPERIENCE.map((job, index) => (
          <Reveal key={job.role + job.company} delay={index * 0.12} className="h-full">
            <div className="p-8 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 text-left transition-transform duration-500 hover:scale-[1.02] h-full">
              <p className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mb-4">
                {job.period}
              </p>
              <h3 className="text-lg font-thin tracking-tight text-neutral-200">
                {job.role}
              </h3>
              <p className="text-xs text-neutral-500 font-normal uppercase mt-1 mb-4 font-mono">
                {job.company}
              </p>
              <p className="text-sm font-extralight leading-[1.8] text-neutral-400">
                {job.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Skills */}
      <Reveal className="w-full">
        <div className="p-8 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 w-full text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mb-3">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-neutral-800 text-xs font-extralight text-neutral-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
