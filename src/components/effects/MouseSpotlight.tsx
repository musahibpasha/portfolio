import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { type PointerEvent, type ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/** Cursor-follow radial glow behind readme-style panels */
export function MouseSpotlight({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(400)
  const my = useMotionValue(140)
  const sx = useSpring(mx, { stiffness: 260, damping: 32 })
  const sy = useSpring(my, { stiffness: 260, damping: 32 })

  const backgroundImage = useMotionTemplate`radial-gradient(580px circle at ${sx}px ${sy}px, rgba(88,166,255,0.11), transparent 52%)`

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set(r.width / 2)
    my.set(r.height * 0.25)
  }, [mx, my])

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set(r.width / 2)
    my.set(r.height * 0.22)
  }

  return (
    <div
      ref={ref}
      className={`relative isolate ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ backgroundImage }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
