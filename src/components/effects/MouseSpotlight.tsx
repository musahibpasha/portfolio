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
  const sx = useSpring(mx, { stiffness: 350, damping: 12 })
  const sy = useSpring(my, { stiffness: 350, damping: 12 })

  // Trail positions - lag behind the main cursor
  const sx1 = useSpring(mx, { stiffness: 300, damping: 18 })
  const sy1 = useSpring(my, { stiffness: 300, damping: 18 })

  const sx2 = useSpring(mx, { stiffness: 250, damping: 25 })
  const sy2 = useSpring(my, { stiffness: 250, damping: 25 })

  const sx3 = useSpring(mx, { stiffness: 200, damping: 32 })
  const sy3 = useSpring(my, { stiffness: 200, damping: 32 })

  // Main bright glow + trail glows combined
  const backgroundImage = useMotionTemplate`
    radial-gradient(400px circle at ${sx3}px ${sy3}px, rgba(88,166,255,0.05), transparent 60%),
    radial-gradient(500px circle at ${sx2}px ${sy2}px, rgba(88,166,255,0.1), transparent 58%),
    radial-gradient(600px circle at ${sx1}px ${sy1}px, rgba(88,166,255,0.15), transparent 55%),
    radial-gradient(750px circle at ${sx}px ${sy}px, rgba(88,166,255,0.25), transparent 52%)
  `

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
