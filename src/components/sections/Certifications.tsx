import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import { certificationsList } from '../../config/site'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

export function Certifications() {

  return (
    <section id="certifications" className="scroll-mt-24 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <SectionHeading
            kicker="Credentials"
            title="Licenses & certifications"
          />
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsList.map((c, i) => (
            <SectionReveal key={c.title} delay={0.04 + i * 0.03}>
              <motion.a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover flex h-full flex-col rounded-2xl p-5"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <div className="flex items-start justify-between gap-2">
                  <Award className="h-5 w-5 shrink-0 text-emerald-400/90" aria-hidden />

                  {c.tag && (
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                      {c.tag}
                    </span>
                  )}
                </div>

                <h4 className="mt-3 font-display text-[15px] font-semibold leading-snug text-white">
                  {c.title}
                </h4>

                <p className="mt-1 text-xs text-zinc-500">{c.issuer}</p>

                <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                  Issued {c.issued}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-400">
                  Open link
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
