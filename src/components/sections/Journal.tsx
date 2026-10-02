import { motion } from 'framer-motion'
import { certificationsList, site } from '../../config/site'
import { Em, Header } from '../ui/Header'

export function Journal() {
  return (
    <section id="certifications" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <Header
          eyebrow="Certifications"
          title={<>Learning & <Em>credentials</Em></>}
          sub="Relevant learning and verified credentials that support my development background."
          cta={{ label: 'LinkedIn', href: site.linkedin }}
        />

        <div className="flex flex-col gap-4">
          {certificationsList.map((certification, i) => (
            <motion.a
              key={certification.title}
              href={certification.href}
              target={certification.external === false ? undefined : '_blank'}
              rel={certification.external === false ? undefined : 'noreferrer'}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-[32px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              <span className="accent-gradient flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-xl italic text-bg sm:h-16 sm:w-16">{certification.issuer[0]}</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium sm:text-base">{certification.title}</h3>
                <p className="text-xs text-muted">{certification.issuer}{certification.tag ? ` · ${certification.tag}` : ''}</p>
              </div>
              <span className="hidden pr-4 text-xs text-muted sm:block">{certification.issued}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
