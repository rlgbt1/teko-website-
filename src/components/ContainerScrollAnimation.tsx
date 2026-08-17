import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../lib/useReducedMotion'
import { useIsMobile } from '../lib/useIsMobile'

/**
 * Reveals framed content (an image/screenshot) with a 3D tilt-to-flat
 * scroll-driven animation. Degrades to a static framed image on mobile
 * and for prefers-reduced-motion, since perspective transforms are the
 * classic mobile-jank offender.
 */
export function ContainerScrollAnimation({
  titleSlot,
  children,
}: {
  titleSlot: ReactNode
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const skipAnimation = reducedMotion || isMobile

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0, 0.5], [18, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [40, 0])

  return (
    <div ref={ref} className="relative flex flex-col items-center py-10">
      <div className="mb-8 w-full text-center">{titleSlot}</div>
      {skipAnimation ? (
        <div className="w-full max-w-4xl rounded-2xl border-4 border-charcoal bg-charcoal p-2 shadow-2xl">
          <div className="overflow-hidden rounded-xl bg-white">{children}</div>
        </div>
      ) : (
        <div style={{ perspective: '1200px' }} className="w-full max-w-4xl">
          <motion.div
            style={{
              rotateX: rotate,
              scale,
              y: translateY,
              transformOrigin: 'center top',
            }}
            className="rounded-2xl border-4 border-charcoal bg-charcoal p-2 shadow-[0_50px_100px_-30px_rgba(38,43,51,0.5)]"
          >
            <div className="overflow-hidden rounded-xl bg-white">{children}</div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
