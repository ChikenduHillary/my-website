"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/site/reveal";

const CONTACT_DETAILS = [
  { label: "Email", value: "cikenduhill@gmail.com", href: "mailto:cikenduhill@gmail.com" },
  { label: "Phone", value: "+234 903 635 9000", href: "tel:+2349036359000" },
];

const SOCIAL_LINKS = [
  { label: "WhatsApp", icon: "mdi:whatsapp", href: "https://wa.me/2349036359000" },
  { label: "X", icon: "ri:twitter-x-fill", href: "https://x.com/ChikenduHillary" },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/hillary-chikendu-472422256/",
  },
];

type Status = "idle" | "submitting" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section
      id="contact"
      className="relative z-10 w-full px-6 py-32 max-w-5xl mx-auto flex flex-col items-center"
    >
      <Reveal className="mb-6">
        <h2 className="text-3xl sm:text-5xl font-thin tracking-tight text-neutral-100 text-center">
          Get In Touch
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mb-20">
        <p className="text-sm sm:text-base font-extralight leading-[1.8] text-neutral-400 max-w-md mx-auto text-center">
          Have a project in mind? Tell us about it, we usually reply within a
          couple of business days.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
        {/* Details panel */}
        <Reveal className="md:col-span-2 h-full">
        <div className="p-8 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 flex flex-col justify-between text-left h-full">
          <div className="flex flex-col gap-8">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label}>
                <div className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono mb-2">
                  {detail.label}
                </div>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-lg font-thin tracking-tight text-neutral-200 hover:text-white transition-colors duration-500 no-underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <div className="text-lg font-thin tracking-tight text-neutral-200">
                    {detail.value}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-12">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-black hover:border-neutral-100 transition-colors duration-500 no-underline"
              >
                <Icon icon={social.icon} className="text-lg" />
              </a>
            ))}
          </div>
        </div>
        </Reveal>

        {/* Form panel */}
        <Reveal className="md:col-span-3 h-full" delay={0.12}>
        <div className="relative p-px rounded-[2rem] bg-gradient-to-b from-neutral-800/60 to-transparent h-full">
          <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md rounded-[2rem] z-0" />
          <form
            onSubmit={handleSubmit}
            className="relative z-10 p-8 flex flex-col gap-6 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Name" htmlFor="contact-name">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 outline-none py-2 text-sm font-extralight text-neutral-200 placeholder:text-neutral-600 transition-colors duration-500"
                />
              </Field>
              <Field label="Email" htmlFor="contact-email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 outline-none py-2 text-sm font-extralight text-neutral-200 placeholder:text-neutral-600 transition-colors duration-500"
                />
              </Field>
            </div>

            <Field label="Message" htmlFor="contact-message">
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project"
                className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 outline-none py-2 text-sm font-extralight text-neutral-200 placeholder:text-neutral-600 transition-colors duration-500 resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-normal tracking-tight text-neutral-100 overflow-hidden transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 self-start mt-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <span className="relative z-10">
                {status === "idle" && "Send message"}
                {status === "submitting" && "Sending..."}
                {status === "sent" && "Message sent"}
              </span>
              <Icon
                icon={
                  status === "sent"
                    ? "solar:check-circle-linear"
                    : "solar:arrow-right-linear"
                }
                className="relative z-10 text-base opacity-60 group-hover:opacity-100 transition-all duration-500"
              />
            </button>
          </form>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className="text-xs font-normal tracking-tight uppercase text-neutral-600 font-mono"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
