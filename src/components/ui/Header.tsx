import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { GradButton } from './GradButton'

type Props = { eyebrow: string; title: ReactNode; sub: string; cta?: { label: string; href: string }; center?: boolean }

export function Header({ eyebrow, title, sub, cta, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between ${center ? 'items-center text-center md:flex-col md:items-center' : ''}`}
    >
      <div>
        <div className={`mb-5 flex items-center gap-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</span>
        </div>
        <h2 className="font-body text-4xl font-light tracking-tight md:text-6xl">{title}</h2>
        <p className={`mt-4 max-w-md text-sm text-muted md:text-base ${center ? 'mx-auto' : ''}`}>{sub}</p>
      </div>
      {cta && (
        <GradButton href={cta.href} className="hidden md:inline-flex">
          {cta.label} <span>↗</span>
        </GradButton>
      )}
    </motion.div>
  )
}

export const Em = ({ children }: { children: ReactNode }) => (
  <em className="font-display italic">{children}</em>
)
