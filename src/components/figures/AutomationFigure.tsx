import type { CSSProperties } from 'react'

const at = (ms: number, extra: CSSProperties = {}) => ({ '--d': `${ms}ms`, ...extra }) as CSSProperties

const NODES = [
  { x: 300, label: 'Request', tone: 'c-amber', glowAt: 100 },
  { x: 455, label: 'Approve', tone: 'c-orange', glowAt: 560 },
  { x: 610, label: 'Execute', tone: 'c-flame', glowAt: 1030 },
]

/** Packet route: out of the document stack, through the three stages, down into the report. */
const ROUTE = 'M 254 300 H 675 V 470 H 540'

/** Manual documents feeding an automated workflow that ends in a report. */
export function AutomationFigure() {
  return (
    <svg className="fig__svg" viewBox="0 0 800 600" aria-hidden="true" focusable="false">
      <text className="t-muted" x="60" y="138">
        Manual
      </text>
      <g className="docs">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${60 + i * 22} ${160 + i * 22})`}>
            <rect className="box" width="150" height="190" />
            {[44, 76, 108, 140].map((y) => (
              <line key={y} className="doc-line" x1="24" y1={y} x2={y === 140 ? 90 : 126} y2={y} />
            ))}
          </g>
        ))}
      </g>

      <text className="t-muted" x="300" y="236">
        Automated workflow
      </text>

      <path className="ln" d="M 254 300 H 300" />
      <path className="ln" d="M 430 300 H 455" />
      <path className="ln" d="M 585 300 H 610" />
      <path className="ln" d="M 675 336 V 470 H 540" />

      {NODES.map((n) => (
        <g key={n.label}>
          <rect className="box" x={n.x} y="264" width="130" height="72" />
          <rect className={`mk ${n.tone}`} x={n.x + 12} y="276" width="12" height="12" />
          <text x={n.x + 65} y="309" textAnchor="middle">
            {n.label}
          </text>
          <rect className={`glow ${n.tone}`} x={n.x} y="264" width="130" height="72" style={at(n.glowAt)} />
        </g>
      ))}

      <rect className="box" x="410" y="440" width="130" height="60" />
      <rect className="mk c-red" x="422" y="452" width="12" height="12" />
      <text x="475" y="479" textAnchor="middle">
        Report
      </text>
      <rect className="glow c-red" x="410" y="440" width="130" height="60" style={at(1950)} />

      <rect
        className="packet c-flame"
        x="-7"
        y="-7"
        width="14"
        height="14"
        style={at(0, { offsetPath: `path("${ROUTE}")`, '--dur': '2200ms' } as CSSProperties)}
      />
    </svg>
  )
}
