import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { IconGithub, IconLinkedin } from '../icons/Social'
import { site } from '../../config/site'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'
import { supabase } from '../../lib/supabase'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([{ name, email, message }])

      if (supabaseError) {
        throw supabaseError
      }

      setSent(true)
      e.currentTarget.reset()
      window.setTimeout(() => setSent(false), 4000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message'
      setError(errorMessage)
      window.setTimeout(() => setError(null), 4000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionReveal delay={0.02}>
          <SectionHeading
            kicker="Contact"
            title="Get in touch"
          />
        </SectionReveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <SectionReveal className="lg:col-span-2" delay={0.06}>
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Reach me here
              </p>
              <div className="flex flex-col gap-3">
                <motion.a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card glass-card-hover flex items-center gap-4 px-5 py-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300">
                    <IconLinkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">LinkedIn</p>
                    <p className="text-sm text-zinc-400">Updates & messaging</p>
                  </div>
                </motion.a>
                <motion.a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card glass-card-hover flex items-center gap-4 px-5 py-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-zinc-200">
                    <IconGithub className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">GitHub</p>
                    <p className="text-sm text-zinc-400">Repos & experiments</p>
                  </div>
                </motion.a>
                <motion.a
                  href={`mailto:${site.email}`}
                  className="glass-card glass-card-hover flex items-center gap-4 px-5 py-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-emerald-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">Email</p>
                    <p className="text-sm text-zinc-400">{site.email}</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-medium text-zinc-400">Name</span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/15"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-medium text-zinc-400">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/15"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-medium text-zinc-400">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/15"
                    placeholder="Tell me about your idea…"
                  />
                </label>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? 'Sending...' : 'Send message'}
                  <Send className="h-4 w-4" />
                </motion.button>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-emerald-400"
                  >
                    Message sent! Thanks for reaching out.
                  </motion.p>
                )}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-red-400"
                  >
                    Error: {error}
                  </motion.p>
                )}
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
