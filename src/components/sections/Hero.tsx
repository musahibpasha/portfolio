import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { BadgeMarquee } from '../effects/BadgeMarquee'
import { IconGithub, IconLinkedin } from '../icons/Social'
import { site } from '../../config/site'
import { staggerContainer, staggerItem } from '../../lib/motion'

export function Hero() {
  const nameParts = site.name.split(' ')
  const firstName = nameParts[0] ?? ''
  const restName = nameParts.slice(1).join(' ')

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(92vh,920px)] flex-col justify-center pb-20 pt-14 sm:pb-24 sm:pt-20"
    >
      {/* Floating shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/25 to-transparent blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[12%] left-[5%] h-56 w-56 rounded-full bg-gradient-to-tr from-sky-500/20 to-transparent blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[40%] top-[8%] h-24 w-40 rotate-12 rounded-full border border-white/10 bg-white/[0.02] blur-sm sm:h-32 sm:w-52"
        animate={{ rotate: [12, 18, 12], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/95"
          >
            {site.badge}
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-8 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
          >
            <span className="block sm:inline">{firstName}</span>{' '}
            <span className="gradient-text-live">{restName}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base font-medium leading-relaxed text-zinc-400 sm:text-lg"
          >
            {site.heroSubtitle}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-[15px]"
          >
            {site.heroIntro}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-105"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/Mohammad_Musahib_Pasha (5)-4.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-7 py-3.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-500/60 hover:bg-emerald-500/20"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.09]"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconGithub className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconLinkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-14 w-full">
            <BadgeMarquee />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
