import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import DottedMap from 'dotted-map'

export type MapPoint = { lat: number; lng: number; label: string; labelBelow?: boolean }

const map = new DottedMap({ height: 60, grid: 'diagonal' })

const svgMap = map.getSVG({
  radius: 0.22,
  color: '#262b33',
  shape: 'circle',
  backgroundColor: 'transparent',
})

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360)
  const y = (90 - lat) * (400 / 180)
  return { x, y }
}

function curvePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2
  const my = Math.min(a.y, b.y) - 44
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

/**
 * Stylized world map with a hub city and animated connection arcs to a
 * handful of other cities, backing up the "global network" claim.
 * Draws the connection lines once the map scrolls into view.
 */
export function WorldMap({ points, hub }: { points: MapPoint[]; hub: MapPoint }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const projected = useMemo(
    () => points.map((p) => ({ ...p, xy: projectPoint(p.lat, p.lng) })),
    [points],
  )
  const hubXY = useMemo(() => projectPoint(hub.lat, hub.lng), [hub])

  return (
    <div ref={ref} className="relative w-full select-none">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt=""
        className="pointer-events-none h-full w-full opacity-40"
        draggable={false}
      />
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {projected.map((p, i) => (
          <motion.path
            key={p.label}
            d={curvePath(hubXY, p.xy)}
            fill="none"
            stroke="#7A1420"
            strokeWidth={1.4}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 + i * 0.22, ease: 'easeInOut' }}
          />
        ))}

        <motion.circle
          cx={hubXY.x}
          cy={hubXY.y}
          r={5}
          fill="#7A1420"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4 }}
        />
        <circle cx={hubXY.x} cy={hubXY.y} r={9} fill="none" stroke="#7A1420" strokeOpacity={0.35} />

        {projected.map((p, i) => (
          <motion.g
            key={p.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.22 }}
          >
            <circle cx={p.xy.x} cy={p.xy.y} r={3.5} fill="#262b33" />
            <text
              x={p.xy.x}
              y={p.labelBelow ? p.xy.y + 15 : p.xy.y - 10}
              textAnchor="middle"
              className="fill-charcoal/80"
              style={{ fontSize: 13, fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              {p.label}
            </text>
          </motion.g>
        ))}

        <text
          x={hubXY.x}
          y={hubXY.y - 14}
          textAnchor="middle"
          className="fill-red-primary"
          style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 800 }}
        >
          {hub.label}
        </text>
      </svg>
    </div>
  )
}
