import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

// Brand story glyph: refined desk flat lay with a notebook of posture
// diagrams, a pen, a transit route card and small wellness objects.
function DeskGlyph() {
  return (
    <svg viewBox="0 0 280 160" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* notebook */}
      <rect x="18" y="30" width="150" height="104" rx="5" />
      <line x1="18" y1="52" x2="168" y2="52" stroke="rgba(127,179,171,0.5)" />
      {/* spine rings */}
      <circle cx="24" cy="40" r="2.5" fill="rgba(244,241,232,0.3)" stroke="none" />
      <circle cx="24" cy="58" r="2.5" fill="rgba(244,241,232,0.3)" stroke="none" />
      <circle cx="24" cy="76" r="2.5" fill="rgba(244,241,232,0.3)" stroke="none" />
      {/* posture diagram on left page */}
      <circle cx="58" cy="74" r="7" opacity="0.5" />
      <line x1="58" y1="81" x2="58" y2="112" opacity="0.5" />
      <line x1="58" y1="90" x2="48" y2="104" opacity="0.5" />
      <line x1="58" y1="90" x2="68" y2="104" opacity="0.5" />
      {/* diagram caption lines */}
      <line x1="90" y1="64" x2="150" y2="64" opacity="0.3" />
      <line x1="90" y1="78" x2="140" y2="78" opacity="0.3" />
      <line x1="90" y1="92" x2="150" y2="92" opacity="0.3" />
      <line x1="90" y1="106" x2="132" y2="106" opacity="0.3" />
      {/* pen */}
      <line x1="186" y1="132" x2="214" y2="104" />
      <path d="M210 100l8 8 6-6-8-8Z" fill="rgba(127,179,171,0.25)" />
      {/* transit route card */}
      <rect x="196" y="40" width="66" height="30" rx="4" stroke="rgba(127,179,171,0.5)" />
      <circle cx="206" cy="55" r="3" fill="rgba(127,179,171,0.6)" stroke="none" />
      <circle cx="252" cy="55" r="3" fill="rgba(127,179,171,0.6)" stroke="none" />
      <line x1="209" y1="55" x2="249" y2="55" stroke="rgba(127,179,171,0.5)" strokeDasharray="2 3" />
      {/* water bottle */}
      <rect x="206" y="84" width="24" height="40" rx="6" opacity="0.4" />
      <rect x="212" y="78" width="12" height="8" rx="2" opacity="0.4" />
      {/* small object */}
      <circle cx="248" cy="120" r="10" opacity="0.35" />
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
            tint="deep"
            glyphClassName="ph__glyph--wide"
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
