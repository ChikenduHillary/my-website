"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/site/reveal";

type Project = {
  slug: string;
  title: string;
  tags: string;
  icon: string;
  image?: string;
  description: string;
  liveHref?: string;
  githubHref?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "clipsync",
    title: "ClipSync",
    tags: "Sync • Cross-Platform",
    icon: "solar:clipboard-linear",
    image: "/projects/clipsync-2.png",
    description:
      "A clipboard sync app that copies on one device and pastes on another, instantly. Built with Kotlin for Android and a Tauri + Rust desktop client, synced in real time over Supabase, with clip history, offline queueing, and multi-device support.",
    liveHref: "https://getclipsync.vercel.app/",
  },
  {
    slug: "suburbia-skateboards",
    title: "Suburbia Skateboards",
    tags: "Web3 • Three.js",
    icon: "solar:cube-linear",
    image: "/projects/suburbia-skateboards.png",
    description:
      "A 3D skateboard customizer that lets users design decks, trucks, wheels, and bolts in real time, then mint their build as an NFT on Solana. Built with Next.js, Three.js/React Three Fiber, and Convex, with Metaplex handling minting and Civic handling wallet auth.",
    liveHref: "https://suburbia-skate-board.vercel.app/",
    githubHref: "https://github.com/ChikenduHillary/suburbia-skate-board",
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    tags: "LLM • NLP",
    icon: "solar:cpu-linear",
    image: "/projects/ai-engineering.png",
    description:
      "A hands-on collection of notebooks exploring modern NLP and LLMs, GPT models, HuggingFace Transformers, BERT-based question answering, and XLNET text classification, alongside classic NLP work like sentiment analysis, named entity recognition, and topic modelling.",
    githubHref: "https://github.com/ChikenduHillary/ai-engineering",
  },
  {
    slug: "repeat-ai",
    title: "Repeat.ai",
    tags: "AI • Video",
    icon: "solar:video-frame-linear",
    image: "/projects/repeat-ai-2.png",
    description:
      "An AI video studio that takes raw footage from good to great, cutting CGI costs with generative models for ideation and studio-quality enhancement, so creators can produce videos people want to watch again and again.",
    liveHref: "https://repeatt-ai.vercel.app/",
    githubHref: "https://github.com/ChikenduHillary/repeatt-ai",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative z-10 w-full px-6 py-32 max-w-5xl mx-auto flex flex-col items-center"
    >
      <Reveal className="mb-20">
        <h2
          className="text-3xl sm:text-5xl font-thin tracking-tight text-neutral-100"
          style={{ textShadow: "0 4px 28px rgba(0,0,0,0.65)" }}
        >
          Selected Works
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.12} className="h-full">
          <Dialog>
            <DialogTrigger
              className="group block w-full h-full text-left relative p-px rounded-[2rem] bg-gradient-to-b from-neutral-800/60 to-transparent transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
            >
              <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md rounded-[2rem] z-0" />
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="w-full h-56 sm:h-72 rounded-3xl bg-neutral-800/40 mb-6 overflow-hidden relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                      <Icon
                        icon={project.icon}
                        className="text-5xl text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500"
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-auto px-2 pb-2">
                  <div className="text-left">
                    <h3 className="text-xl font-thin tracking-tight text-neutral-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-normal uppercase mt-2 font-mono">
                      {project.tags}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-neutral-100 group-hover:text-black transition-colors duration-500">
                    <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent
              showCloseButton={false}
              className="w-full max-w-lg sm:max-w-xl p-0 gap-0 rounded-[2rem] bg-neutral-950/95 backdrop-blur-xl ring-1 ring-neutral-800 text-neutral-200 overflow-hidden"
            >
              <div className="w-full h-56 sm:h-72 bg-neutral-800/40 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 640px) 640px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 flex items-center justify-center">
                    <Icon icon={project.icon} className="text-6xl text-neutral-600" />
                  </div>
                )}
                <DialogClose className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-black/70 transition-colors duration-300">
                  <Icon icon="solar:close-circle-linear" className="text-lg" />
                </DialogClose>
              </div>

              <div className="p-8 flex flex-col gap-6">
                <div>
                  <DialogTitle className="text-2xl font-thin tracking-tight text-neutral-100 font-sans">
                    {project.title}
                  </DialogTitle>
                  <p className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mt-2">
                    {project.tags}
                  </p>
                </div>

                <DialogDescription className="text-sm font-extralight leading-[1.8] text-neutral-400">
                  {project.description}
                </DialogDescription>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-normal tracking-tight text-neutral-100 transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] no-underline"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <Icon icon="solar:arrow-right-up-linear" className="text-base" />
                      View live
                    </a>
                  )}
                  {project.githubHref && (
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-normal tracking-tight text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-neutral-200 transition-all duration-500 no-underline"
                    >
                      <Icon icon="mdi:github" className="text-base" />
                      View code
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
