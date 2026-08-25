import React from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { Shield } from '../components/icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="shell hero__inner">
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
      </div>
    </section>
  )
}
