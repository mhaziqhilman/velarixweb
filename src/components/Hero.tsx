import type { CSSProperties } from 'react'
import { brandSteps } from '../content'
import { Arrow } from './Icons'

const delay = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__blocks hero__blocks--left" aria-hidden="true">
        <span className="blk blk--amber" style={delay(0)} />
        <span className="blk blk--orange" style={delay(2)} />
      </div>
      <div className="hero__blocks hero__blocks--right" aria-hidden="true">
        <span className="blk blk--diamond" style={delay(1)} />
        <span className="blk blk--flame" style={delay(3)} />
      </div>

      <h1 className="hero__display" id="hero-title">
        <span>Digitizing</span>
        <span>the Future.</span>
      </h1>

      <a className="chip" href="#about">
        <span className="chip__mark" aria-hidden="true" />
        Meet Velarix Technology
        <Arrow />
      </a>

      <div className="hero__stripe" aria-hidden="true">
        {brandSteps.slice(0, 4).map((color) => (
          <span key={color} style={{ background: color }} />
        ))}
      </div>
    </section>
  )
}
