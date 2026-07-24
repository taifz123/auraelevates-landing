import Reveal from '../components/Reveal'
import { COMPARISON } from '../data/content'

export default function Comparison() {
  return (
    <section className="comparison section">
      <div className="shell comparison__shell">
        <Reveal className="comparison__intro">
          <p className="eyebrow">
            <span />
            A different camera language
          </p>
          <h2>
            Do not just show
            <br />
            what happened.
            <br />
            <em>Show how it felt.</em>
          </h2>
        </Reveal>

        <Reveal className="comparison__table">
          <div className="comparison__labels">
            <span>Traditional coverage</span>
            <span>AuraElevates POV</span>
          </div>
          {COMPARISON.map((row) => (
            <div className="comparison__row" key={row.aura}>
              <p>{row.traditional}</p>
              <span aria-hidden="true">→</span>
              <p>{row.aura}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
