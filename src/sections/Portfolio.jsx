import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import CONFIG from '../data/config'

export default function Portfolio() {
  return (
    <section className="portfolio section" id="work">
      <div className="shell">
        <Reveal className="portfolio__header">
          <div>
            <p className="eyebrow">
              <span />
              View our work
            </p>
            <h2>
              Real moments.
              <br />
              <em>First-person.</em>
            </h2>
          </div>
          <p>
            We only show real AuraElevates footage. Visit Instagram to watch current examples and
            see how the perspective moves through an experience.
          </p>
        </Reveal>

        <Reveal className="portfolio__portal">
          <a href={CONFIG.contact.instagram} target="_blank" rel="noreferrer">
            <div className="portfolio__rings" aria-hidden="true">
              <i />
              <i />
              <i />
              <span />
            </div>
            <div className="portfolio__portal-copy">
              <p>Live portfolio / @auraelevates</p>
              <h3>Watch the real POV</h3>
              <span className="portfolio__play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="m9 7 7 5-7 5V7Z" />
                </svg>
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal className="portfolio__foot">
          <p>
            Captured through a 12MP ultra-wide camera, then selected and edited for the story,
            platform, and pace.
          </p>
          <ActionButton href={CONFIG.contact.instagram} external variant="text">
            View our work
          </ActionButton>
        </Reveal>
      </div>
    </section>
  )
}
