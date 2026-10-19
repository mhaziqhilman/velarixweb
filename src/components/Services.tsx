import { useEffect, useRef, useState, type ComponentType } from 'react'
import { services, type FigureKey } from '../content'
import { Arrow } from './Icons'
import { Figure } from './figures/Figure'
import { AutomationFigure } from './figures/AutomationFigure'
import { DataFigure } from './figures/DataFigure'
import { CloudFigure } from './figures/CloudFigure'

const FIGURES: Record<FigureKey, { label: string; Art: ComponentType }> = {
  automation: {
    label:
      'Diagram: a stack of manual documents feeding an automated request, approve and execute workflow that ends in a report.',
    Art: AutomationFigure,
  },
  data: {
    label: 'Diagram: operations, finance and field data flowing into a warehouse and out to an insights chart.',
    Art: DataFigure,
  },
  cloud: {
    label:
      'Diagram: an on-premise server rack linked to cloud compute, storage, container and database services under monitoring.',
    Art: CloudFigure,
  },
}

export function Services() {
  const [active, setActive] = useState(0)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const cards = cardRefs.current.filter((el): el is HTMLElement => el !== null)
    if (cards.length === 0 || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = cards.indexOf(entry.target as HTMLElement)
          if (index >= 0) setActive(index)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const jumpTo = (index: number) => {
    const card = cardRefs.current[index]
    if (!card) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    setActive(index)
  }

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="mission">
        <h2 id="services-title">Velarix builds the systems that let organizations act faster and smarter.</h2>
      </div>

      <div className="stack">
        <nav className="stack__tabs" aria-label="Services on this page">
          {services.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className="stack__tab"
              aria-current={active === i ? 'true' : undefined}
              onClick={() => jumpTo(i)}
            >
              {s.title}
              <Arrow />
            </button>
          ))}
        </nav>

        <div className="stack__cards">
          {services.map((s, i) => {
            const { label, Art } = FIGURES[s.figure]
            return (
            <article
              key={s.id}
              id={s.id}
              className="card"
              ref={(el) => {
                cardRefs.current[i] = el
              }}
            >
              <div className="card__body">
                <p className="card__name">{s.title}</p>
                <h3 className="card__title">{s.headline}</h3>
                <p>{s.description}</p>
                <div className="card__focus">
                  <h4>Key focus areas</h4>
                  <ul>
                    {s.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="card__cta">
                  <a className="link" href="#contact">
                    {s.cta} <Arrow />
                  </a>
                </div>
              </div>
              <Figure label={label}>
                <Art />
              </Figure>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
