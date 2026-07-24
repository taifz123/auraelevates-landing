import Reveal from '../components/Reveal'
import { SHOWREEL_SLOTS } from '../data/content'

export default function Showreel() {
  return (
    <section className="section showreel" id="work" aria-labelledby="showreel-title">
      <div className="shell">
        <Reveal>
          <div className="showreel__top">
            <div>
              <p className="section-label">Selected perspective</p>
              <h2 className="title" id="showreel-title" style={{ marginTop: '1.8rem' }}>
                The place for real footage.
              </h2>
            </div>
            <a className="text-link" href="#contact">
              Plan the first shoot
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="showreel__stage">
            <div className="showreel__frame media-placeholder">
              <div
                className="showreel__play"
                aria-hidden="true"
              >
                <span aria-hidden="true">▶</span>
              </div>
              <div className="showreel__meta">
                <h3>Original showreel placeholder</h3>
                <p>Awaiting client-supplied footage</p>
              </div>
            </div>
            <div className="showreel__strip">
              {SHOWREEL_SLOTS.map(([label, description]) => (
                <div className="showreel__slot" key={label}>
                  <span>{label}</span>
                  <strong>{description}</strong>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
