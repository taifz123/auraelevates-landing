import Reveal from '../components/Reveal'
import { USE_CASES } from '../data/content'

export default function UseCases() {
  return (
    <section className="use-cases section" id="use-cases">
      <div className="shell">
        <Reveal className="use-cases__heading">
          <p className="eyebrow">
            <span />
            Where POV changes the story
          </p>
          <h2>
            Made for moments
            <br />
            <em>that move.</em>
          </h2>
        </Reveal>

        <div className="use-cases__grid">
          {USE_CASES.map((item, index) => (
            <Reveal key={item.category} delay={(index % 3) * 70} className={`use-case use-case--${item.tone}`}>
              <article>
                <div className="use-case__top">
                  <span>{item.number}</span>
                  <span>{item.category}</span>
                </div>
                <div className="use-case__graphic" aria-hidden="true">
                  <i />
                  <i />
                  <span />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
