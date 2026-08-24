import React from 'react'
import CONFIG from '../data/config'
import Logo from './Logo'
import { Instagram } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__tag">
              Better posture. Steadier movement. Everyday confidence.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="footer__links">
              <li>
                <a href="#method">How It Works</a>
              </li>
              <li>
                <a href="#product">What You Get</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href={CONFIG.payhipUrl} target="_blank" rel="noopener noreferrer">
                  Get the Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul className="footer__links">
              <li>
                <a
                  href={CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                >
                  <Instagram aria-hidden="true" />
                  Follow on Instagram
                </a>
              </li>
              <li>
                <a href={CONFIG.payhipUrl} target="_blank" rel="noopener noreferrer">
                  Stand Steady Guide on Payhip
                </a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {year} {CONFIG.brand.name}. All rights reserved.
          </span>
          <span className="muted">{CONFIG.brand.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
