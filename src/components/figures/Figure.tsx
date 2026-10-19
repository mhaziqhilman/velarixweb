import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

/** Longest diagram sequence, in ms. After this the figure returns to its resting state. */
const PLAY_MS = 2900

type Props = {
  label: string
  children: ReactNode
}

/**
 * Wraps a hand-built SVG diagram. The diagram plays once when it scrolls into view and
 * replays on hover or tap. With reduced motion it stays in its complete, static state.
 */
export function Figure({ label, children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const seen = useRef(false)
  const [playing, setPlaying] = useState(false)

  const play = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    window.clearTimeout(timer.current)
    setPlaying(false)
    requestAnimationFrame(() => {
      setPlaying(true)
      timer.current = window.setTimeout(() => setPlaying(false), PLAY_MS)
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        if (seen.current) return
        if (entries.some((entry) => entry.isIntersecting)) {
          seen.current = true
          play()
        }
      },
      { threshold: 0.55 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      window.clearTimeout(timer.current)
    }
  }, [play])

  return (
    <figure
      ref={ref}
      className="card__figure fig"
      role="img"
      aria-label={label}
      data-play={playing ? 'true' : undefined}
      onPointerEnter={play}
    >
      {children}
    </figure>
  )
}
