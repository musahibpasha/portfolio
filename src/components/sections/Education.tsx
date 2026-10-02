import { motion } from 'framer-motion'
import { Em, Header } from '../ui/Header'

const items = [
  {
    title: 'Master of Computer Applications (MCA)',
    school: 'St. Claret College (Autonomous), Bengaluru',
    period: 'Sep 2025 – Present',
    detail: 'Postgraduate study focused on software engineering, databases, and modern application development.',
  },
  {
    title: 'Bachelor of Computer Science, Web Development',
    school: 'Acharya Institute of Management of Science',
    period: 'Jan 2022 – Jan 2025',
    detail: 'GPA: 7.6 | Built a strong foundation in programming, web development, and applied project work.',
  },
]

export function Education() {
  return (
    <section id="education" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header eyebrow="Education" title={<>Academic <Em>background</Em></>} sub="Formal learning alongside hands-on product-building work." />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[32px] border border-stroke bg-surface/30 p-6 md:p-8"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.22em] text-muted">{item.period}</span>
              </div>
              <h3 className="font-display text-2xl italic text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.school}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
