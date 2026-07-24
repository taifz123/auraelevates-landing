import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import CONFIG from '../data/config'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="shell contact__inner">
        <Reveal>
          <p className="eyebrow eyebrow--center">
            <span />
            Book AuraElevates
            <span />
          </p>
          <h2>
            Put your audience
            <br />
            <em>inside the moment.</em>
          </h2>
          <p>
            Tell us what you are planning, when it is happening, and the feeling you want the final
            film to carry.
          </p>
          <ActionButton href={CONFIG.contact.instagram} external className="contact__button">
            DM AuraElevates
          </ActionButton>
        </Reveal>
      </div>
    </section>
  )
}
