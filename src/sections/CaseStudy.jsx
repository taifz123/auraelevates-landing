import MediaPlayer from '../components/MediaPlayer'
import Reveal from '../components/Reveal'
import { CASE_STUDY } from '../data/content'

export default function CaseStudy() {
  return (
    <section className="case-study section" id="work">
      <div className="shell">
        <div className="case-study__heading">
          <Reveal>
            <p className="eyebrow">
              <span />
              {CASE_STUDY.label}
            </p>
            <h2>{CASE_STUDY.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>{CASE_STUDY.description}</p>
          </Reveal>
        </div>

        <Reveal className="case-study__feature">
          <MediaPlayer autoPlay={false} />
          <aside>
            <p className="micro-label">The creative logic</p>
            <h3>Show the shift. Do not over-explain it.</h3>
            <p>
              The film moves from a visible pair of glasses to the social distance only a
              first-person camera can hold. The hardware opens the idea. The human moment closes it.
            </p>
            <dl>
              {CASE_STUDY.facts.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>

        <div className="case-study__chapters">
          {CASE_STUDY.chapters.map((chapter, index) => (
            <Reveal key={chapter.number} delay={index * 70}>
              <article>
                <figure>
                  <img
                    src={chapter.image}
                    alt={chapter.alt}
                    width="760"
                    height="760"
                    loading="lazy"
                  />
                  <span>{chapter.number}</span>
                </figure>
                <p className="micro-label">{chapter.label}</p>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="case-study__disclosure">
          <span>Transparency note</span>
          <p>
            This is a self-initiated demonstration of the AuraElevates format. It is not described
            as paid client work and no performance results are claimed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
