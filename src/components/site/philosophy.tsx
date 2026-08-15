import { Reveal } from "@/components/site/reveal";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative z-10 w-full px-6 py-32 max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      <Reveal className="mb-10">
        <h2
          className="text-3xl sm:text-5xl font-thin tracking-tight text-neutral-100"
          style={{ textShadow: "0 4px 28px rgba(0,0,0,0.65)" }}
        >
          The Philosophy
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mb-12">
        <p className="text-base sm:text-lg font-extralight leading-[1.8] text-neutral-400">
          I care about the parts of a product most people never see, the
          component that&apos;s actually reusable, the API that fails
          gracefully, the review that catches the edge case before a user
          does. Good engineering is quiet: it just works, and it keeps
          working as the codebase grows. That&apos;s the standard I hold every
          project to, whether it&apos;s a pixel-perfect frontend or a smart
          contract that has to be right the first time.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-normal tracking-tight text-neutral-100 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-500 no-underline"
        >
          Let&apos;s build something
        </a>
      </Reveal>
    </section>
  );
}
