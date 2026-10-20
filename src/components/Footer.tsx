import { brandSteps, company, navItems, services } from '../content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="cells footer__cols">
        <div className="cell footer__col">
          <h3>Company</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="cell footer__col">
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cell footer__col">
          <h3>Reach us</h3>
          <ul>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span>{company.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__band">
        <a className="footer__logo" href="#top" aria-label={`${company.name} — back to top`}>
          <img src="/assets/logo.png" alt="" width={384} height={107} loading="lazy" />
        </a>
        <p className="footer__tagline">{company.tagline}.</p>
        <p className="footer__meta">
          {company.legalName} ({company.registration}) © {year}
        </p>
      </div>

      <div className="stripes" aria-hidden="true">
        {brandSteps.map((color) => (
          <span key={color} style={{ background: color }} />
        ))}
      </div>
    </footer>
  )
}
