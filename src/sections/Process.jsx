import Reveal from '../components/Reveal'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="shell">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">
              <span />
              How it works
            </p>
            <h2>
              From eye line
              <br />
              <em>to final cut.</em>
            </h2>
          </div>
          <p className="section-heading__copy">
            A considered process keeps the filming light while giving the finished piece a clear
            creative purpose.
          </p>
        </Reveal>

        <div className="process__list">
          {PROCESS.map((item, index) => (
            <Reveal key={item.number} delay={index * 90}>
              <article className="process__item">
                <span className="process__number">{item.number}</span>
                <div className="process__line" aria-hidden="true">
                  <i />
                </div>
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
