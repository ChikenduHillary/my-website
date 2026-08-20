"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const NAV_LINKS = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
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

        <div className="hidden md:flex gap-8 text-xs font-normal tracking-tight uppercase font-mono text-neutral-500">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-200 transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex items-center justify-center w-9 h-9 -mr-2 text-neutral-200 cursor-pointer"
        >
          <Icon icon="solar:hamburger-menu-linear" className="text-2xl" />
        </button>
      </nav>

      {/* Mobile side nav */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[80vw] bg-neutral-950/95 backdrop-blur-xl border-l border-neutral-800/60 flex flex-col p-8 transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="self-end w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-neutral-100 transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="solar:close-circle-linear" className="text-2xl" />
          </button>

          <div className="flex flex-col gap-6 mt-12 text-left">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-thin tracking-tight text-neutral-300 hover:text-white transition-colors duration-300 uppercase font-mono no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
