import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

// Brand story glyph: refined desk flat lay with a notebook of posture
// diagrams, a pen, and small wellness objects.
function DeskGlyph() {
  return (
    <svg viewBox="0 0 240 150" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      {/* notebook */}
      <rect x="16" y="30" width="120" height="92" rx="4" />
      <line x1="16" y1="50" x2="136" y2="50" opacity="0.5" />
      {/* posture diagram lines (non-readable) */}
      <circle cx="48" cy="68" r="6" opacity="0.4" />
      <line x1="48" y1="74" x2="48" y2="104" opacity="0.4" />
      <line x1="48" y1="84" x2="38" y2="98" opacity="0.4" />
      <line x1="48" y1="84" x2="58" y2="98" opacity="0.4" />
      <line x1="80" y1="60" x2="120" y2="60" opacity="0.3" />
      <line x1="80" y1="72" x2="112" y2="72" opacity="0.3" />
      <line x1="80" y1="84" x2="120" y2="84" opacity="0.3" />
      {/* pen */}
      <line x1="150" y1="120" x2="178" y2="92" />
      <circle cx="180" cy="90" r="2.5" />
      {/* small objects */}
      <circle cx="196" cy="108" r="10" opacity="0.4" />
      <rect x="158" y="40" width="44" height="30" rx="3" opacity="0.35" />
      {/* transit reference card */}
      <rect x="150" y="78" width="54" height="22" rx="3" opacity="0.3" />
    </svg>
  )
}

export default function BrandStory() {
  return (
    <section className="section" id="story" style={{ paddingTop: 0 }}>
      <div className="shell">
        <Reveal className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The AuraElevates notebook</span>
          <h2>Built from everyday observation.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            AuraElevates began by watching how people stand, sway and steady
            themselves on real commutes. The guide distills those moments into
            simple, repeatable cues you can use the same day.
          </p>
        </Reveal>

        {/* Brand story visual placeholder.
            Replace with: a refined desk flat lay with a notebook containing
            non-readable posture diagrams, transit-inspired visual references
            and clean wellness objects. */}
        <Reveal>
          <Placeholder
            ratio="wide"
            label="Brand story visual"
            alt="Refined desk flat lay with a notebook of non-readable posture diagrams, transit-inspired references and clean wellness objects"
          >
            <DeskGlyph />
          </Placeholder>
        </Reveal>
      </div>
    </section>
  )
}
