import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import CONFIG from '../data/config'

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <Reveal className="contact__content">
          <p className="section-label">Bring us into the moment</p>
          <h2 className="contact__title" id="contact-title">
            What should it feel like to be there?
          </h2>
          <ActionButton href={CONFIG.contact.bookingUrl}>Tell us the brief</ActionButton>
          <p className="contact__note">
            Share the date, location, setting, intended platforms, and the moment you cannot capture
            properly from the outside.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
