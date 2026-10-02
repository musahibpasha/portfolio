import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { site } from '../../config/site'
import { GradButton } from '../ui/GradButton'
import { HlsVideo } from '../ui/HlsVideo'

const roles = ['Full-Stack Web Developer', 'Frontend Engineer', 'MCA Student', 'AI Product Builder']

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null)
  const [role, setRole] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.name-reveal', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 })
        .fromTo(
          '.blur-in',
          { opacity: 0, filter: 'blur(10px)', y: 20 },
          { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
          0.3,
        )
    }, root)
    return () => ctx.revert()
  }, [ready])

  return (
    <section id="hero" ref={root} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HlsVideo />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted opacity-0">{site.badge}</p>
        <h1 className="name-reveal mb-6 max-w-5xl font-display text-5xl italic leading-[0.9] tracking-tight opacity-0 md:text-7xl lg:text-8xl">
          Mohammad Musahib <span className="text-text-primary">Pasha</span>
        </h1>
        <p className="blur-in mb-4 text-base opacity-0 md:text-xl">
          I’m an{' '}
          <span key={role} className="inline-block animate-role-fade-in font-display italic text-text-primary">
            {roles[role]}
          </span>{' '}
          building real products.
        </p>
        <p className="blur-in mb-10 max-w-2xl text-sm text-muted opacity-0 md:text-base">{site.heroSubtitle}</p>

        <div className="blur-in mb-8 flex flex-wrap items-center justify-center gap-3 opacity-0">
          {site.stackBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-stroke bg-surface/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted">
              {badge}
            </span>
          ))}
        </div>

        <div className="blur-in flex flex-wrap items-center justify-center gap-4 opacity-0">
          <GradButton href="#projects" variant="solid">View Projects</GradButton>
          <GradButton href={site.resume} variant="outline" external>Download Resume</GradButton>
          <GradButton href={site.github} variant="pill" external>GitHub</GradButton>
          <GradButton href={site.linkedin} variant="pill" external>LinkedIn</GradButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">SCROLL</span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <div className="accent-gradient absolute inset-x-0 top-0 h-1/2 animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
