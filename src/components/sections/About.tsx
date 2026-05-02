import { motion } from 'framer-motion'
import { BarChart3, Code2, Layout } from 'lucide-react'
import { site } from '../../config/site'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

const pillars = [
  {
    icon: BarChart3,
    title: 'Data analytics & SQL',
    text: 'Practice from Deloitte-style simulations on Forage, coursework, and close attention to sane schemas, joins, and explainable summaries before charts.',
    accent: 'from-sky-500/25 to-transparent',
  },
  {
    icon: Code2,
    title: 'Web delivery @ ThoughtBot',
    text: 'Junior Web Developer in Bengaluru: HTML, CSS, JavaScript, and React—shipping UI that stays consistent with stakeholder expectations and codebase norms.',
    accent: 'from-emerald-500/25 to-transparent',
  },
  {
    icon: Layout,
    title: 'Design-aware engineering',
    text: 'Comfortable bridging functional requirements and visuals—layouts, typography, and component structure that remain maintainable under iteration.',
    accent: 'from-violet-500/25 to-transparent',
  },
]

const timeline = [
  { period: 'Now', label: 'ThoughtBot internship + MCA track · analytics certs (MongoDB, AWS ML)' },
  {
    period: 'Recent',
    label: 'Structured analysis practice & cloud/data credentials — see LinkedIn licenses',
  },
  { period: 'Focus', label: 'Roles spanning data analytics and modern web stacks' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-24 pt-8">
      <SectionReveal>
        <SectionHeading
          kicker="About"
          title="Analytics rigor meets thoughtful web craftsmanship"
          description={
            <>
              <strong className="font-medium text-zinc-300">{site.aboutLead}</strong> {site.aboutBody}{' '}
              Continue reading on{' '}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
              .
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <SectionReveal key={p.title} delay={i * 0.06}>
                <motion.article
                  className={`glass-card glass-card-hover relative h-full overflow-hidden rounded-2xl p-6`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br ${p.accent} blur-2xl`}
                  />
                  <Icon className="relative h-8 w-8 text-emerald-400/90" />
                  <h3 className="relative mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{p.text}</p>
                </motion.article>
              </SectionReveal>
            )
          })}
        </div>

        <SectionReveal delay={0.08}>
          <motion.div
            className="glass-card mt-10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-lg font-semibold text-white">Trajectory</h3>
            <ul className="mt-6 space-y-5 border-l border-white/10 pl-6">
              {timeline.map((t) => (
                <li key={t.label} className="relative">
                  <span className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 ring-4 ring-zinc-950" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
                    {t.period}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{t.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </SectionReveal>
      </SectionReveal>
    </section>
  )
}
