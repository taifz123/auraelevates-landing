import React from 'react'
import Button from '../components/Button'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import { Shield } from '../components/icons'

// Hero glyph: abstract faceless commuter holding a rail.
function HeroGlyph() {
  return (
    <svg viewBox="0 0 200 260" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {/* rail */}
      <path d="M150 10v150" opacity="0.5" />
      {/* figure */}
      <circle cx="96" cy="64" r="20" />
      <path d="M96 84v66M96 120l-22 18M96 120l22 18M96 150l-14 30M96 150l14 30" />
      {/* hand to rail */}
      <path d="M118 110l24-6" />
      {/* motion lines */}
      <path d="M40 110h26M34 130h20M44 90h18" opacity="0.4" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__grid">
        <Reveal className="hero__copy">
          <span className="eyebrow">Posture · Balance · Stability</span>
          <h1 className="hero__title">Stay steady when life moves.</h1>
          <p className="hero__sub">
            A practical guide to better posture, balance and confidence while
            standing on buses and trains.
          </p>
          <div className="hero__cta">
            <Button>Get the guide</Button>
            <Button variant="ghost" withArrow={false} href="#method" external={false}>
              See how it works
            </Button>
          </div>
          <p className="hero__trust">
            <Shield aria-hidden="true" />
            Built for everyday commuters, not gym athletes.
          </p>
        </Reveal>

        {/* Hero image placeholder.
            Replace with: faceless commuter standing upright and calmly
            inside a modern train, holding a rail lightly, motion blur
            outside the windows, lots of space for text. */}
        <Reveal className="hero__media">
          <Placeholder
            ratio="hero"
            label="Hero image"
            alt="Faceless commuter standing calmly inside a modern train, holding a rail lightly"
          >
            <HeroGlyph />
          </Placeholder>
        </Reveal>
      </div>
    </section>
  )
}
