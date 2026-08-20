import { motion } from 'framer-motion'
import { ShieldAlert, EyeOff, UserX, Clock, RefreshCw, TrendingUp, HelpCircle, AlertCircle, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { IconBadge } from '../components/IconBadge'
import { assetUrl } from '../lib/assetUrl'

const identityIcons: LucideIcon[] = [ShieldAlert, EyeOff, UserX, Clock]
const analyticsIcons: LucideIcon[] = [RefreshCw, TrendingUp, HelpCircle, AlertCircle]

function StatGroup({
  label,
  icon,
  items,
  itemIcons,
  accent,
  delayBase,
}: {
  label: string
  icon: string
  items: readonly { stat: string; desc: string }[]
  itemIcons: LucideIcon[]
  accent: 'red' | 'charcoal'
  delayBase: number
}) {
  const borderTone = accent === 'red' ? 'border-t-red-primary' : 'border-t-charcoal'
  const numberTone = accent === 'red' ? 'text-red-primary' : 'text-charcoal'
  const bgTone = accent === 'red' ? 'from-red-soft/50 to-white' : 'from-cream to-white'
  const iconTone = accent === 'red' ? 'text-red-primary/60' : 'text-charcoal/50'

  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <IconBadge src={icon} size="sm" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-charcoal">
          {label}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {items.map((item, i) => {
          const Icon = itemIcons[i]
          return (
            <motion.div
              key={item.stat + i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: delayBase + i * 0.08 }}
              className={`rounded-2xl border border-gray-line ${borderTone} border-t-4 bg-gradient-to-b ${bgTone} p-4 shadow-[0_8px_20px_-12px_rgba(38,43,51,0.25)] transition-shadow hover:shadow-[0_14px_30px_-14px_rgba(38,43,51,0.35)] sm:p-5`}
            >
              <div className="flex items-center justify-between">
                <div className={`font-display text-4xl leading-none font-bold sm:text-5xl ${numberTone}`}>
                  {item.stat}
                </div>
                {Icon && <Icon className={`h-4 w-4 shrink-0 ${iconTone}`} />}
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-charcoal/80 sm:text-xs">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url(${assetUrl('assets/textures/circuit-tile.png')})`,
          backgroundSize: '340px',
          maskImage: 'radial-gradient(ellipse at top, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black, transparent 75%)',
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
            {t.stats.title}
          </h2>
          <p className="mt-3 text-sm text-charcoal/60 sm:text-base">{t.stats.subtitle}</p>
        </div>
        <div className="relative mt-12 sm:mt-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url(${assetUrl('assets/textures/network-graphic-dense.png')})`,
              backgroundSize: '900px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-10">
          <StatGroup
            label={t.stats.identity.label}
            icon="/assets/icons/digital-identity.png"
            items={t.stats.identity.items}
            itemIcons={identityIcons}
            accent="red"
            delayBase={0}
          />
          <StatGroup
            label={t.stats.analytics.label}
            icon="/assets/icons/analytics-reporting.png"
            items={t.stats.analytics.items}
            itemIcons={analyticsIcons}
            accent="charcoal"
            delayBase={0.16}
          />
          </div>
        </div>
      </Container>
    </section>
  )
}
