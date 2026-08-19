import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { IconBadge } from '../components/IconBadge'
import { CheckList } from '../components/CheckList'
import { ContainerScrollAnimation } from '../components/ContainerScrollAnimation'
import { DashboardMockup } from '../components/DashboardMockup'
import { assetUrl } from '../lib/assetUrl'

export function Services() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `url(${assetUrl('assets/textures/circuit-tile.png')})`,
            backgroundSize: '340px',
            maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          }}
        />
        <Container className="relative text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
            {t.nav.services}
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            {t.route.pageSubtitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-charcoal/60 sm:text-base">
            {t.route.intro1}
          </p>
          <div className="mx-auto mt-3 flex max-w-xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5">
            <span className="rounded-full bg-red-primary/10 px-3.5 py-1.5 text-sm font-semibold text-red-primary">
              {t.route.intro2a}
            </span>
            <ArrowRight className="h-4 w-4 text-charcoal/30" aria-hidden />
            <span className="rounded-full bg-charcoal/5 px-3.5 py-1.5 text-sm font-semibold text-charcoal">
              {t.route.intro2b}
            </span>
          </div>
          <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-red-primary/15 bg-gradient-to-br from-red-soft to-white px-5 py-4 text-[13px] leading-relaxed text-charcoal/70 shadow-[0_10px_24px_-16px_rgba(122,20,32,0.4)]">
            {t.route.idealNote}
          </div>
        </Container>
      </section>

      {/* Suite 1 */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <img
          src={assetUrl('assets/icons/building-growth.png')}
          alt=""
          className="pointer-events-none absolute top-10 -right-8 hidden h-60 opacity-[0.06] lg:block"
        />
        <Container>
          <SuiteBlock
            n={1}
            kicker={t.route.step1.kicker}
            tagline={t.route.step1.tagline}
            iconSrc="/assets/icons/digital-identity.png"
            flagshipLabel={t.route.step1.flagshipLabel}
            flagshipName={t.route.step1.flagshipName}
            flagshipDesc={t.route.step1.flagshipDesc}
            checklist={t.route.step1.checklist}
            note={t.route.step1.note}
            addon={t.route.step1.addon}
            links={[
              { slug: 'digital-operations-pack', label: t.serviceDetail.items['digital-operations-pack'].name },
              { slug: 'business-tools', label: t.serviceDetail.items['business-tools'].name },
            ]}
            alaCarteNote={t.route.alaCarteNote}
          />
        </Container>
      </section>

      <div className="flex justify-center">
        <div className="h-12 w-px bg-gray-line" />
      </div>

      {/* Suite 2 */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <img
          src={assetUrl('assets/icons/data-stack.png')}
          alt=""
          className="pointer-events-none absolute top-10 -left-8 hidden h-60 opacity-[0.06] lg:block"
        />
        <Container>
          <SuiteBlock
            n={2}
            kicker={t.route.step2.kicker}
            tagline={t.route.step2.tagline}
            iconSrc="/assets/icons/analytics-reporting.png"
            flagshipLabel={t.route.step2.flagshipLabel}
            flagshipName={t.route.step2.flagshipName}
            flagshipDesc={t.route.step2.flagshipDesc}
            checklist={t.route.step2.checklist}
            links={[
              { slug: 'executive-reporting-agent', label: t.serviceDetail.items['executive-reporting-agent'].name },
              { slug: 'ai-workflows-crm', label: t.serviceDetail.items['ai-workflows-crm'].name },
            ]}
            alaCarteNote={t.route.alaCarteNote}
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-line bg-white p-5 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)]">
              <h4 className="font-display text-sm font-bold text-charcoal">{t.route.step2.item2Name}</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/60">{t.route.step2.item2Desc}</p>
            </div>
            <div className="rounded-2xl border border-gray-line bg-white p-5 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)]">
              <h4 className="font-display text-sm font-bold text-charcoal">{t.route.step2.item3Name}</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/60">{t.route.step2.item3Desc}</p>
            </div>
          </div>

          <ContainerScrollAnimation
            titleSlot={
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
                  {t.route.step2.scrollLabel}
                </p>
                <h3 className="mx-auto mt-2 max-w-xl font-display text-xl font-bold text-charcoal sm:text-2xl">
                  {t.route.step2.scrollTitle}
                </h3>
                <p className="mx-auto mt-2 max-w-lg text-sm text-charcoal/60">{t.route.step2.scrollDesc}</p>
              </div>
            }
          >
            <DashboardMockup />
          </ContainerScrollAnimation>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-mix px-6 py-14 text-center sm:px-10 sm:py-16">
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              {t.route.bottomCtaTitle}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/60">{t.route.bottomCtaText}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-deep"
            >
              <Calendar className="h-4 w-4" /> {t.route.bottomCtaButton}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}

function SuiteBlock({
  n,
  kicker,
  tagline,
  iconSrc,
  flagshipLabel,
  flagshipName,
  flagshipDesc,
  checklist,
  note,
  addon,
  links,
  alaCarteNote,
}: {
  n: number
  kicker: string
  tagline: string
  iconSrc: string
  flagshipLabel: string
  flagshipName: string
  flagshipDesc: string
  checklist: readonly string[]
  note?: string
  addon?: string
  links: { slug: string; label: string }[]
  alaCarteNote: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-display text-sm font-bold text-white">
          {n}
        </div>
        <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-charcoal/50">{kicker}</p>
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">{tagline}</h2>

      <div className="mt-8 grid gap-8 rounded-3xl border border-gray-line bg-white p-6 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)] sm:p-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
        <IconBadge src={iconSrc} size="lg" />
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="rounded-full bg-red-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-primary">
              {flagshipLabel}
            </span>
            <span className="font-display text-base font-bold text-charcoal">{flagshipName}</span>
          </div>
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-charcoal/65 sm:text-sm">{flagshipDesc}</p>
          {(note || addon) && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal/45">
              {note && <span>{note}</span>}
              {addon && <span>{addon}</span>}
            </div>
          )}

          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
            <CheckList items={checklist} />
            <div className="flex flex-row flex-wrap gap-2 sm:flex-col">
              {links.map((l) => (
                <Link
                  key={l.slug}
                  to={`/services/${l.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-line px-3.5 py-2 text-xs font-semibold text-charcoal transition-colors hover:border-red-primary hover:text-red-primary"
                >
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs text-charcoal/45">{alaCarteNote}</p>
        </div>
      </div>
    </motion.div>
  )
}
