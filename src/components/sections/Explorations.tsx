import { motion } from 'framer-motion'
import { Em, Header } from '../ui/Header'

const skillGroups = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', items: ['Supabase', 'MongoDB', 'SQL'] },
  { title: 'Programming', items: ['JavaScript', 'Python'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Postman'] },
  { title: 'AI / Data', items: ['AI APIs', 'Python', 'Data Analytics', 'SQL', 'Power BI', 'Excel'] },
]

export function Explorations() {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header eyebrow="Skills" title={<>Core <Em>stack</Em></>} sub="Full-stack web development remains my primary identity, with AI and data capabilities as supporting strengths." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[30px] border border-stroke bg-surface/30 p-5"
            >
              <h3 className="font-display text-2xl italic text-text-primary">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-stroke bg-bg/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
