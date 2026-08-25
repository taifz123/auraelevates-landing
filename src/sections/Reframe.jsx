import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

// Solution glyph: aligned, grounded stance diagram with a plumb line,
// foot-placement brackets and soft-knee markers.
function SolutionGlyph() {
  return (
    <svg viewBox="0 0 160 240" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* vertical alignment plumb line */}
      <line x1="80" y1="14" x2="80" y2="226" stroke="rgba(127,179,171,0.55)" strokeDasharray="4 5" />
      {/* head */}
      <circle cx="80" cy="36" r="12" />
      {/* torso */}
      <path d="M80 48v52M80 64l-12 8M80 64l12 8" />
      {/* soft-knee markers */}
      <path d="M68 118c4-3 8-3 12-3s8 0 12 3" stroke="rgba(127,179,171,0.6)" />
      {/* legs grounded */}
      <path d="M68 116l-8 50M92 116l8 50" />
      {/* foot placement brackets (stable base) */}
      <path d="M52 176l8 4 8-4M92 176l8 4 8-4" stroke="rgba(127,179,171,0.7)" />
      <line x1="50" y1="184" x2="112" y2="184" stroke="rgba(127,179,171,0.4)" />
      {/* base triangle (stability) */}
      <path d="M56 200l24-14 24 14Z" stroke="rgba(127,179,171,0.3)" fill="rgba(127,179,171,0.05)" />
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
              tint="teal"
              glyphClassName="ph__glyph--teal"
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
