import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { IconGithub, IconLinkedin } from '../icons/Social'
import { site } from '../../config/site'

const iconBtn =
  'flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 sm:flex-row">
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          © {year} {site.name}. Crafted with React, Tailwind & Framer Motion.
        </p>
        <div className="flex gap-2">
          <motion.a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className={iconBtn}
            aria-label="LinkedIn"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconLinkedin className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={iconBtn}
            aria-label="GitHub"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconGithub className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={`mailto:${site.email}`}
            className={iconBtn}
            aria-label="Email"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
