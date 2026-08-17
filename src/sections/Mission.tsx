import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'

export function Mission() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.16] sm:w-2/3"
        style={{
          backgroundImage: 'url(/assets/textures/network-graphic-dense.png)',
          backgroundSize: '900px',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) brightness(1.3)',
          maskImage: 'linear-gradient(to left, black, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent 85%)',
        }}
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#e8858f]">
            {t.mission.kicker}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
            {t.mission.title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/65 sm:text-base">
            {t.mission.text}
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/40">
            {t.mission.valuesTitle}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.mission.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="font-display text-lg font-bold text-[#e8858f]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-sm font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
