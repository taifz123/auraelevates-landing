import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

// Solution glyph: faceless commuter, torso to feet, stable posture, soft knees.
function SolutionGlyph() {
  return (
    <svg viewBox="0 0 160 220" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {/* vertical alignment line */}
      <line x1="80" y1="10" x2="80" y2="210" opacity="0.25" />
      {/* torso to feet */}
      <path d="M64 24h32l-4 40H68l-4-40Z" />
      <path d="M68 64l-6 30M96 64l6 30" />
      {/* soft knees, grounded stance */}
      <path d="M62 94c6-4 10-4 18-4s12 0 18 4" opacity="0.4" />
      <path d="M62 94l-4 40M98 94l4 40" />
      <path d="M58 150l8 6 14-6 14 6 8-6" />
      <path d="M56 156l8 8 16-8 16 8 8-8" opacity="0.3" />
    </svg>
  )
}

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
          {/* Solution image placeholder.
              Replace with: faceless commuter from torso to feet with stable
              posture, soft knees and grounded stance inside a modern train. */}
          <Reveal>
            <Placeholder
              ratio="hero"
              label="Solution image"
              alt="Faceless commuter from torso to feet with stable posture, soft knees and a grounded stance inside a modern train"
            >
              <SolutionGlyph />
            </Placeholder>
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
