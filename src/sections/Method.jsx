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
  const nodes = [
    { cx: 280, cy: 58, r: 13, label: 'ALIGN' },
    { cx: 280, cy: 130, r: 18, label: 'ANCHOR' },
    { cx: 280, cy: 208, r: 13, label: 'ADAPT' },
  ]
  return (
    <svg
      viewBox="0 0 560 260"
      fill="none"
      role="img"
      aria-label="Abstract method diagram: a vertical alignment line with three balanced nodes and subtle curved motion lines representing Align, Anchor and Adapt"
    >
      <ellipse cx="280" cy="130" rx="120" ry="70" fill="rgba(127,179,171,0.10)" />
      <line x1="280" y1="30" x2="280" y2="230" stroke="rgba(244,241,232,0.22)" strokeWidth="1.4" />
      <path d="M70 130c50-34 110-34 170 0s120 34 180 0" stroke="rgba(127,179,171,0.45)" strokeWidth="1.3" />
      <path d="M70 160c50-22 110-22 170 0s120 22 180 0" stroke="rgba(127,179,171,0.28)" strokeWidth="1.2" />
      <path d="M70 100c50-30 110-30 170 0s120 30 180 0" stroke="rgba(127,179,171,0.20)" strokeWidth="1.1" />
      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r={node.r + 10} stroke="rgba(127,179,171,0.20)" strokeWidth="1" />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill="rgba(127,179,171,0.18)" stroke="#7fb3ab" strokeWidth="1.8" />
          <circle cx={node.cx} cy={node.cy} r={node.r - 6} fill="#7fb3ab" opacity="0.85" />
          <text x={node.cx + node.r + 14} y={node.cy + 4} fill="rgba(244,241,232,0.78)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="2">{node.label}</text>
        </g>
      ))}
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
