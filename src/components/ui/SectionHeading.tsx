import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  /** Small caps label above the title */
  kicker: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionHeading({ kicker, title, description, className = '' }: Props) {
  return (
    <motion.div
      className={`mb-10 md:mb-14 ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400/90 md:text-xs">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-[15px]">
          {description}
        </div>
      ) : null}
    </motion.div>
  )
}
