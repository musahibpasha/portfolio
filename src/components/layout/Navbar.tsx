import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { IconGithub } from '../icons/Social'
import { navLinks, site } from '../../config/site'
import type { NavLink } from '../../config/site'

type NavbarProps = {
  activeSection: string | null
}

function NavLinkBtn({
  item,
  active,
}: {
  item: NavLink
  active: boolean
}) {
  return (
    <a
      href={item.href}
      className={`relative px-3 py-2 text-[13px] font-medium tracking-tight transition-colors ${
        active ? 'text-white' : 'text-zinc-400 hover:text-white'
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 -z-10 rounded-lg bg-white/[0.08] ring-1 ring-white/10"
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        />
      )}
      <span className="relative">{item.label}</span>
    </a>
  )
}

export function Navbar({ activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24)
  })

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl"
      initial={false}
      animate={{
        boxShadow: scrolled
          ? '0 12px 40px -20px rgba(0,0,0,0.65), inset 0 -1px 0 rgba(255,255,255,0.04)'
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        animate={{ height: scrolled ? 52 : 60 }}
        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
      >
        <motion.a
          href="#hero"
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight text-white"
          whileHover={{ x: 1 }}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/20 to-sky-500/20 text-xs font-bold text-emerald-300 ring-1 ring-white/10">
            {site.shortBrand}
          </span>
          <span className="hidden max-w-[200px] truncate sm:inline">{site.name.split(' ')[0]}</span>
        </motion.a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLinkBtn
              key={link.id}
              item={link}
              active={activeSection === link.id}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <motion.a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            aria-label="GitHub profile"
            whileTap={{ scale: 0.92 }}
          >
            <IconGithub className="h-5 w-5" />
          </motion.a>
          <motion.button
            type="button"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="border-t border-white/[0.06] bg-zinc-950/95 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <div className="flex flex-col gap-px p-3 text-[15px]">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className={`rounded-lg px-3 py-3 font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-white/[0.08] text-white ring-1 ring-white/10'
                      : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
