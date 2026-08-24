import React from 'react'
import Button from '../components/Button'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import { Check } from '../components/icons'

const includes = [
  'Simple posture cues for standing tall without stiffening up',
  'Stable foot-position principles for moving vehicles',
  'Easy balance and mobility drills you can practise at home',
  'Guidance for braking, turning and sudden changes in motion',
  'A simple routine to build confidence over time',
]

// Product preview glyph: phone/tablet mockup showing an abstract guide interface.
function ProductGlyph() {
  return (
    <svg viewBox="0 0 160 220" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <rect x="40" y="14" width="80" height="192" rx="12" />
      <rect x="50" y="30" width="60" height="8" rx="4" opacity="0.5" />
      <rect x="50" y="48" width="40" height="6" rx="3" opacity="0.35" />
      <line x1="50" y1="72" x2="110" y2="72" opacity="0.3" />
      <line x1="50" y1="86" x2="100" y2="86" opacity="0.3" />
      <circle cx="80" cy="120" r="10" opacity="0.4" />
      <line x1="50" y1="150" x2="110" y2="150" opacity="0.3" />
      <line x1="50" y1="164" x2="90" y2="164" opacity="0.3" />
      <rect x="72" y="196" width="16" height="3" rx="1.5" />
    </svg>
  )
}

export default function Product() {
  return (
    <section className="section" id="product">
      <div className="shell">
        <Reveal className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The guide</span>
          <h2>The Stand Steady Guide</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            A practical PDF for feeling more stable on your next commute.
          </p>
        </Reveal>

        <div className="product-grid">
          {/* Product preview placeholder.
              Replace with: premium phone or tablet mockup showing an abstract
              non-readable PDF or training-guide interface. */}
          <Reveal className="product-card">
            <Placeholder
              ratio="product"
              label="Product preview"
              alt="Premium tablet mockup showing an abstract non-readable training guide interface"
            >
              <ProductGlyph />
            </Placeholder>
          </Reveal>

          <Reveal>
            <h3 style={{ fontSize: 'var(--text-xl)' }}>What is inside</h3>
            <ul className="bullets" role="list">
              {includes.map((item) => (
                <li key={item}>
                  <Check className="ic" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button>Get the Stand Steady Guide</Button>
            <p className="cta-line">Instant digital access through Payhip.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
