import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certifications', id: 'certifications' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
      const ids = [...links.map((l) => l.id), 'contact']
      let cur = 'hero'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const item = 'rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm'

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div className="nav-scroll max-w-[calc(100vw-2rem)] overflow-x-auto pb-1">
        <div className={`inline-flex min-w-max items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
          <a href="#hero" className="group relative mr-1 flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110">
            <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover:-scale-x-100" />
            <span className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full bg-bg font-display text-[13px] italic">
              MP
            </span>
          </a>
          <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`${item} ${active === l.id ? 'bg-stroke/50 text-text-primary' : 'text-muted hover:bg-stroke/50 hover:text-text-primary'}`}
            >
              {l.label}
            </a>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />
          <a href="#contact" className="group relative ml-1 rounded-full">
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className={`${item} relative inline-block bg-surface text-text-primary backdrop-blur-md`}>Say hi ↗</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
