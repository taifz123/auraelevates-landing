import Reveal from '../components/Reveal'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="shell">
        <div className="process__header">
          <Reveal>
            <div>
              <p className="section-label">From brief to final cut</p>
              <h2 className="title" id="process-title">
                Directed enough to work. Natural enough to feel true.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={130} className="process__intro">
            <p className="lede">
              The technology disappears into a disciplined production process—creative planning,
              respectful filming, clear deliverables, and post-production shaped around the
              platform.
            </p>
          </Reveal>
        </div>
        <div className="process__steps">
          {PROCESS.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <article className="process-step">
                <span className="process-step__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
