import { site } from '../../config/site'

export function BadgeMarquee() {
  const doubled = [...site.stackBadges, ...site.stackBadges]

  return (
    <div className="relative mx-[-20px] overflow-hidden px-5 sm:mx-0 sm:px-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-950 to-transparent sm:w-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-950 to-transparent sm:w-20"
      />
      <div className="flex w-max max-w-none animate-marquee gap-3 py-1 font-mono">
        {doubled.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition hover:border-emerald-500/40 hover:text-zinc-200 sm:text-[11px]"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
