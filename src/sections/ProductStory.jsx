import Reveal from '../components/Reveal'
import CONFIG from '../data/config'

const VIEWS = [
  {
    src: CONFIG.product.views.front,
    label: 'Front view',
    alt: 'Front view of Ray-Ban Meta Wayfarer smart glasses',
  },
  {
    src: CONFIG.product.views.left,
    label: 'Camera-side view',
    alt: 'Left side view of Ray-Ban Meta Wayfarer smart glasses',
  },
  {
    src: CONFIG.product.views.rear,
    label: 'Wearer view',
    alt: 'Rear view of Ray-Ban Meta Wayfarer smart glasses',
  },
]

export default function ProductStory() {
  return (
    <section className="product-story section">
      <div className="shell">
        <Reveal className="product-story__heading">
          <div>
            <p className="eyebrow">
              <span />
              The capture system
            </p>
            <h2>
              Small equipment.
              <br />
              <em>Unusually close footage.</em>
            </h2>
          </div>
          <p>
            A 12MP ultra-wide camera sits at eye level. The external capture light stays visible
            while recording, and the wearer keeps both hands in the experience.
          </p>
        </Reveal>

        <div className="product-story__gallery">
          {VIEWS.map((view, index) => (
            <Reveal key={view.label} delay={index * 80}>
              <figure>
                <img src={view.src} alt={view.alt} width="1200" height="1200" loading="lazy" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {view.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="product-story__note">
          <p>
            AuraElevates provides filming and editing services. The glasses are the capture tool,
            not the product being sold.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
