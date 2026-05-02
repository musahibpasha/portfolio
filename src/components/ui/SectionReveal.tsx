import { type MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  blurred?: boolean
} & Omit<MotionProps, 'children'>

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  blurred = false,
  ...motionProps
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={
        blurred
          ? { opacity: 0, y: 32, filter: 'blur(10px)' }
          : { opacity: 0, y: 28 }
      }
      whileInView={
        blurred
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
