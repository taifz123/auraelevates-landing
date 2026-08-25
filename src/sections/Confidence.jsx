import React from 'react'
import Reveal from '../components/Reveal'
import trainingPhoto from '../assets/training-photo.jpg'

export default function Confidence() {
  return (
    <section className="section" id="confidence">
      <div className="shell">
        <div className="split">
          {/* Training image: faceless person doing a simple accessible balance
              drill at home, framed from shoulders down. */}
          <Reveal>
            <img
              src={trainingPhoto}
              alt="Faceless person doing a simple accessible single-leg balance drill at home, framed from shoulders down"
              className="media-img"
              width="1080"
              height="1620"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <Reveal>
            <span className="eyebrow">Beyond the commute</span>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2>Feel more at home in your body.</h2>
              <p className="lead">
                The steadiness you build for the train carries quietly into the
                rest of your day. Queues, stairs, walking, travel and long days on
                your feet all feel a little easier when your posture and balance are
                working with you, not against you.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
