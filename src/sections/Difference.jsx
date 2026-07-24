import Reveal from '../components/Reveal'

export default function Difference() {
  return (
    <section className="difference section">
      <div className="shell difference__grid">
        <Reveal className="difference__lead">
          <p className="eyebrow">
            <span />
            The difference
          </p>
          <h2>
            The camera
            <br />
            <em>disappears.</em>
          </h2>
        </Reveal>

        <div className="difference__statements">
          <Reveal>
            <article>
              <span>01</span>
              <h3>No phone held between people.</h3>
              <p>The wearer can greet, serve, create, and move without pausing the experience.</p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article>
              <span>02</span>
              <h3>No audience left at the edge.</h3>
              <p>The finished film carries the line of sight, pace, and proximity of being there.</p>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article>
              <span>03</span>
              <h3>No edit without intention.</h3>
              <p>Raw moments are shaped into a focused story with rhythm, sound, and a clear end use.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
