import { motion } from 'framer-motion'
import { assetUrl } from '../lib/assetUrl'

export function FounderCard({
  name,
  degree,
  experience,
  mantra,
  photoSrc,
  delay,
}: {
  name: string
  degree: string
  experience: readonly string[]
  mantra: string
  photoSrc?: string
  delay: number
}) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center rounded-3xl border border-gray-line bg-white p-8 text-center shadow-[0_10px_28px_-18px_rgba(38,43,51,0.3)]"
    >
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-[3px] border-red-primary bg-red-soft shadow-[0_10px_25px_-8px_rgba(122,20,32,0.35)] sm:h-32 sm:w-32">
        {photoSrc ? (
          <img
            src={assetUrl(photoSrc)}
            alt={name}
            className="h-full w-full object-cover"
            style={{ filter: 'saturate(0.85) brightness(1.08) contrast(1.02)' }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-primary to-red-deep font-display text-2xl font-bold text-white">
            {initials}
          </div>
        )}
      </div>
      <h3 className="mt-5 font-display text-base font-bold text-charcoal">{name}</h3>
      <p className="mt-2.5 max-w-xs text-[13px] font-semibold leading-snug text-charcoal">{degree}</p>
      <div className="mt-2 max-w-xs space-y-1">
        {experience.map((line) => (
          <p key={line} className="text-[13px] leading-snug text-charcoal/60">
            {line}
          </p>
        ))}
      </div>
      <p className="mt-3 max-w-xs text-[13px] leading-snug font-semibold text-red-primary italic">{mantra}</p>
    </motion.div>
  )
}
