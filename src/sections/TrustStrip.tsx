import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { WorldMap, type MapPoint } from '../components/WorldMap'

type CityKey = 'london' | 'lisbon' | 'luanda' | 'newYork' | 'saoPaulo' | 'dubai' | 'islamabad' | 'newDelhi'

const cityLabels: Record<CityKey, { en: string; pt: string }> = {
  london: { en: 'London', pt: 'Londres' },
  lisbon: { en: 'Lisbon', pt: 'Lisboa' },
  luanda: { en: 'Luanda', pt: 'Luanda' },
  newYork: { en: 'New York', pt: 'Nova Iorque' },
  saoPaulo: { en: 'São Paulo', pt: 'São Paulo' },
  dubai: { en: 'Dubai', pt: 'Dubai' },
  islamabad: { en: 'Islamabad', pt: 'Islamabade' },
  newDelhi: { en: 'New Delhi', pt: 'Nova Deli' },
}

const hubCoords = { lat: 51.51, lng: -0.13, city: 'london' as CityKey }

const pointCoords: { lat: number; lng: number; city: CityKey; labelBelow?: boolean }[] = [
  { lat: 38.72, lng: -9.14, city: 'lisbon' },
  { lat: -8.84, lng: 13.23, city: 'luanda' },
  { lat: 40.71, lng: -74.0, city: 'newYork' },
  { lat: -23.55, lng: -46.63, city: 'saoPaulo' },
  { lat: 25.2, lng: 55.27, city: 'dubai' },
  { lat: 33.68, lng: 73.05, city: 'islamabad' },
  { lat: 28.61, lng: 77.21, city: 'newDelhi', labelBelow: true },
]

export function TrustStrip() {
  const { t, lang } = useLanguage()

  const hub: MapPoint = { ...hubCoords, label: cityLabels[hubCoords.city][lang] }
  const points: MapPoint[] = pointCoords.map((p) => ({ ...p, label: cityLabels[p.city][lang] }))

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
