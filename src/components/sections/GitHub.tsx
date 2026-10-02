import { site } from '../../config/site'
import { Em, Header } from '../ui/Header'

const u = site.githubUsername
const imgs = [
  [`https://ghchart.rshah.org/${u}`, 'Contribution graph', 'sm:col-span-2 bg-white p-4'],
  [`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=dark&hide_border=true&bg_color=0d111700&title_color=f4f4f5&icon_color=89AACC&text_color=f4f4f5`, 'GitHub stats', ''],
  [`https://github-readme-streak-stats.demolab.com/?user=${u}&theme=dark&hide_border=true&background=00000000`, 'GitHub streak', ''],
  [`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=dark&hide_border=true&bg_color=0d111700&title_color=f4f4f5&text_color=f4f4f5`, 'Top languages', 'sm:col-span-2'],
]

export function GitHub() {
  return (
    <section id="github" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header eyebrow="GitHub" title={<>Activity & <Em>stats</Em></>} sub="Public work, repositories, and development activity from my GitHub profile." cta={{ label: 'Open GitHub', href: site.github }} />
        <div className="grid gap-5 sm:grid-cols-2">
          {imgs.map(([src, alt, cls]) => (
            <a key={alt} href={site.github} target="_blank" rel="noreferrer" className={`flex items-center justify-center overflow-hidden rounded-3xl border border-stroke bg-surface p-3 ${cls}`}>
              <img src={src} alt={alt} loading="lazy" className="h-auto max-w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
