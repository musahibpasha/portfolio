import { motion } from 'framer-motion'
import { site } from '../../config/site'
import { Em, Header } from '../ui/Header'

const items = [
  {
    title: 'Junior Web Developer Intern',
    company: 'ThoughtBot',
    period: 'Feb 2025 – Mar 2025',
    detail: 'Built and maintained interactive boards in Next.js while working on dynamic routing and server-side rendering tasks.',
    points: [
      'Built and maintained interactive boards in Next.js.',
      'Worked with dynamic routing and server-side rendering.',
      'Tested and debugged across browsers and devices.',
      'Participated in code reviews.',
      'Contributed toward maintaining a clean and scalable codebase.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header
          eyebrow="Experience"
          title={<>Professional <Em>experience</Em></>}
          sub="A focused internship experience in a real web development workflow."
          cta={{ label: 'Download resume', href: site.resume }}
        />

        <div className="relative border-l border-stroke pl-6 md:pl-10">
          {items.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative mb-6 rounded-[30px] border border-stroke bg-surface/30 p-6 transition-colors hover:bg-surface"
            >
              <span className="accent-gradient absolute -left-[31px] top-8 h-3 w-3 rounded-full md:-left-[47px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl italic">{e.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">{e.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{e.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{e.detail}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {e.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <a href={site.resume} className="mt-4 inline-block text-sm text-muted underline md:hidden">Download resume ↗</a>
      </div>
    </section>
  )
}
