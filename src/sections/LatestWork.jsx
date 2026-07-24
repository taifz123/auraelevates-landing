import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import CONFIG from '../data/config'

export default function LatestWork() {
  return (
    <section className="latest-work section">
      <div className="shell">
        <Reveal className="latest-work__panel">
          <div className="latest-work__index">
            <span>AE</span>
            <i />
            <span>IG</span>
          </div>
          <div>
            <p className="eyebrow">
              <span />
              Latest work
            </p>
            <h2>
              See the perspective
              <br />
              <em>in motion.</em>
            </h2>
          </div>
          <div className="latest-work__action">
            <p>Current films, recent moments, and new first-person edits are published on Instagram.</p>
            <ActionButton href={CONFIG.contact.instagram} external>
              Open Instagram
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
