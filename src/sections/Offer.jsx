import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import { DELIVERABLES } from '../data/content'

export default function Offer() {
  return (
    <section className="offer section" id="service">
      <div className="shell">
        <Reveal className="offer__intro">
          <p className="eyebrow">
            <span />
            What you are buying
          </p>
          <h2>
            Not the glasses.
            <br />
            <em>The point of view.</em>
          </h2>
          <p>
            AuraElevates plans the perspective, captures the moments and turns the raw material into
            finished content with a clear purpose.
          </p>
        </Reveal>

        <div className="offer__list">
          {DELIVERABLES.map((item, index) => (
            <Reveal key={item.number} delay={index * 60}>
              <article>
                <span className="offer__number">{item.number}</span>
                <p className="micro-label">{item.note}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="offer__closing">
          <p>
            Scope, formats and turnaround are agreed around the project before filming begins.
          </p>
          <ActionButton href="#contact" variant="text">
            Build your brief
          </ActionButton>
        </Reveal>
      </div>
    </section>
  )
}
