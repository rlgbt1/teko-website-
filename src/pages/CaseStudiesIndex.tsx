import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { CaseStudies } from '../sections/CaseStudies'
import { assetUrl } from '../lib/assetUrl'

export function CaseStudiesIndex() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
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
            {t.cases.title}
          </span>
          <h1 className="mx-auto mt-3 max-w-xl font-display text-3xl font-bold text-charcoal sm:text-4xl">
            {t.cases.subtitle}
          </h1>

          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-gray-line bg-charcoal shadow-[0_20px_45px_-20px_rgba(38,43,51,0.35)]">
            <img
              src={assetUrl('assets/icons/tangled-to-structured.png')}
              alt={t.cases.bannerCaption}
              className="w-full"
            />
            <p className="border-t border-white/10 bg-charcoal py-3 text-sm font-medium text-white/70">
              {t.cases.bannerCaption}
            </p>
          </div>
        </Container>
      </section>
      <CaseStudies compact />
    </div>
  )
}
