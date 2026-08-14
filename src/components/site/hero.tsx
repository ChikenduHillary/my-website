"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const TITLE_WORDS = ["Building", "fullstack", "products", "that", "scale"];
const GRADIENT_WORDS = new Set(["fullstack", "scale"]);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(".gsap-entrance", { y: 24, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.2,
      });

      tl.to(".gsap-word", {
        y: "0%",
        opacity: 1,
        duration: 1.4,
        stagger: 0.12,
      }).to(
        ".gsap-entrance",
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          clearProps: "all",
        },
        "-=1.0",
      );

      gsap.to("#pulse-dot", {
        opacity: 0.2,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(["#metric-1", "#metric-2", "#metric-3"], {
        backgroundPosition: "200% center",
        duration: 8,
        repeat: -1,
        ease: "none",
        stagger: 1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-6 text-center"
    >
      {/* Precision Badge */}
      <div className="gsap-entrance inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-md mt-16 md:mt-28 mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <span
          id="pulse-dot"
          className="w-1.5 h-1.5 rounded-full bg-neutral-300 shadow-[0_0_8px_rgba(200,200,200,0.5)]"
        />
        <span className="text-xs font-normal tracking-tight uppercase text-neutral-400 font-mono">
          Available for projects
        </span>
      </div>

      {/* Masked Reveal H1 */}
      <h1
        className="text-5xl md:text-7xl font-thin tracking-tight leading-[1.05] mb-6 text-neutral-100 max-w-4xl mx-auto flex flex-wrap justify-center gap-x-[0.25em] gap-y-2"
        style={{ textShadow: "0 4px 28px rgba(0,0,0,0.65)" }}
      >
        {TITLE_WORDS.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-2">
            <span
              className="gsap-word inline-block translate-y-[110%] opacity-0 will-change-transform"
              style={
                GRADIENT_WORDS.has(word.toLowerCase())
                  ? {
                      backgroundImage:
                        "linear-gradient(135deg, #ffffff, #e5e5e5, #b5b5b5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 200,
                    }
                  : undefined
              }
            >
              {word}
            </span>
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p className="gsap-entrance text-sm sm:text-base font-extralight leading-[1.8] text-neutral-400 max-w-md mx-auto mb-12">
        5 years building high-quality, user-friendly web applications, from
        pixel-perfect React frontends to blockchain-powered products on
        Solana.
      </p>

      {/* CTAs */}
      <div className="gsap-entrance flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 w-full">
        <a
          href="#portfolio"
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-normal tracking-tight text-neutral-100 overflow-hidden transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto no-underline"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <span className="relative z-10">View portfolio</span>
          <Icon
            icon="solar:arrow-right-linear"
            className="relative z-10 text-base opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500"
          />
          <div
            className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
              padding: 1,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-normal tracking-tight text-neutral-500 border border-transparent hover:border-neutral-800 hover:text-neutral-200 hover:bg-neutral-900/30 transition-all duration-500 w-full sm:w-auto no-underline"
        >
          Get in touch
        </a>
      </div>

      {/* Metrics */}
      <div className="gsap-entrance flex items-center justify-center gap-10 sm:gap-24 w-full">
        <Metric id="metric-1" value="5+" label="Years Experience" />
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        <Metric id="metric-2" value="4" label="Products Shipped" />
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        <Metric id="metric-3" value="Solana" label="Blockchain Native" />
      </div>
    </main>
  );
}

function Metric({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        id={id}
        className="text-xl sm:text-2xl font-thin tracking-tight text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(135deg, #ffffff, #c2c2c2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}
      >
        {value}
      </div>
      <div className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono">
        {label}
      </div>
    </div>
  );
}
