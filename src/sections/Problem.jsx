import React from 'react'
import Reveal from '../components/Reveal'
import { Sway, Grip, Clock, Battery } from '../components/icons'

const problems = [
  { icon: Sway, text: 'Swaying when the bus turns or brakes.' },
  { icon: Grip, text: 'Tensing up and gripping the pole too hard.' },
  { icon: Clock, text: 'Feeling awkward when your body reacts too slowly.' },
  { icon: Battery, text: 'Arriving at your stop feeling more drained than you should.' },
]

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="shell shell--narrow">
        <Reveal className="section-head" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The everyday struggle</span>
          <h2>
            Standing on a moving vehicle should not feel like a balancing act.
          </h2>
        </Reveal>

        <ul className="problem-cards" role="list">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <Reveal as="li" key={item.text} className="card">
                <span className="card__icon" aria-hidden="true">
                  <Icon className="ic" />
                </span>
                <span className="card__body">{item.text}</span>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
