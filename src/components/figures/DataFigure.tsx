import type { CSSProperties } from 'react'

const at = (ms: number, extra: CSSProperties = {}) => ({ '--d': `${ms}ms`, ...extra }) as CSSProperties

const SOURCES = [
  { y: 120, label: 'Operations', tone: 'c-amber', pipe: 'M 220 152 C 280 152 270 300 330 300', delay: 0 },
  { y: 268, label: 'Finance', tone: 'c-orange', pipe: 'M 220 300 H 330', delay: 150 },
  { y: 416, label: 'Field data', tone: 'c-flame', pipe: 'M 220 448 C 280 448 270 300 330 300', delay: 300 },
]

const COLUMN_TONES = ['c-amber', 'c-orange', 'c-flame', 'c-red']
const BARS = [
  { x: 580, h: 70, tone: 'c-amber' },
  { x: 620, h: 120, tone: 'c-orange' },
  { x: 660, h: 100, tone: 'c-flame' },
  { x: 700, h: 160, tone: 'c-red' },
  { x: 740, h: 200, tone: 'c-crimson' },
]

/** Three source systems flowing into a warehouse and out to an insights chart. */
export function DataFigure() {
  const cells = Array.from({ length: 28 }, (_, i) => ({ col: i % 4, row: Math.floor(i / 4) }))
  return (
    <svg className="fig__svg" viewBox="0 0 800 600" aria-hidden="true" focusable="false">
      <text className="t-muted" x="50" y="98">
        Sources
      </text>
      {SOURCES.map((s) => (
        <g key={s.label}>
          <path className="ln" d={s.pipe} />
          <rect className="box" x="50" y={s.y} width="170" height="64" />
          <rect className={`mk ${s.tone}`} x="62" y={s.y + 12} width="12" height="12" />
          <text x="135" y={s.y + 41} textAnchor="middle">
            {s.label}
          </text>
          <rect
            className={`packet ${s.tone}`}
            x="-7"
            y="-7"
            width="14"
            height="14"
            style={at(s.delay, { offsetPath: `path("${s.pipe}")`, '--dur': '1000ms' } as CSSProperties)}
          />
        </g>
      ))}

      <rect className="box" x="330" y="170" width="190" height="260" />
      {cells.map(({ col, row }, i) => {
        const x = 349 + col * 42
        const y = 189 + row * 32
        return (
          <g key={i}>
            <rect className="slot" x={x} y={y} width="34" height="24" />
            <rect className={`glow ${COLUMN_TONES[col]}`} x={x} y={y} width="34" height="24" style={at(950 + i * 35)} />
          </g>
        )
      })}
      <text className="t-muted" x="330" y="470">
        Warehouse
      </text>

      <path className="ln" d="M 520 300 H 570" />
      <rect
        className="packet c-red"
        x="-7"
        y="-7"
        width="14"
        height="14"
        style={at(1500, { offsetPath: 'path("M 520 300 H 570")', '--dur': '450ms' } as CSSProperties)}
      />

      <text className="t-muted" x="570" y="150">
        Insights
      </text>
      {BARS.map((b, i) => (
        <rect key={b.x} className={`bar ${b.tone}`} x={b.x} y={430 - b.h} width="32" height={b.h} style={at(1800 + i * 90)} />
      ))}
      <line className="ln" x1="570" y1="430" x2="770" y2="430" />
    </svg>
  )
}
