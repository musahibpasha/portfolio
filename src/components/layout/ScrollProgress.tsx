import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left rounded-b-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 shadow-[0_0_20px_-2px_rgba(52,211,153,0.45)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
