import React from 'react'
import Reveal from '../components/Reveal'

export default function Reframe() {
  return (
    <section className="section" id="reframe">
      <div className="shell shell-narrow" style={{ width: 'var(--shell)' }}>
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

        <Reveal>
          <blockquote className="pullquote">
            <p>Calm body. Clear position. Better control.</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
