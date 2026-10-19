import type { CSSProperties } from 'react'
import { brandSteps, outcomes } from '../content'

export function Statement() {
  return (
    <section className="section statement" aria-labelledby="statement-title">
      <h2 id="statement-title">We turn conventional work into</h2>
      <ul className="chips">
        {outcomes.map((item, i) => (
          <li key={item} style={{ '--chip-color': brandSteps[i % brandSteps.length] } as CSSProperties}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
