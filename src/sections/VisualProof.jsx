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
          <div className="pov__ambient" aria-hidden="true" />
          <div className="pov__reticle" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="pov__center">
            <span className="pov__aperture" aria-hidden="true" />
            <p>Eye-level capture</p>
            <strong>THE VIEWER STEPS IN</strong>
          </div>
          <div className="pov__meta pov__meta--top">
            <span>HANDS FREE</span>
            <span>REAL MOVEMENT</span>
          </div>
          <div className="pov__meta pov__meta--bottom">
            <span>NATURAL INTERACTION</span>
            <span>EDITED FOR IMPACT</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
