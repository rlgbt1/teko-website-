import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { FounderCard } from '../components/FounderCard'
import { Mission } from '../sections/Mission'
import { assetUrl } from '../lib/assetUrl'

export function AboutPage() {
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
        <img
          src={assetUrl('assets/icons/circuit-tree.png')}
          alt=""
          className="pointer-events-none absolute -top-6 -right-10 hidden h-80 opacity-[0.1] lg:block"
        />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
              {t.about.kicker}
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              {t.about.title}
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
              {t.about.intro}
            </p>
          </div>

          <img
            src={assetUrl('assets/icons/silhouettes-network.png')}
            alt=""
            className="relative mx-auto mt-10 h-28 sm:h-36"
          />
        </Container>
      </section>

      <Mission />

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url(${assetUrl('assets/textures/circuit-tile.png')})`,
            backgroundSize: '340px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
          }}
        />
        <img
          src={assetUrl('assets/icons/building-growth.png')}
          alt=""
          className="pointer-events-none absolute bottom-0 left-4 hidden h-64 opacity-[0.08] lg:block"
        />
        <Container className="relative">
          <h2 className="text-center font-display text-2xl font-bold text-charcoal sm:text-3xl">
            {t.about.foundersTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-charcoal/60 sm:text-base">
            {t.about.foundersTagline}
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            <FounderCard
              name={t.about.founder1.name}
              degree={t.about.founder1.degree}
              experience={t.about.founder1.experience}
              mantra={t.about.founder1.mantra}
              photoSrc="/assets/founders/reinaldo.jpg"
              delay={0}
            />
            <FounderCard
              name={t.about.founder2.name}
              degree={t.about.founder2.degree}
              experience={t.about.founder2.experience}
              mantra={t.about.founder2.mantra}
              photoSrc="/assets/founders/malcolm.jpg"
              delay={0.12}
            />
          </div>
        </Container>
      </section>
    </div>
  )
}
