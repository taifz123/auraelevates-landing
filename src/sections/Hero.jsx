import ActionButton from '../components/ActionButton'
import MediaPlayer from '../components/MediaPlayer'
import MetaGlasses from '../components/MetaGlasses'
import CONFIG from '../data/config'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__field" aria-hidden="true">
        <span />
        <span />
        <i />
      </div>

      <div className="shell hero__layout">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span />
            First-person event filming
          </p>
          <h1>
            Your event.
            <br />
            <em>From inside it.</em>
          </h1>
          <p className="hero__lede">
            Hands-free POV captured with Ray-Ban Meta smart glasses, then shaped into a polished
            film built for people to feel.
          </p>
          <div className="hero__actions">
            <ActionButton href="#work">Watch the demonstration</ActionButton>
            <ActionButton href={CONFIG.contact.instagram} external variant="ghost">
              DM to discuss your event
            </ActionButton>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__aperture" aria-hidden="true">
            <span />
            <span />
          </div>
          <MediaPlayer className="hero__film" compact />
          <div className="hero__product">
            <MetaGlasses />
          </div>
        </div>

        <div className="hero__proof" aria-label="Service highlights">
          <p>
            <span>01</span>
            Natural eye line
          </p>
          <p>
            <span>02</span>
            Both hands free
          </p>
          <p>
            <span>03</span>
            Edited delivery
          </p>
        </div>
      </div>

      <a className="hero__scroll" href="#work">
        <span>Enter the point of view</span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}
