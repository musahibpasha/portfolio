import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ['Design', 'Create', 'Inspire']

export function Loading({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [w, setW] = useState(0)

  useEffect(() => {
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 2700, 1)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onComplete, 400)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  useEffect(() => {
    const id = setInterval(() => setW((i) => (i + 1) % words.length), 900)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] bg-bg">
      <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        Portfolio
      </motion.span>
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={w}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {words[w]}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-10 right-6 font-display text-6xl tabular-nums md:right-10 md:text-8xl lg:text-9xl">
        {String(count).padStart(3, '0')}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{ transform: `scaleX(${count / 100})`, boxShadow: '0 0 8px rgba(137,170,204,0.35)' }}
        />
      </div>
    </div>
  )
}
