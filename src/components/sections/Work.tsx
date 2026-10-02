import { portfolioProjects } from '../../config/site'
import { Em, Header } from '../ui/Header'

function ProjectPreview({ title, initials }: { title: string; initials: string }) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-3xl border border-stroke bg-surface p-6">
      <div className="w-full max-w-sm rounded-2xl border border-stroke bg-bg/80 p-5">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-surface text-xs text-text-primary">{initials}</span>
          <p className="text-sm text-text-primary">{title}</p>
        </div>
        <div className="mt-5 space-y-2">
          <div className="h-2 rounded-full bg-stroke" />
          <div className="h-2 w-4/5 rounded-full bg-stroke" />
          <div className="h-2 w-3/5 rounded-full bg-stroke" />
        </div>
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section id="projects" className="scroll-mt-24 bg-bg pb-12 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header
          eyebrow="Selected Work"
          title={<>Featured <Em>projects</Em></>}
          sub="A selection of projects I've worked on, from concept to launch."
          cta={{ label: 'View all work', href: '#projects' }}
        />
        <div className="space-y-8">
          {portfolioProjects.map((project) => (
            <article
              key={project.title}
              className="w-full min-w-0 overflow-hidden rounded-[34px] border border-stroke bg-surface/30 p-5 md:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <span className="mb-4 inline-flex rounded-full border border-stroke bg-bg/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">{project.category}</span>
                  <h3 className="font-display text-4xl italic text-text-primary md:text-5xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-stroke bg-bg/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-muted">{item}</span>
                    ))}
                  </div>
                  <ul className="mt-6 grid gap-2 text-sm text-muted md:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-text-primary" /><span>{feature}</span></li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-stroke bg-bg px-4 py-2 text-sm text-text-primary transition-colors hover:border-text-primary">GitHub</a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full bg-text-primary px-4 py-2 text-sm text-bg">{project.liveLabel ?? 'Live Demo'}</a>}
                  </div>
                </div>
                <ProjectPreview title={project.title} initials={project.initials} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
