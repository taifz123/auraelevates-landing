import ActionButton from '../components/ActionButton'
import Reveal from '../components/Reveal'
import { USE_CASES } from '../data/content'

export default function UseCases() {
  return (
    <section className="use-cases section" id="use-cases">
      <div className="shell">
        <Reveal className="use-cases__heading">
          <p className="eyebrow">
            <span />
            Where it works
          </p>
          <h2>
            Choose the viewpoint.
            <br />
            <em>Then shape the output.</em>
          </h2>
        </Reveal>

        <div className="use-cases__list">
          {USE_CASES.map((item, index) => (
            <Reveal key={item.number} delay={index * 55}>
              <article>
                <span className="use-cases__number">{item.number}</span>
                <div>
                  <p className="micro-label">{item.category}</p>
                  <h3>{item.title}</h3>
                </div>
                <div className="use-cases__detail">
                  <p>{item.description}</p>
                  <span>{item.output}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="use-cases__cta">
          <p>Have a format that is not listed? Start with the moment you need people to experience.</p>
          <ActionButton href="#contact" variant="text">
            Describe your project
          </ActionButton>
        </Reveal>
      </div>
    </section>
  )
}
