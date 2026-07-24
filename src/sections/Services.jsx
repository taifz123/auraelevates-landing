import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import CONFIG from '../data/config'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="shell services__layout">
        <Reveal className="services__sticky">
          <p className="section-label">Ways to work together</p>
          <h2 className="title" id="services-title">
            A format for the moment.
          </h2>
          <p className="lede">
            Scope and pricing depend on filming time, travel, access, editing, and turnaround. No
            invented packages or fine print—just a clear production built around the brief.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <ActionButton href={CONFIG.contact.bookingUrl}>Request a scope</ActionButton>
          </div>
        </Reveal>
        <div className="services__list">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="service">
                <div className="service__top">
                  <h3>{service.title}</h3>
                  <span className="service__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="service__details">
                  <p>{service.description}</p>
                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
