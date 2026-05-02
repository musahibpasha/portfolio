import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { IconGithub } from '../icons/Social'
import {
  portfolioProjects,
  site,
  type PortfolioProject,
} from '../../config/site'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

function isRealUrl(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject
  index: number
}) {
  const showGithub = project.showGithub !== false && isRealUrl(project.github)
  const liveIsUrl = isRealUrl(project.live)
  const liveLabel = project.liveLabel ?? 'Live Demo'

  return (
    <SectionReveal delay={index * 0.06}>
      <motion.article
        className="glass-card glass-card-hover group overflow-hidden"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 360, damping: 26 }}
      >
        <div
          className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent} via-zinc-900/90 to-zinc-950`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22/%3E%3Cpath%20stroke%3D%22rgba(255,255,255,0.06)%22%20stroke-width%3D%221%22%20d%3D%22M0%2060V0M60%200v60%22/%3E%3C/svg%3E')] opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <span className="font-display text-3xl font-bold tracking-[0.2em] text-white/35">
              {project.initials}
            </span>
            <span className="mt-3 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 backdrop-blur-sm">
              {project.title.includes('Forage') ? 'Credential' : 'Build'}
            </span>
          </div>
        </div>
        <div className="border-t border-white/[0.06] p-6">
          <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {showGithub ? (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconGithub className="h-4 w-4" />
                GitHub
              </motion.a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/[0.06] px-4 py-2.5 text-sm font-medium text-zinc-500 opacity-75">
                <IconGithub className="h-4 w-4" />
                No public repo
              </span>
            )}
            {liveIsUrl ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/15"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {liveLabel}
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/[0.06] px-4 py-2.5 text-sm font-medium text-zinc-500 opacity-75">
                {liveLabel} soon
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </SectionReveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <SectionHeading
            kicker="Projects"
            title="Same story as LinkedIn—with room to wire repos"
            description={
              <>
                <strong className="font-medium text-zinc-300">NEWSAPP</strong> and{' '}
                <strong className="font-medium text-zinc-300">Text Analyzer</strong> copy is lifted from{' '}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 underline-offset-2 hover:underline"
                >
                  your LinkedIn projects
                </a>
                . Add GitHub/live URLs next to each card in{' '}
                <code className="rounded-md border border-white/10 bg-black/40 px-1.5 py-0.5 font-mono text-xs text-zinc-300">
                  site.ts · portfolioProjects
                </code>{' '}
                when repos go public—the Deloitte row already opens your Forage PDF.
              </>
            }
          />
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {portfolioProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
