import Reveal from '../components/Reveal'
import { TRUST_POINTS } from '../data/content'

export default function Trust() {
  return (
    <section className="trust section">
      <div className="shell trust__grid">
        <Reveal className="trust__intro">
          <p className="eyebrow">
            <span />
            Light equipment, serious planning
          </p>
          <h2>
            Invisible in the moment.
            <br />
            <em>Intentional everywhere else.</em>
          </h2>
          <p>
            The capture setup is compact. The responsibility around access, consent, privacy, and
            delivery is not.
          </p>
        </Reveal>

        <div className="trust__list">
          {TRUST_POINTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
