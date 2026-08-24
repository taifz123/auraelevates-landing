import React from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function FinalCTA() {
  return (
    <section className="section final-cta" id="get-started">
      <div className="shell shell-narrow" style={{ width: 'var(--shell)' }}>
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Start today</span>
          <h2>Your next commute can feel different.</h2>
          <p className="lead">Start building a calmer, more stable way to move.</p>
          <Button>Get the Stand Steady Guide</Button>
        </Reveal>
      </div>
    </section>
  )
}
