import { about, company } from '../content'
import { Arrow } from './Icons'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section-head">
        <h2 id="about-title">About Velarix Technology.</h2>
        <a className="btn btn--primary" href="#contact">
          Get in touch <Arrow />
        </a>
      </div>

      <div className="cells about__grid">
        <div className="cell">
          <h3 className="cell__label">Who we are</h3>
          <p>{about.who}</p>
        </div>
        <div className="cell">
          <h3 className="cell__label">What we do</h3>
          <p>{about.mission}</p>
        </div>
        <blockquote className="cell cell--flood about__quote">
          <p>“{about.belief}”</p>
          <footer>{company.name}</footer>
        </blockquote>
      </div>

      <div className="careers" id="careers">
        <h3>Growing, and hiring.</h3>
        <div>
          <p>{about.careers}</p>
          <a
            className="link"
            href={`mailto:${company.email}?subject=${encodeURIComponent('Joining Velarix Technology')}`}
          >
            Write to us <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
