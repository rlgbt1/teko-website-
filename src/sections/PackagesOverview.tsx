import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Minus, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'

export function PackagesOverview() {
  const { t } = useLanguage()
  const { tiers, rows } = t.packages

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
            {t.packages.kicker}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">
            {t.packages.title}
          </h2>
          <p className="mt-3 text-sm text-charcoal/60 sm:text-base">{t.packages.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-3">
          {tiers.map((tier, ti) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: ti * 0.1 }}
              className={`flex flex-col rounded-3xl border bg-white p-6 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)] sm:p-7 ${
                ti === 1 ? 'border-red-primary ring-1 ring-red-primary' : 'border-gray-line'
              }`}
            >
              {ti === 1 && (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-red-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {t.packages.recommended}
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-charcoal">{tier.name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/60">{tier.scope}</p>

              <ul className="mt-5 flex-1 space-y-3 border-t border-gray-line pt-5">
                {rows.map((row) => {
                  const value = row.values[ti]
                  const isCheck = value === '✓'
                  const isDash = value === '—'
                  return (
                    <li key={row.label} className="flex items-center justify-between gap-3 text-[13px]">
                      <span className="text-charcoal/70">{row.label}</span>
                      {isCheck ? (
                        <Check className="h-4 w-4 shrink-0 text-red-primary" />
                      ) : isDash ? (
                        <Minus className="h-4 w-4 shrink-0 text-charcoal/25" />
                      ) : (
                        <span className="shrink-0 text-right font-semibold text-charcoal">{value}</span>
                      )}
                    </li>
                  )
                })}
              </ul>

              <Link
                to="/contact"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  ti === 1
                    ? 'bg-red-primary text-white hover:bg-red-deep'
                    : 'border border-gray-line text-charcoal hover:border-red-primary hover:text-red-primary'
                }`}
              >
                {t.packages.ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-charcoal/45">
          {t.packages.alaCarteNote}
        </p>
      </Container>
    </section>
  )
}
