import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ActionButton from '../components/ActionButton'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ children }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
      timeline
        .from('.hero__canvas', { opacity: 0, scale: 1.12, duration: 1.8 })
        .from('.hero__title .line > span', { yPercent: 110, duration: 1.15, stagger: 0.12 }, 0.25)
        .from('.hero__body', { y: 24, opacity: 0, duration: 0.9 }, 0.75)
        .from('.hero__counter, .hero__footer', { opacity: 0, duration: 0.8, stagger: 0.1 }, 0.85)

      gsap.to('.hero__stage', {
        yPercent: 11,
        scale: 0.94,
        opacity: 0.45,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      })
    }, root)

    return () => context.revert()
  }, [])

  return (
    <section ref={root} className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__stage">
        <div className="hero__canvas">{children}</div>
      </div>
      <div className="hero__content shell">
        <div className="hero__copy">
          <p className="section-label">First-person filmmaking</p>
          <h1 className="display hero__title" id="hero-title">
            <span className="line">
              <span>Your world.</span>
            </span>
            <span className="line">
              <span>
                As <em>lived.</em>
              </span>
            </span>
          </h1>
          <div className="hero__body">
            <p>
              Hands-free films captured from eye level—so the viewer does not simply watch the
              moment. They enter it.
            </p>
            <ActionButton href="#contact">Start a project</ActionButton>
          </div>
        </div>
        <div className="hero__counter" aria-hidden="true">
          <strong>01</strong>
          See what the camera
          <br />
          usually stands outside
        </div>
        <div className="hero__footer">
          <span className="hero__scroll">Scroll into the perspective</span>
          <span>Independent studio · smart-glasses capture</span>
        </div>
      </div>
    </section>
  )
}
