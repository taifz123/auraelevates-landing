import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

// Everyday confidence glyph: faceless person doing a simple balance drill.
function ConfidenceGlyph() {
  return (
    <svg viewBox="0 0 160 220" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="80" cy="40" r="16" />
      <path d="M80 56v60M80 86l-26 14M80 86l26 14M80 116l-16 34M80 116l16 34" />
      {/* balance line / ground */}
      <line x1="36" y1="186" x2="124" y2="186" opacity="0.4" />
      <path d="M64 186c8-8 24-8 32 0" opacity="0.3" />
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
