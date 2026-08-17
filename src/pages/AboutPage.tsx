import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { FounderCard } from '../components/FounderCard'
import { Mission } from '../sections/Mission'

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
            backgroundImage: 'url(/assets/textures/circuit-tile.png)',
            backgroundSize: '340px',
            maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          }}
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

          <div className="relative mx-auto mt-10 h-24 w-full max-w-xs overflow-hidden rounded-2xl bg-white/70 ring-1 ring-red-primary/10 sm:h-28 sm:max-w-sm">
            <img
              src="/assets/icons/silhouettes-network.png"
              alt=""
              className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px]"
            />
          </div>
        </Container>
      </section>

      <Mission />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <h2 className="text-center font-display text-2xl font-bold text-charcoal sm:text-3xl">
            {t.about.foundersTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-charcoal/60 sm:text-base">
            {t.about.foundersTagline}
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            <FounderCard
              name={t.about.founder1.name}
              bio={t.about.founder1.bio}
              photoSrc="/assets/founders/reinaldo.jpg"
              delay={0}
            />
            <FounderCard
              name={t.about.founder2.name}
              bio={t.about.founder2.bio}
              photoSrc="/assets/founders/malcolm.jpg"
              delay={0.12}
            />
          </div>
        </Container>
      </section>
    </div>
  )
}
