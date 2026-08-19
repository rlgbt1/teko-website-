import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, FileCheck, Wallet, ArrowRight, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { CONTACT_EMAIL } from '../i18n/translations'
import { Container } from '../components/Container'
import { IconBadge } from '../components/IconBadge'
import { assetUrl } from '../lib/assetUrl'

const pointIcons = [Calendar, FileCheck, Wallet]

export function ContactPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url(${assetUrl('assets/textures/circuit-tile.png')})`,
          backgroundSize: '340px',
          maskImage: 'radial-gradient(ellipse at top, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black, transparent 70%)',
        }}
      />
      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <IconBadge src="/assets/icons/contact-bubble.png" size="md" />
          <span className="mt-6 block font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
            {t.contactPage.kicker}
          </span>
          <h1 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
            {t.contactPage.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.contactPage.cta)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(122,20,32,0.55)] transition-colors hover:bg-red-deep"
            >
              {t.contactPage.cta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-line px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-red-primary hover:text-red-primary"
            >
              <Mail className="h-4 w-4" /> {t.contactPage.emailCta}
            </a>
          </div>
          <p className="mt-4 text-xs text-charcoal/50">{t.hero.paymentNote}</p>

          {/* Future: WhatsApp CTA once the number/flow is live.
          <a href="https://wa.me/..." className="mt-3 ...">WhatsApp</a> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-gray-line bg-white p-8 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)]"
        >
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-charcoal/40">
            {t.contactPage.pointsTitle}
          </p>
          <ul className="mt-5 space-y-4">
            {t.contactPage.points.map((point, i) => {
              const Icon = pointIcons[i] ?? Calendar
              return (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-primary/10 text-red-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-charcoal/75">{point}</span>
                </li>
              )
            })}
          </ul>
          <div className="mt-6 border-t border-gray-line pt-6">
            <p className="text-xs text-charcoal/45">{t.contactPage.kicker}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-sm font-semibold text-charcoal hover:text-red-primary">
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
