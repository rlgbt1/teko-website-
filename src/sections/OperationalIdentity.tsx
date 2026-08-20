import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { CheckList } from '../components/CheckList'
import { IconBadge } from '../components/IconBadge'

export function OperationalIdentity() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 rounded-3xl border border-gray-line bg-white p-6 shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)] sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10"
        >
          <IconBadge src="/assets/icons/data-stack.png" size="lg" />
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-red-primary">
              {t.operational.kicker}
            </span>
            <h2 className="mt-1 font-display text-xl font-bold text-charcoal sm:text-2xl">
              {t.operational.title}
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-charcoal/65 sm:text-sm">
              {t.operational.text}
            </p>
            <div className="mt-4 max-w-sm">
              <CheckList items={t.operational.items} />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <span className="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-semibold text-charcoal/60">
              {t.operational.quoteLabel}
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-primary"
            >
              {t.operational.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
