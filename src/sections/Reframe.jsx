import React from 'react'
import Reveal from '../components/Reveal'
import heroPhoto from '../assets/hero-photo.jpg'

export default function Reframe() {
  return (
    <section className="section" id="reframe">
      <div className="shell">
        <Reveal className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>A calmer way to stand</span>
          <h2>
            Stability is not about being stronger. It is about being better
            organised.
          </h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Everyday steadiness can be practised. Through posture awareness, foot
            placement, balance and controlled body positioning, your body learns to
            respond instead of react.
          </p>
        </Reveal>

        <div className="split" style={{ alignItems: 'center', marginTop: 'var(--space-10)' }}>
          {/* Solution image: faceless commuter standing calmly inside a
              modern train, holding a rail lightly, city lights outside. */}
          <Reveal>
            <img
              src={heroPhoto}
              alt="Faceless commuter standing calmly inside a modern train at night, holding a rail lightly, city lights blurred through the window"
              className="media-img"
              width="1080"
              height="1620"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <Reveal>
            <blockquote className="pullquote" style={{ margin: 0 }}>
              <p>Calm body. Clear position. Better control.</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
