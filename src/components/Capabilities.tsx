import type { CSSProperties } from 'react'
import { capabilities } from '../content'

export function Capabilities() {
  return (
    <section className="section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-head">
        <h2 id="capabilities-title">Our digital capabilities.</h2>
        <p className="lede">{capabilities.intro}</p>
      </div>
      <ul className="cells caps">
        {capabilities.items.map((item) => (
          <li key={item.title} className="cell">
            <h3>
              <span className="mark" style={{ '--mark-color': item.color } as CSSProperties} aria-hidden="true" />
              {item.title}
            </h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
