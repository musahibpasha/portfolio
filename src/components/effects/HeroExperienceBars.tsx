import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { easing, staggerContainer, staggerItem } from '../../lib/motion'

const TRACKS = [
  { label: 'Data analysis', pct: 0.9 },
  { label: 'SQL & databases', pct: 0.86 },
  { label: 'Python workflows', pct: 0.8 },
  { label: 'Analytics simulations', pct: 0.78 },
  { label: 'Web delivery (ThoughtBot-era)', pct: 0.55 },
]

/**
 * Skeleton-style loaders + progressive fill — “loading experience” visual.
 */
export function HeroExperienceBars() {
  return (
    <motion.div
      className="mt-10 readme-panel px-5 py-4 sm:px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -12%' }}
    >
      <motion.p
        variants={staggerItem}
        className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b949e]"
      >
        Loading experience · skill trajectory
      </motion.p>
      <ul className="mt-4 space-y-4">
        {TRACKS.map((row) => (
          <motion.li key={row.label} variants={staggerItem} className="space-y-1.5">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#c9d1d9]">
              <span>{row.label}</span>
              <span className="text-[#484f58] animate-pulse">···</span>
            </div>
            <AnimatedTrack target={row.pct} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function AnimatedTrack({ target }: { target: number }) {
  const p = useMotionValue(0)
  const width = useTransform(p, (v) => `${Math.round(v * 100)}%`)

  useEffect(() => {
    const controls = animate(p, target, {
      duration: 1.35,
      delay: 0.12,
      ease: easing,
    })
    return () => controls.stop()
  }, [p, target])

  return (
    <div className="relative h-2 overflow-hidden rounded-full bg-[#21262d]">
      <div
        aria-hidden
        className="animate-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />
      <motion.div
        className="relative h-full rounded-full bg-gradient-to-r from-[#238636]/90 via-[#388bfd]/90 to-[#8957e5]/95 shadow-[0_0_24px_-4px_rgba(56,139,253,0.45)]"
        style={{ width }}
      />
    </div>
  )
}
