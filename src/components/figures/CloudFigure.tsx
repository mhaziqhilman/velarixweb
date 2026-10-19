import type { CSSProperties } from 'react'

const at = (ms: number, extra: CSSProperties = {}) => ({ '--d': `${ms}ms`, ...extra }) as CSSProperties

const LINKS = [
  { d: 'M 250 230 C 340 230 350 180 440 180', tone: 'c-amber', delay: 500 },
  { d: 'M 250 380 C 340 380 350 400 440 400', tone: 'c-flame', delay: 700 },
]

const SERVICES = [
  { x: 455, y: 180, w: 140, label: 'Compute', tone: 'c-amber', glowAt: 1300 },
  { x: 600, y: 180, w: 140, label: 'Storage', tone: 'c-orange', glowAt: 1450 },
  { x: 455, y: 270, w: 140, label: 'Containers', tone: 'c-flame', glowAt: 1600 },
  { x: 600, y: 270, w: 140, label: 'Database', tone: 'c-red', glowAt: 1750 },
  { x: 455, y: 360, w: 285, label: 'Monitoring', tone: 'c-crimson', glowAt: 1900 },
]

/** An on-premise rack linked to cloud services under continuous monitoring. */
export function CloudFigure() {
  return (
    <svg className="fig__svg" viewBox="0 0 800 600" aria-hidden="true" focusable="false">
      <text className="t-muted" x="60" y="100">
        On-premise
      </text>
      <rect className="box" x="60" y="120" width="190" height="340" />
      {Array.from({ length: 6 }, (_, i) => {
        const y = 138 + i * 56
        return (
          <g key={i}>
            <rect className="slot" x="75" y={y} width="160" height="40" />
            <rect className={`mk ${i % 2 ? 'c-flame' : 'c-amber'}`} x="211" y={y + 14} width="12" height="12" />
            <rect className="glow c-amber" x="75" y={y} width="160" height="40" style={at(i * 80)} />
          </g>
        )
      })}

      {LINKS.map((l) => (
        <g key={l.d}>
          <path className="ln ln--dash" d={l.d} style={at(l.delay - 300)} />
          <rect
            className={`packet ${l.tone}`}
            x="-7"
            y="-7"
            width="14"
            height="14"
            style={at(l.delay, { offsetPath: `path("${l.d}")`, '--dur': '900ms' } as CSSProperties)}
          />
        </g>
      ))}

      <rect className="box box--dashed" x="440" y="110" width="310" height="350" rx="6" />
      <text className="t-muted" x="460" y="152">
        Cloud
      </text>
      {SERVICES.map((s) => (
        <g key={s.label}>
          <rect className="box" x={s.x} y={s.y} width={s.w} height="60" />
          <rect className={`mk ${s.tone}`} x={s.x + 12} y={s.y + 12} width="12" height="12" />
          <text x={s.x + (s.w > 200 ? 90 : s.w / 2)} y={s.y + 39} textAnchor="middle">
            {s.label}
          </text>
          <rect className={`glow ${s.tone}`} x={s.x} y={s.y} width={s.w} height="60" style={at(s.glowAt)} />
        </g>
      ))}
      <circle className="ring" cx="700" cy="390" r="16" pathLength={1} style={at(1900)} />
    </svg>
  )
}
