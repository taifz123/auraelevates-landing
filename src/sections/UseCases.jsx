import Reveal from '../components/Reveal'
import { USE_CASES } from '../data/content'

export default function UseCases() {
  return (
    <section className="section use-cases" aria-labelledby="use-cases-title">
      <div className="shell">
        <div className="use-cases__heading">
          <Reveal>
            <div>
              <p className="section-label">Built for real movement</p>
              <h2 className="title" id="use-cases-title" style={{ marginTop: '1.8rem' }}>
                When being there is the story.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede">
              A different visual language for events, skilled work, hospitality, automotive,
              property, training, travel, and behind-the-scenes content.
            </p>
          </Reveal>
        </div>
        <div className="use-cases__track" aria-label="Filming scenarios">
          {USE_CASES.map((item, index) => (
            <article
              className="case"
              key={item.title}
              style={{ '--case-light': item.light }}
            >
              <span className="case__index">
                {String(index + 1).padStart(2, '0')} / {item.category}
              </span>
              <div className="case__caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
