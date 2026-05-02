import { AnimatePresence, motion } from 'framer-motion'
import { easing, staggerContainer, staggerItem } from '../../lib/motion'

type LoadingScreenProps = {
  loading: boolean
}

const rows = ['hero', 'about', 'skills', 'projects', 'education', 'github', 'contact']

export function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-12 bg-zinc-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [...easing] }}
        >
          <div className="flex w-full max-w-xs flex-col items-center gap-5 px-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-14 w-14 rounded-full border-2 border-white/10 border-t-emerald-400"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex w-full flex-col gap-4"
            >
              <motion.p
                variants={staggerItem}
                className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500"
              >
                Loading portfolio…
              </motion.p>

              {rows.map((label, i) => (
                <motion.div key={label} variants={staggerItem} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-medium text-zinc-500">
                    <span>{label}</span>
                    <span className="text-zinc-700">···</span>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="relative h-full origin-left rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: Math.min(0.35 + i * 0.1, 1) }}
                      transition={{
                        duration: 0.85 + i * 0.08,
                        delay: 0.14 + i * 0.05,
                        ease: [...easing],
                      }}
                    />
                    <div
                      aria-hidden
                      className="animate-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    />
                  </div>
                </motion.div>
              ))}

              <motion.p
                variants={staggerItem}
                className="pt-2 text-center text-[11px] text-zinc-600"
              >
                Smooth motion & dark UI ahead
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
