import Reveal from '../components/Reveal'

export default function Manifesto() {
  return (
    <section className="section manifesto" aria-labelledby="manifesto-title">
      <div className="shell">
        <div className="manifesto__grid">
          <Reveal>
            <p className="section-label">The difference</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="manifesto__statement" id="manifesto-title">
              A held camera records the scene. Eye-level film records your <em>place inside it.</em>
            </h2>
          </Reveal>
        </div>
        <div className="manifesto__notes">
          <Reveal delay={120}>
            <p>
              <span>01 / Presence</span>
              No screen between the operator and the moment. Conversation, craft, movement, and
              reaction stay natural.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p>
              <span>02 / Memory</span>
              The frame follows attention itself: the glance before the action, the hands at work,
              the person just outside the centre.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
