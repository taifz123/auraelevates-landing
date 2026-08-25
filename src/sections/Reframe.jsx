import React from 'react'
import Reveal from '../components/Reveal'
import solutionPhoto from '../assets/solution-photo.jpg'

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
          {/* Solution image: faceless commuter from torso to feet with stable
              posture, soft knees and a grounded stance inside a modern train. */}
          <Reveal>
            <img
              src={solutionPhoto}
              alt="Faceless commuter from torso to feet with stable posture, soft knees and a grounded stance inside a modern train"
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
