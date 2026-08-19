import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { IconBadge } from '../components/IconBadge'
import { CheckList } from '../components/CheckList'
import { assetUrl } from '../lib/assetUrl'

export function ServicesTeaser() {
  const { t } = useLanguage()

  const branches = [
    { data: t.servicesTeaser.branch1, icon: '/assets/icons/digital-identity.png', n: 1 },
    { data: t.servicesTeaser.branch2, icon: '/assets/icons/analytics-reporting.png', n: 2 },
  ]

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-cream py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-[0.1]"
        style={{
          backgroundImage: `url(${assetUrl('assets/textures/network-graphic-dense.png')})`,
          backgroundSize: '700px',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to right, black, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to right, black, transparent 80%)',
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
            {t.servicesTeaser.kicker}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">
            {t.servicesTeaser.title}
          </h2>
          <p className="mt-3 text-sm text-charcoal/60 sm:text-base">{t.servicesTeaser.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2">
          {branches.map(({ data, icon, n }, i) => (
            <motion.div
              key={data.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-3xl border border-gray-line bg-white p-7 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <IconBadge src={icon} size="md" />
                <span className="font-display text-2xl font-bold text-charcoal/15">{`0${n}`}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-charcoal">{data.name}</h3>
              <p className="mt-3 text-sm font-semibold text-red-primary">{data.tagline}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-charcoal/65 sm:text-sm">{data.desc}</p>
              <div className="mt-5 flex-1">
                <CheckList items={data.checklist} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-primary"
          >
            {t.servicesTeaser.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
