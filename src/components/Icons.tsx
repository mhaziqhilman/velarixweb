export function Arrow() {
  return (
    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path d="M4 1.5 8.5 6 4 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export function MenuIcon() {
  const dots = [1, 6.5, 12]
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        {dots.flatMap((x) => dots.map((y) => <rect key={`${x}-${y}`} x={x} y={y} width="3" height="3" />))}
      </g>
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 3l10 10M13 3 3 13" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  )
}
