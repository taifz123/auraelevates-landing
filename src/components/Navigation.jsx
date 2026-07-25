import { useEffect, useState } from 'react'
import CONFIG from '../data/config'
import BrandLogo from './BrandLogo'

const LINKS = [
  ['Work', '#work'],
  ['Service', '#service'],
  ['Process', '#process'],
  ['FAQ', '#faq'],
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav" data-scrolled={scrolled} data-open={open}>
      <div className="nav__inner shell">
        <a className="nav__brand" href="#top" aria-label="AuraElevates, home">
          <BrandLogo />
        </a>
        <nav
          className="nav__links"
          data-open={open}
          id="mobile-navigation"
          aria-label="Main navigation"
        >
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav__mobile-book"
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            DM to book
          </a>
        </nav>
        <a
          className="nav__book"
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <span>DM to book</span>
          <span aria-hidden="true">↗</span>
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <i aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
