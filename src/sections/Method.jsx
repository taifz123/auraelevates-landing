import React from 'react'
import Reveal from '../components/Reveal'

const steps = [
  {
    n: '01',
    title: 'Align',
    body: 'Find a tall, relaxed posture that lets your body respond instead of resist.',
  },
  {
    n: '02',
    title: 'Anchor',
    body: 'Create a more stable base through better foot position, soft knees and grounded awareness.',
  },
  {
    n: '03',
    title: 'Adapt',
    body: 'Learn how to stay calm and responsive as the vehicle accelerates, turns and stops.',
  },
]

// Method graphic: minimalist abstract illustration of Align, Anchor, Adapt.
// Vertical alignment line, three balanced nodes, subtle curved motion lines.
function MethodGraphicSvg() {
  return (
    <svg
      viewBox="0 0 560 240"
      fill="none"
      role="img"
      aria-label="Abstract method diagram: a vertical alignment line with three balanced nodes and subtle curved motion lines representing Align, Anchor and Adapt"
    >
      {/* vertical alignment line */}
      <line x1="280" y1="24" x2="280" y2="216" stroke="rgba(244,241,232,0.18)" strokeWidth="1.4" />
      {/* curved motion lines */}
      <path
        d="M120 120c40-30 80-30 120 0s80 30 120 0"
        stroke="rgba(127,179,171,0.35)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M120 150c40-22 80-22 120 0s80 22 120 0"
        stroke="rgba(127,179,171,0.22)"
        strokeWidth="1.2"
        fill="none"
      />
      {/* three balanced nodes */}
      {[
        { cx: 280, cy: 50, r: 14 },
        { cx: 280, cy: 120, r: 18 },
        { cx: 280, cy: 196, r: 14 },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.cx} cy={node.cy} r={node.r + 8} stroke="rgba(127,179,171,0.18)" strokeWidth="1" />
          <circle cx={node.cx} cy={node.cy} r={node.r} stroke="#7fb3ab" strokeWidth="1.6" />
        </g>
      ))}
      {/* labels */}
      <text x="318" y="55" fill="rgba(244,241,232,0.7)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="2">ALIGN</text>
      <text x="318" y="125" fill="rgba(244,241,232,0.7)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="2">ANCHOR</text>
      <text x="318" y="201" fill="rgba(244,241,232,0.7)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="2">ADAPT</text>
    </svg>
  )
}

export default function Method() {
  return (
    <section className="section" id="method">
      <div className="shell">
        <Reveal className="section-head">
          <span className="eyebrow">The AuraElevates method</span>
          <h2>A simple system for staying steady.</h2>
        </Reveal>

        <div className="method-grid">
          {steps.map((s) => (
            <Reveal as="article" key={s.title} className="card">
              <span className="card__num" aria-hidden="true">{s.n}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Method graphic placeholder (abstract SVG, not a photo).
            Replace with a refined illustration of Align, Anchor, Adapt if desired. */}
        <Reveal className="method-graphic">
          <MethodGraphicSvg />
        </Reveal>
      </div>
    </section>
  )
}
