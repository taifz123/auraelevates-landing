import BriefBuilder from '../components/BriefBuilder'
import Reveal from '../components/Reveal'
import CONFIG from '../data/config'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__field" aria-hidden="true">
        <span />
      </div>
      <div className="shell contact__layout">
        <Reveal className="contact__intro">
          <p className="eyebrow">
            <span />
            Discuss your event
          </p>
          <h2>
            Start with the moment
            <br />
            <em>people need to feel.</em>
          </h2>
          <p>
            Build a concise project brief here. Then copy it into a direct conversation with
            {` ${CONFIG.contact.handle}`}.
          </p>
          <div className="contact__direct">
            <span>Prefer to skip the form?</span>
            <a href={CONFIG.contact.instagram} target="_blank" rel="noreferrer">
              DM AuraElevates <i aria-hidden="true">↗</i>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact__builder" delay={100}>
          <BriefBuilder />
        </Reveal>
      </div>
    </section>
  )
}
