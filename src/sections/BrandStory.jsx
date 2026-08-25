import React from 'react'
import Reveal from '../components/Reveal'
import brandPhoto from '../assets/brand-photo.jpg'

export default function BrandStory() {
  return (
    <section className="section" id="story" style={{ paddingTop: 0 }}>
      <div className="shell">
        <Reveal className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The AuraElevates notebook</span>
          <h2>Built from everyday observation.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            AuraElevates began by watching how people stand, sway and steady
            themselves on real commutes. The guide distills those moments into
            simple, repeatable cues you can use the same day.
          </p>
        </Reveal>

        {/* Brand story visual: refined desk flat lay with a notebook of
            posture diagrams, transit-inspired references and wellness objects. */}
        <Reveal>
          <img
            src={brandPhoto}
            alt="Refined desk flat lay with a notebook of non-readable posture diagrams, transit-inspired references and clean wellness objects"
            className="media-img media-img--wide"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  )
}
