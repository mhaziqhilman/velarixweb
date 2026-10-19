import { useEffect, useState } from 'react'
import { company, navItems } from '../content'
import { Arrow, CloseIcon, MenuIcon } from './Icons'

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${company.name} — back to top`}>
          <img src="/assets/logo.png" alt="" width={384} height={107} />
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <span className="nav__spacer" aria-hidden="true" />
        <a className="nav__cta" href="#contact">
          Get in touch <Arrow />
        </a>
        <button
          className="nav__menu"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav id="site-menu" className="nav__sheet" aria-label="Primary" hidden={!open}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  )
}
