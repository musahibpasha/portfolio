import { motion } from 'framer-motion'
import { BarChart3, Code2, Layout } from 'lucide-react'
import { site } from '../../config/site'
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
        <div className="mb-12 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="inline-block rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 font-display text-xl font-semibold text-white backdrop-blur-md">
              About Me
            </h2>
          </motion.div>
        </div>
      </SectionReveal>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Profile Image */}
        <SectionReveal delay={0.05}>
          <motion.div
            className="relative h-96 w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/20 blur-3xl" />
            <div className="glass-card relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-500/10">
              <img 
                src="/IMG_20241028_131918_026.webp"
                alt="Profile picture of musahib"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </SectionReveal>

        {/* Content */}
        <div className="space-y-8">
          {/* Who I Am */}
          <SectionReveal delay={0.08}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-white">
                  <span className="h-px w-6 bg-emerald-500" />
                  Who I Am
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  I'm a Full-Stack Developer and Data Enthusiast pursuing an MCA in Data Analytics at St Claret College. With experience in web development at ThoughtBot and certifications in data analytics, I focus on building clean, scalable solutions that bridge analytics insights with intuitive UI.
                </p>
              </div>
            </motion.div>
          </SectionReveal>

          {/* What I Do */}
          <SectionReveal delay={0.10}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-white">
                  <span className="h-px w-6 bg-emerald-500" />
                  What I Do
                </h3>
                <div className="space-y-3 text-sm text-zinc-400">
                  {pillars.map((p) => (
                    <p key={p.title}>
                      <strong className="text-white">{p.title}:</strong> {p.text}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 transition hover:border-emerald-500/50 hover:bg-emerald-500/15"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue on LinkedIn
              <span>→</span>
            </motion.a>
          </SectionReveal>
        </div>
      </div>

      {/* Trajectory */}
      <SectionReveal delay={0.14}>
        <motion.div
          className="glass-card mt-12 rounded-2xl p-8"
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
    </section>
  )
}
