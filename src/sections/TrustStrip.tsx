import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { WorldMap, type MapPoint } from '../components/WorldMap'

const hub: MapPoint = { lat: 38.72, lng: -9.14, label: 'Lisboa' }

const points: MapPoint[] = [
  { lat: 51.51, lng: -0.13, label: 'London' },
  { lat: -8.84, lng: 13.23, label: 'Luanda' },
  { lat: 40.71, lng: -74.0, label: 'New York' },
  { lat: -23.55, lng: -46.63, label: 'São Paulo' },
  { lat: 25.2, lng: 55.27, label: 'Dubai' },
]

export function TrustStrip() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-gray-line/70 bg-cream py-14 sm:py-20">
      <Container>
        <div className="text-center">
          <p className="font-display text-lg font-semibold text-charcoal sm:text-xl">
            {t.trust.line}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-charcoal/60 sm:text-[15px]">
            {t.trust.line2}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <WorldMap points={points} hub={hub} />
        </div>
      </Container>
    </section>
  )
}
