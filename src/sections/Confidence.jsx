import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

// Everyday confidence glyph: single-leg balance drill at home, framed
// from shoulders down. Distinct from the commuter figures.
function ConfidenceGlyph() {
  return (
    <svg viewBox="0 0 160 230" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* shoulders (cropped head) */}
      <path d="M52 18h56" />
      {/* arms extended for balance */}
      <path d="M52 18l-18 24M108 18l18 24" stroke="rgba(127,179,171,0.6)" />
      {/* torso */}
      <path d="M80 18v54" />
      {/* standing leg + lifted leg (balance) */}
      <path d="M80 72l-10 56M80 72l14 16c12 4 18-2 22-12" stroke="rgba(127,179,171,0.7)" />
      {/* grounded foot + mat line */}
      <path d="M62 132l8 4 8-4" stroke="rgba(127,179,171,0.7)" />
      <line x1="36" y1="150" x2="124" y2="150" stroke="rgba(244,241,232,0.25)" />
      {/* small plant (home cue) */}
      <path d="M112 150v14M104 150v8M120 150v8M108 150v18" opacity="0.4" />
      <path d="M104 168h16" opacity="0.4" />
    </svg>
  )
}

export default function Confidence() {
  return (
    <section className="section" id="confidence">
      <div className="shell">
        <div className="split">
          {/* Training / everyday image placeholder.
              Replace with: faceless person doing a simple accessible balance or
              stability drill at home, framed from shoulders down. */}
          <Reveal>
            <Placeholder
              ratio="hero"
              tint="warm"
              glyphClassName="ph__glyph--teal"
              label="Everyday confidence image"
              alt="Faceless person doing a simple accessible balance drill at home, framed from shoulders down"
            >
              <ConfidenceGlyph />
            </Placeholder>
          </Reveal>

          <Reveal>
            <span className="eyebrow">Beyond the commute</span>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2>Feel more at home in your body.</h2>
              <p className="lead">
                The steadiness you build for the train carries quietly into the
                rest of your day. Queues, stairs, walking, travel and long days on
                your feet all feel a little easier when your posture and balance are
                working with you, not against you.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
