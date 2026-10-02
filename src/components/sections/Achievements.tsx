import { motion } from 'framer-motion'
import { Em, Header } from '../ui/Header'

const achievements = [
  {
    title: 'Co-Lab',
    tag: 'Hackathon',
    text: 'Winner / 1st Place — student collaboration platform focused on skill-based team building and project discovery.',
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    tag: 'Verified',
    text: 'Completed a structured analytics workflow aligned to business analysis and visual reporting.',
  },
  {
    title: 'Product-building practice',
    tag: 'Built',
    text: 'Developed and iterated on web products across frontend, backend, and API-driven workflows.',
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header eyebrow="Achievements" title={<>Wins & <Em>milestones</Em></>} sub="Hackathon success and practical product work that reflects my development journey." />
        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[30px] border border-stroke bg-surface/30 p-6"
            >
              <span className="mb-5 inline-flex rounded-full border border-stroke bg-bg/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                {item.tag}
              </span>
              <h3 className="font-display text-3xl italic text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
