import { motion } from 'framer-motion'
import { site } from '../../config/site'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

const u = site.githubUsername

const statsImg = `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=dark&hide_border=true&bg_color=0d111700&title_color=e4e4e7&icon_color=34d399&text_color=f4f4f5&border_radius=14`

const streakImg = `https://github-readme-streak-stats.demolab.com/?user=${u}&theme=dark&hide_border=true&border_radius=14&background=030712`

const langsImg = `https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=dark&hide_border=true&bg_color=0d111700&title_color=e4e4e7&text_color=f4f4f5&border_radius=14`

const contributionChart = `https://ghchart.rshah.org/${encodeURIComponent(u)}`

export function GitHubStats() {
  return (
    <section id="github" className="scroll-mt-24 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionReveal delay={0.02}>
          <SectionHeading
            kicker="GitHub"
            title="Activity & stats"

          />
        </SectionReveal>

        <div className="mt-4 space-y-8">
          <SectionReveal delay={0.05}>
            <motion.div
              className="glass-card overflow-hidden p-6"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Contribution graph
              </p>
              <motion.a
                href={`https://github.com/${u}`}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-xl border border-white/10 bg-zinc-950/50"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={contributionChart}
                  alt={`GitHub contribution graph for ${u}`}
                  className="mx-auto h-auto max-w-full"
                  loading="lazy"
                />
              </motion.a>
            </motion.div>
          </SectionReveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <SectionReveal delay={0.07}>
              <motion.a
                href={`https://github.com/${u}`}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover block overflow-hidden p-3"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              >
                <img
                  src={statsImg}
                  alt="GitHub profile stats"
                  className="h-auto w-full rounded-xl"
                  loading="lazy"
                />
              </motion.a>
            </SectionReveal>

            <SectionReveal delay={0.09}>
              <motion.a
                href={`https://github.com/${u}`}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover block overflow-hidden p-3"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              >
                <img
                  src={streakImg}
                  alt="GitHub streak stats"
                  className="h-auto w-full rounded-xl"
                  loading="lazy"
                />
              </motion.a>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.11}>
            <motion.a
              href={`https://github.com/${u}`}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover block overflow-hidden p-3"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            >
              <img
                src={langsImg}
                alt="Most used languages on GitHub"
                className="h-auto w-full rounded-xl"
                loading="lazy"
              />
            </motion.a>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
