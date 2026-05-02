import { motion } from 'framer-motion'
import { Award, Briefcase, Building2, GraduationCap, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { site } from '../../config/site'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

type ExpItem = {
  icon: LucideIcon
  title: string
  period: string
  subtitle?: string
  points: string[]
}

/** Periods aligned with public LinkedIn (ThoughtBot ongoing; Peenya Nov–Dec 2024) */
const items: ExpItem[] = [
  {
    icon: GraduationCap,
    title: 'MCA — St Claret College',
    period: 'In progress',
    subtitle: 'Master of Computer Applications · Bengaluru',
    points: [
      'Postgraduate CS with emphasis on software engineering, databases, and quantitative coursework.',
      'Supports a dual lane: sharper analytics readiness plus continued React / web coursework.',
    ],
  },
  {
    icon: Briefcase,
    title: 'Junior Web Developer — ThoughtBot',
    period: 'Feb 2025 – Present',
    subtitle:
      'LinkedIn · Bengaluru · Engineering & Technical · staffing & recruiting / software consulting context',
    points: [
      'Building and maintaining UI with HTML, CSS, JavaScript, and React in a professional sprint rhythm.',
      'Collaborating inside a structured engineering cadence alongside placement-oriented delivery goals.',
    ],
  },
  {
    icon: Building2,
    title: 'Data Manager — Peenya Industries Association',
    period: 'Nov 2024 – Dec 2024',
    subtitle: 'Research · nonprofit / industry association · Bengaluru (per LinkedIn)',
    points: [
      'Month-long stewardship of research-aligned data workflows and coordination within a civic-industry NGO setting.',
      'Experience translating fragmented operational inputs into consistent records for stakeholder reporting.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'BCA — foundational degree',
    period: 'Completed',
    subtitle: 'Bachelor of Computer Applications · underpins MCA + LinkedIn-listed programming base',
    points: [
      'Early grounding in programming (e.g., C exposure), introductory Python, databases, and project work.',
      'Feeds the same narrative summarized on LinkedIn: CS literacy + web + willingness to iterate on design-heavy deliverables.',
    ],
  },
  {
    icon: Award,
    title: 'Certifications',
    period: '2023 – Present',
    points: [
      'Deloitte/Forage simulation, MongoDB learning paths, and more—have a dedicated Certifications section in the nav with direct outbound links.',
    ],
  },
]

export function Experience() {
  return (
    <section id="education" className="scroll-mt-24 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <SectionHeading
            kicker="Education & experience"
            title="Timeline"
            description={
              <>
                Roles and certs mirror my{' '}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 underline-offset-2 hover:underline"
                >
                  LinkedIn profile
                </a>
                {' — '}ThoughtBot internship, brief data-manager engagement at Peenya Industries Association, MCA @ St Claret College, plus analytics-heavy certifications.
              </>
            }
          />
        </SectionReveal>

        <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-4 sm:pl-10">
          <motion.div
            className="pointer-events-none absolute left-[-1px] top-0 h-24 w-px bg-gradient-to-b from-emerald-400/80 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <ul className="space-y-10">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <SectionReveal key={item.title} delay={i * 0.05}>
                  <li className="relative">
                    <motion.span
                      className="absolute -left-[calc(2rem+4px)] top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-emerald-300 shadow-[0_0_0_8px_rgba(3,7,18,0.9)] sm:-left-[2.6rem]"
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 400,
                          damping: 26,
                          delay: 0.05 * i,
                        },
                      }}
                      viewport={{ once: true }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>

                    <motion.div
                      className="glass-card rounded-2xl p-6"
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                          {item.period}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="mt-1 text-sm text-zinc-500">{item.subtitle}</p>
                      )}
                      <ul className="mt-4 space-y-2">
                        {item.points.map((p) => (
                          <li key={p} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
                            <Target className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500/70" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </li>
                </SectionReveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
