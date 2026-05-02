import { motion } from 'framer-motion'

/** Premium ambient: soft gradient blurs + grid (modern portfolio backdrop) */
export function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030712]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(16,185,129,0.12),transparent_58%)]" />
      <motion.div
        className="absolute -left-[15%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-emerald-500/20 blur-[120px]"
        animate={{ opacity: [0.35, 0.55, 0.38], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[10%] top-[25%] h-[32rem] w-[32rem] rounded-full bg-sky-500/15 blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.34], x: [0, -24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[25%] h-[28rem] w-[28rem] rounded-full bg-violet-500/14 blur-[90px]"
        animate={{ opacity: [0.25, 0.42, 0.3], y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-grid opacity-35" />
    </div>
  )
}
