"use client";

import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-neutral-900/40 backdrop-blur-md border-b border-neutral-800/60"
          : "py-8 mix-blend-difference"
      }`}
    >
      <div className="text-sm tracking-tighter font-thin uppercase text-neutral-200">
        HILLARY
      </div>
      <div className="flex gap-8 text-xs font-normal tracking-tight uppercase font-mono text-neutral-500">
        <a
          href="#portfolio"
          className="hover:text-neutral-200 transition-colors duration-500"
        >
          Portfolio
        </a>
        <a
          href="#process"
          className="hover:text-neutral-200 transition-colors duration-500"
        >
          Process
        </a>
        <a
          href="#about"
          className="hover:text-neutral-200 transition-colors duration-500"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-neutral-200 transition-colors duration-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
