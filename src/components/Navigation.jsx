import { useEffect, useState } from 'react'
import CONFIG from '../data/config'

const LINKS = [
  ['Perspective', '#perspective'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['Services', '#services'],
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner shell">
        <a className="brand" href="#top" aria-label={`${CONFIG.brand.name}, home`}>
          <span className="brand__mark" aria-hidden="true" />
          {CONFIG.brand.name}
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
        </nav>
        <span className="nav__meta">{CONFIG.contact.serviceArea}</span>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
