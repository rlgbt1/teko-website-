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
      <section className="relative overflow-hidden pt-32 pb-6 sm:pt-40">
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
        </Container>
      </section>
      <CaseStudies compact />
    </div>
  )
}
