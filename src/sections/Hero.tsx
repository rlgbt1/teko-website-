import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Terminal } from '../components/Terminal'
import { assetUrl } from '../lib/assetUrl'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `url(${assetUrl('assets/textures/circuit-tile.png')})`,
          backgroundSize: '340px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.14] lg:block"
        style={{
          backgroundImage: `url(${assetUrl('assets/textures/network-graphic-dense.png')})`,
          backgroundSize: '760px',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to left, black, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent 80%)',
        }}
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-[2.2rem] font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-[3.15rem]">
            {t.hero.headlineStart}
            <span className="text-red-primary">{t.hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
            {t.hero.subhead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(122,20,32,0.55)] transition-colors hover:bg-red-deep"
            >
              <Calendar className="h-4 w-4" /> {t.hero.cta}
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-charcoal/15 px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-red-primary hover:text-red-primary"
            >
              {t.hero.secondaryCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <Terminal lines={t.hero.terminalLines} />
        </motion.div>
      </Container>
    </section>
  )
}
