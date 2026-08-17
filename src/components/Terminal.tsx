import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'

function stripPrompt(line: string) {
  return line.replace(/^>\s?/, '')
}

/**
 * Looping "propaganda" terminal — types out short lines, holds, clears, repeats.
 * Falls back to a static rendered snapshot when the user prefers reduced motion.
 */
export function Terminal({ lines }: { lines: readonly string[] }) {
  const reducedMotion = useReducedMotion()
  const [rendered, setRendered] = useState<string[]>([])
  const [caretLine, setCaretLine] = useState('')
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (reducedMotion) {
      setRendered([...lines])
      setCaretLine('')
      return
    }

    let cancelled = false
    setRendered([])
    setCaretLine('')

    async function run() {
      while (!cancelled) {
        const done: string[] = []
        for (const line of lines) {
          if (cancelled) return
          for (let i = 1; i <= line.length; i++) {
            if (cancelled) return
            setCaretLine(line.slice(0, i))
            await wait(14 + Math.random() * 18)
          }
          done.push(line)
          setRendered([...done])
          setCaretLine('')
          await wait(220)
        }
        await wait(1600)
        if (cancelled) return
        setRendered([])
      }
    }

    function wait(ms: number) {
      return new Promise<void>((resolve) => {
        timeoutRef.current = window.setTimeout(resolve, ms)
      })
    }

    run()
    return () => {
      cancelled = true
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [lines, reducedMotion])

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-charcoal to-charcoal-mix shadow-[0_40px_80px_-24px_rgba(38,43,51,0.55)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">teko — zsh</span>
      </div>
      <div className="min-h-[260px] px-6 py-7 font-mono text-[15px] leading-loose text-[#e4e6e9] sm:min-h-[300px] sm:px-8 sm:py-8 sm:text-lg">
        {rendered.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            <span className="text-[#e8858f]">{'> '}</span>
            {stripPrompt(line)}
          </div>
        ))}
        {!reducedMotion && caretLine && (
          <div className="whitespace-pre-wrap">
            <span className="text-[#e8858f]">{'> '}</span>
            {stripPrompt(caretLine)}
            <span className="ml-0.5 inline-block h-[1em] w-[9px] translate-y-[3px] animate-blink bg-[#e4e6e9] align-middle" />
          </div>
        )}
      </div>
    </div>
  )
}
