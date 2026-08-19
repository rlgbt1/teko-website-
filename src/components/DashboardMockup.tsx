import { motion } from 'framer-motion'
import { assetUrl } from '../lib/assetUrl'

/**
 * Placeholder "Bank × TekoAI" dashboard mockup — built in CSS/SVG
 * so the scroll-reveal section has real proportions and brand-correct
 * visual weight until the actual product screenshot is dropped in. The
 * bank's real name is withheld for confidentiality.
 * Swap out by replacing this component's usage in Services.tsx with an
 * <img src={assetUrl('assets/case-studies/bank-dashboard.png')} /> once available.
 */
export function DashboardMockup() {
  const bars = [38, 62, 45, 80, 55, 70, 90, 48]

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.5, delay },
  })

  return (
    <div className="aspect-[16/10] w-full bg-white p-4 sm:p-6">
      <motion.div {...rise(0)} className="flex items-center justify-between border-b border-gray-line pb-3">
        <div className="flex items-center gap-2">
          <img src={assetUrl('assets/logo/teko-monogram.png')} alt="" className="h-5 w-5" />
          <span className="font-display text-xs font-bold text-charcoal sm:text-sm">
            Banco <span className="text-red-primary">×</span> TekoAI — Market Intelligence
          </span>
        </div>
        <span className="hidden rounded-full bg-gray-line/60 px-2.5 py-1 text-[10px] font-medium text-charcoal/50 sm:block">
          Relatório Diário · Ao Vivo
        </span>
      </motion.div>

      <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: 'Câmbio', value: '923.4' },
          { label: 'Índice de mercado', value: '+1.8%' },
          { label: 'Relatórios gerados', value: '312' },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            {...rise(0.1 + i * 0.08)}
            className="rounded-lg border border-gray-line p-2.5 sm:p-3"
          >
            <div className="font-display text-base font-bold text-charcoal sm:text-xl">
              {kpi.value}
            </div>
            <div className="mt-0.5 text-[9px] text-charcoal/50 sm:text-[11px]">{kpi.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...rise(0.35)}
        className="mt-4 flex h-24 items-end gap-1.5 rounded-lg border border-gray-line p-3 sm:h-32 sm:gap-2"
      >
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.45 + i * 0.05, ease: 'easeOut' }}
            className="flex-1 origin-bottom rounded-sm bg-red-primary/80"
            style={{ height: `${h}%`, opacity: 0.5 + (i / bars.length) * 0.5 }}
          />
        ))}
      </motion.div>

      <div className="mt-4 space-y-1.5">
        {[85, 70, 92].map((w, i) => (
          <motion.div
            key={i}
            {...rise(0.7 + i * 0.08)}
            className="h-2 rounded-full bg-gray-line"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </div>
  )
}
