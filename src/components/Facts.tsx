import { facts } from '../content'

export function Facts() {
  return (
    <section aria-label="Company facts">
      <ul className="cells facts">
        {facts.map((f) => (
          <li key={f.label}>
            <span className="facts__label">{f.label}</span>
            <span className="facts__value">{f.value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
