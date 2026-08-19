import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { assetUrl } from '../lib/assetUrl'

export function CaseStudies({ compact = false, showViewAll = false }: { compact?: boolean; showViewAll?: boolean }) {
  const { t } = useLanguage()

  return (
    <section id="cases" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        {!compact && (
          <div className="mx-auto max-w-xl text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
              {t.cases.title}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {t.cases.subtitle}
            </h2>
          </div>
        )}

        <div className={`grid gap-6 md:grid-cols-3 ${compact ? '' : 'mt-12 sm:mt-14'}`}>
          {t.cases.items.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/case-studies/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-line bg-white shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)] transition-shadow hover:shadow-[0_20px_45px_-20px_rgba(38,43,51,0.25)]"
              >
                <div
                  className="relative h-36 w-full bg-charcoal"
                  style={{
                    backgroundImage: `url(${assetUrl('assets/icons/tangled-to-structured.png')})`,
                    backgroundSize: '70%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-charcoal/45 transition-colors group-hover:bg-charcoal/30" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-red-primary">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-charcoal">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-charcoal/60">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-charcoal">
                    {t.cases.viewCase}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-gray-line px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-red-primary hover:text-red-primary"
            >
              {t.cases.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  )
}
