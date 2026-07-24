import Reveal from '../components/Reveal'

export default function Perspective() {
  return (
    <section className="perspective" id="perspective" aria-labelledby="perspective-title">
      <div className="perspective__sticky">
        <div className="perspective__visual" role="img" aria-label="Abstract first-person viewfinder placeholder">
          <div className="viewfinder" aria-hidden="true">
            <span className="viewfinder__rec">REC / POV</span>
            <span className="viewfinder__time">00:01:47:12</span>
          </div>
          <div className="perspective__silhouette" aria-hidden="true" />
        </div>
        <div className="perspective__copy">
          <Reveal>
            <p className="section-label">Inside the frame</p>
            <h2 className="title" id="perspective-title">
              The camera goes where attention goes.
            </h2>
            <p className="lede">
              A phone points at the action. First-person film travels through it—hands working,
              people meeting your eyes, movement unfolding at human height.
            </p>
          </Reveal>
          <div className="perspective__compare">
            <Reveal delay={120}>
              <strong>Held camera</strong>
              <p>One hand occupied. A visible barrier. The operator watches a screen.</p>
            </Reveal>
            <Reveal delay={220}>
              <strong>Hands-free POV</strong>
              <p>Both hands present. Eye-level movement. The operator stays in the experience.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
