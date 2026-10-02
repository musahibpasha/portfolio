import { motion } from 'framer-motion'

const stats = [
  { n: '5+', l: 'Certifications' },
  { n: '2', l: 'Degrees · BCA & MCA' },
  { n: '1', l: 'Internship · ThoughtBot' },
]

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 text-center md:grid-cols-3 md:px-10 lg:px-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <p className="font-display text-6xl italic md:text-8xl">{s.n}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted">{s.l}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
