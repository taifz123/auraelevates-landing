import React from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { Check } from '../components/icons'
import productPhoto from '../assets/product-photo.jpg'

const includes = [
  'Simple posture cues for standing tall without stiffening up',
  'Stable foot-position principles for moving vehicles',
  'Easy balance and mobility drills you can practise at home',
  'Guidance for braking, turning and sudden changes in motion',
  'A simple routine to build confidence over time',
]

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
          {/* Product preview: tablet mockup showing the guide table of contents. */}
          <Reveal>
            <img
              src={productPhoto}
              alt="Tablet mockup showing the Stand Steady Guide table of contents: posture cues, foot position, balance drills, braking and turning, and a confidence routine"
              className="media-img"
              width="1080"
              height="1620"
              loading="lazy"
              decoding="async"
            />
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
