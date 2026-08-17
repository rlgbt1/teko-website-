import { useEffect } from 'react'
import { Hero } from '../sections/Hero'
import { TrustStrip } from '../sections/TrustStrip'
import { Stats } from '../sections/Stats'
import { ServicesTeaser } from '../sections/ServicesTeaser'
import { HowWeWork } from '../sections/HowWeWork'
import { CaseStudies } from '../sections/CaseStudies'
import { Contact } from '../sections/Contact'

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <TrustStrip />
      <Stats />
      <ServicesTeaser />
      <HowWeWork />
      <CaseStudies showViewAll />
      <Contact />
    </>
  )
}
