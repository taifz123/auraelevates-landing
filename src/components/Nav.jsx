import React, { useEffect, useState } from 'react'
import CONFIG from '../data/config'
import Logo from './Logo'
import Button from './Button'
import { Menu, Close } from './icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Logo />
        <nav aria-label="Primary">
          <ul className={`nav__links ${open ? 'is-open' : ''}`}>
            {CONFIG.nav.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Button onClick={() => setOpen(false)}>Get the Guide</Button>
            </li>
          </ul>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <Close width="20" height="20" aria-hidden="true" />
          ) : (
            <Menu width="20" height="20" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}
