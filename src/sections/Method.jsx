import React from 'react'
import Reveal from '../components/Reveal'
import methodPhoto from '../assets/method-photo.jpg'

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

        {/* Method graphic: anatomy-based posture diagram. */}
        <Reveal className="method-graphic">
          <img
            src={methodPhoto}
            alt="Anatomical posture diagram of a faceless standing figure in side profile, with a vertical teal alignment plumb line from ear through shoulder, hip, knee and ankle, and foot and centre-of-gravity markers"
            className="media-img media-img--wide"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  )
}
