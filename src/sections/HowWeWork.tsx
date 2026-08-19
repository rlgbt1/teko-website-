import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { assetUrl } from '../lib/assetUrl'

function TrafficDots({ muted = false }: { muted?: boolean }) {
  const size = muted ? 'h-2 w-2' : 'h-3 w-3'
  const opacity = muted ? 'opacity-70' : ''
  return (
    <div className="flex items-center gap-1.5">
      <span className={`${size} ${opacity} rounded-full bg-[#ff5f57]`} />
      <span className={`${size} ${opacity} rounded-full bg-[#febc2e]`} />
      <span className={`${size} ${opacity} rounded-full bg-[#28c840]`} />
    </div>
  )
}

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

          <div className="mx-auto mt-8 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] sm:max-w-md">
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
              <TrafficDots />
              <span className="font-mono text-xs text-white/40">teko — processo</span>
            </div>
            <div className="flex items-center justify-center px-6 py-5">
              <img
                src={assetUrl('assets/icons/how-we-work-sequence.png')}
                alt="Discovery, build, launch, support"
                className="h-10 w-auto brightness-[2] contrast-[1.2] saturate-[1.4] sm:h-12"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Desktop-only arrow connectors between the 4 step "windows" */}
          <div className="pointer-events-none absolute inset-y-0 hidden w-full lg:block">
            {[25, 50, 75].map((leftPct) => (
              <ArrowRight
                key={leftPct}
                className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-red-primary/50"
                style={{ left: `${leftPct}%` }}
              />
            ))}
          </div>

          {t.how.steps.map((step, i) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] transition-colors hover:border-red-primary/40"
            >
              <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-2.5">
                <TrafficDots muted />
                <span className="font-display text-[13px] font-bold text-white">{step.name}</span>
                {step.tag && (
                  <span className="rounded-full bg-red-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {step.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-primary font-display text-sm font-bold text-white">
                  {i + 1}
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/60">{step.desc}</p>
              </div>
              {/* Mobile/tablet: down-arrow connector between stacked cards */}
              {i < t.how.steps.length - 1 && (
                <ArrowRight className="absolute -bottom-5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-90 text-red-primary/50 sm:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
