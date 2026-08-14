export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-50 flex items-center justify-between p-8 mix-blend-difference pointer-events-none w-full">
      <div className="text-xs font-normal tracking-tight text-neutral-600 uppercase font-mono">
        © {year} Studio
      </div>
      <div className="text-xs font-normal tracking-tight text-neutral-600 uppercase flex items-center gap-2 font-mono">
        <span className="w-1 h-1 rounded-full bg-neutral-400" />
        Online
      </div>
    </footer>
  );
}
