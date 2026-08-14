import { AmbientBackground } from "@/components/site/ambient-background";
import { NoiseOverlay } from "@/components/site/noise-overlay";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Portfolio } from "@/components/site/portfolio";
import { Process } from "@/components/site/process";
import { Philosophy } from "@/components/site/philosophy";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="bg-[#080808] text-white overflow-x-hidden antialiased selection:bg-neutral-800 selection:text-white min-h-screen relative flex-1 flex flex-col">
      <NoiseOverlay />
      <AmbientBackground />

      {/* Ambient Vignette Overlay */}
      <div
        className="fixed inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(8,8,8,0.85) 100%)",
        }}
      />

      <SiteNav />
      <Hero />
      <Portfolio />
      <Process />
      <Philosophy />
      <About />
      <Contact />
      <SiteFooter />
    </div>
  );
}
