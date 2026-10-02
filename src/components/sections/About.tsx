import { motion } from 'framer-motion'
import { site } from '../../config/site'
import { Em, Header } from '../ui/Header'

const pillars = [
  ['Full-stack focus', 'I build frontend interfaces and backend/API flows that connect to real product logic and data.'],
  ['React + modern web', 'I work with React, TypeScript, and modern UI patterns to build clean, responsive, product-ready experiences.'],
  ['AI + practical products', 'I enjoy shaping ideas into working tools, including API-driven workflows and AI-assisted features.'],
]

export function About() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header eyebrow="About" title={<>A bit <Em>about me</Em></>} sub={site.badge.trim()} />
        <div className="grid items-start gap-10 md:grid-cols-12">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/IMG_20241028_131918_026.webp"
            alt={site.name}
            className="aspect-[4/5] w-full max-w-sm rounded-3xl border border-stroke object-cover md:col-span-4"
          />
          <div className="md:col-span-8">
            <p className="text-xl font-light leading-relaxed md:text-2xl">{site.aboutLead}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{site.aboutBody}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map(([t, d]) => (
                <div key={t} className="rounded-3xl border border-stroke bg-surface/30 p-5 transition-colors hover:bg-surface">
                  <h3 className="font-display text-xl italic">{t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
