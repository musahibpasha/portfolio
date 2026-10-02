import gsap from 'gsap'
import { type FormEvent, useEffect, useRef, useState } from 'react'
import { site } from '../../config/site'
import { supabase } from '../../lib/supabase'
import { GradButton } from '../ui/GradButton'
import { HlsVideo } from '../ui/HlsVideo'

const socials = [
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'GitHub', href: site.github },
]

export function Contact() {
  const track = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const tween = gsap.to(track.current, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
    return () => { tween.kill() }
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields before sending your message.')
      return
    }

    if (!supabase) {
      setStatus('error')
      setErrorMessage('The contact form is not configured yet. Please email musahibpasha4@gmail.com directly.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    const { error } = await supabase.from('contact_submissions').insert([{ name, email, message }])

    if (error) {
      setStatus('error')
      setErrorMessage(error.message)
      return
    }

    form.reset()
    setStatus('sent')
  }

  const field = 'w-full rounded-full border border-stroke bg-bg/70 px-5 py-3.5 text-sm text-text-primary outline-none backdrop-blur-md placeholder:text-muted focus:border-[#4E85BF]'

  return (
    <section id="contact" className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      <HlsVideo className="scale-y-[-1]" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10">
        <div className="mb-14 overflow-hidden whitespace-nowrap">
          <div ref={track} className="inline-flex font-display text-5xl italic text-text-primary/20 md:text-7xl">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className="px-4">BUILDING PRODUCTS • </span>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-4xl font-light tracking-tight md:text-6xl">
            Let&apos;s <em className="font-display italic">talk</em>
          </h2>
          <GradButton href={`mailto:${site.email}`} variant="solid">{site.email}</GradButton>

          <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 text-left">
            <label className="text-xs uppercase tracking-[0.2em] text-muted" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required className={field} placeholder="Your name" />
            <label className="text-xs uppercase tracking-[0.2em] text-muted" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className={field} placeholder="Your email" />
            <label className="text-xs uppercase tracking-[0.2em] text-muted" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required className={`${field} rounded-3xl`} placeholder="Tell me about your project or role" />
            <button type="submit" disabled={status === 'sending'} className="rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent — thank you!' : 'Send message'}
            </button>
            {status === 'error' && <p className="text-sm text-red-400">{errorMessage}</p>}
            {status === 'sent' && <p className="text-sm text-emerald-400">Your message has been sent successfully.</p>}
          </form>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-stroke px-6 pt-6 md:flex-row md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-xs text-muted transition-colors hover:text-text-primary">
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for projects
          </div>
        </div>
      </div>
    </section>
  )
}
