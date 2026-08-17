import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { IconBadge } from '../components/IconBadge'
import { assetUrl } from '../lib/assetUrl'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-mix px-6 py-16 text-center sm:px-10 sm:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url(${assetUrl('assets/textures/network-graphic-dense.png')})`,
              backgroundSize: '640px',
              backgroundPosition: 'center',
              filter: 'invert(1)',
            }}
          />
          <div className="relative mx-auto w-fit">
            <IconBadge src="/assets/icons/contact-bubble.png" size="md" tone="dark" />
          </div>
          <h2 className="relative mx-auto mt-6 max-w-lg font-display text-2xl font-bold text-white sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-white/60 sm:text-base">
            {t.contact.text}
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-red-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-deep"
          >
            {t.contact.cta}
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
