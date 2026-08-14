import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your brand, understanding your audience and business goals to lay a strategic foundation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Crafting meticulous, pixel-perfect interfaces that balance aesthetics with intuitive user experiences.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Bringing designs to life with cutting-edge tech, ensuring fluid animations and uncompromising performance.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative z-10 w-full px-6 py-32 max-w-5xl mx-auto flex flex-col items-center"
    >
      <Reveal className="mb-20">
        <h2 className="text-3xl sm:text-5xl font-thin tracking-tight text-neutral-100">
          Our Process
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        {STEPS.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.12} className="h-full">
            <div className="p-8 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 transition-transform duration-500 hover:scale-[1.02] h-full">
              <div className="text-3xl text-neutral-600 mb-6 font-thin font-mono">
                {step.number}
              </div>
              <h3 className="text-xl font-thin tracking-tight text-neutral-200 mb-4">
                {step.title}
              </h3>
              <p className="text-sm font-extralight leading-[1.8] text-neutral-400">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
