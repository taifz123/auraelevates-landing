import Reveal from '../components/Reveal'

export default function VisualProof() {
  return (
    <section className="pov section" id="pov">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <Reveal>
            <p className="eyebrow">
              <span />
              The point of view
            </p>
            <h2>
              Film what it feels like
              <br />
              <em>to be there.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-heading__copy">
              The lens sits at eye level and moves with the wearer. Both hands stay free, the
              interaction continues, and the audience enters the moment from within it.
            </p>
          </Reveal>
        </div>

        <Reveal className="pov__stage">
          <div className="pov__index" aria-hidden="true">
            <span>OPTIC / 12 MP</span>
            <span>FIELD NOTE 01</span>
          </div>
          <div className="pov__product">
            <img
              src="/product/meta-wayfarer-front.webp"
              alt="Front view of Ray-Ban Meta Wayfarer smart glasses"
              width="1200"
              height="1200"
              loading="lazy"
            />
            <span className="pov__callout pov__callout--camera">Camera</span>
            <span className="pov__callout pov__callout--led">Capture LED</span>
          </div>
          <div className="pov__manifesto">
            <p>The filming setup stops leading the room.</p>
            <strong>
              Both hands stay in the story.
              <br />
              The eye line becomes the edit.
            </strong>
          </div>
          <div className="pov__coordinates" aria-hidden="true">
            <span>HANDS / FREE</span>
            <i />
            <span>EYE / LEVEL</span>
            <i />
            <span>REAL / MOVEMENT</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
