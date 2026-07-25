import Reveal from '../components/Reveal'
import { PROCESS, TRUST_POINTS } from '../data/content'

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="shell process__layout">
        <Reveal className="process__intro">
          <p className="eyebrow">
            <span />
            How it works
          </p>
          <h2>
            Light during capture.
            <br />
            <em>Intentional everywhere else.</em>
          </h2>
          <p>
            The equipment stays compact. Planning, consent, footage handling and the final edit stay
            considered.
          </p>
        </Reveal>

        <div className="process__steps">
          {PROCESS.map((item, index) => (
            <Reveal key={item.number} delay={index * 70}>
              <article>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="process__trust">
          <p className="micro-label">Before recording begins</p>
          <ul>
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <span aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
