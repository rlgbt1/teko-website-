import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { assetUrl } from '../lib/assetUrl'

export function HowWeWork() {
  const { t } = useLanguage()

  return (
    <section id="how" className="scroll-mt-24 bg-gradient-to-br from-charcoal to-charcoal-mix py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {t.how.title}
          </h2>
          <p className="mt-3 text-sm text-white/55 sm:text-base">{t.how.subtitle}</p>
          <div className="relative mx-auto mt-8 h-20 w-full max-w-sm overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-white/10 sm:h-24 sm:max-w-md">
            <img
              src={assetUrl('assets/icons/how-we-work-sequence.png')}
              alt="Discovery, build, launch, support"
              className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 brightness-[1.6] contrast-[1.15] sm:h-[360px] sm:w-[360px]"
            />
          </div>
        </div>

        <div className="relative mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-[22px] right-0 left-0 hidden h-px bg-white/10 lg:block" />
          {t.how.steps.map((step, i) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-red-primary/40 bg-charcoal font-display text-sm font-bold text-red-primary">
                {i + 1}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-white">{step.name}</h3>
                {step.tag && (
                  <span className="rounded-full bg-red-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-primary">
                    {step.tag}
                  </span>
                )}
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
