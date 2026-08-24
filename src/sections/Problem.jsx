import React from 'react'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import { Sway, Grip, Clock, Battery } from '../components/icons'

const problems = [
  { icon: Sway, text: 'Swaying when the bus turns or brakes.' },
  { icon: Grip, text: 'Tensing up and gripping the pole too hard.' },
  { icon: Clock, text: 'Feeling awkward when your body reacts too slowly.' },
  { icon: Battery, text: 'Arriving at your stop feeling more drained than you should.' },
]

// Problem glyph: lower body subtly swaying.
function ProblemGlyph() {
  return (
    <svg viewBox="0 0 160 200" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M70 10v60M90 10v60M70 70l20 0M64 100l8 40M96 100l-8 40M60 150l12-10 12 10 12-10 12 10" />
      <path d="M64 96c8-6 24-6 32 0" opacity="0.4" />
    </svg>
  )
}

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="shell">
        <div className="problem-grid">
          <Reveal>
            <span className="eyebrow">The everyday struggle</span>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2>
                Standing on a moving vehicle should not feel like a balancing act.
              </h2>
            </div>
            <ul className="problem-list" role="list">
              {problems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text}>
                    <Icon className="ic" aria-hidden="true" />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* Problem image placeholder.
              Replace with: cropped lower body of a commuter subtly swaying
              while standing on public transport, realistic but not unsafe. */}
          <Reveal>
            <Placeholder
              ratio="hero"
              label="Problem image"
              alt="Cropped lower body of a commuter subtly swaying while standing on public transport"
            >
              <ProblemGlyph />
            </Placeholder>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
