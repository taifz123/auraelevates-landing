import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ActionButton from '../components/ActionButton'
import MetaGlasses from '../components/MetaGlasses'
import CONFIG from '../data/config'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.from('.hero__eyebrow, .hero h1 > span, .hero__lower > *', {
        opacity: 0,
        y: 34,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.08,
      })

      gsap.from('.hero__product', {
        opacity: 0,
        scale: 0.9,
        y: 46,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.2,
      })

      gsap.to('.hero__product', {
        scale: 0.82,
        yPercent: 35,
        rotate: 2,
        opacity: 0.18,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      })
    }, root)

    return () => context.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__field" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="hero__grid shell">
        <div className="hero__eyebrow">
          <p className="eyebrow">
            <span />
            First-person film / Melbourne
          </p>
          <p>AE / 001</p>
        </div>

        <h1>
          <span>Inside the</span>
          <span>
            <em>moment.</em>
          </span>
        </h1>

        <div className="hero__product">
          <MetaGlasses />
        </div>

        <div className="hero__lower">
          <p className="hero__lede">
            Film the experience from the one place a traditional camera cannot stand: the
            participant&apos;s point of view.
          </p>
          <div className="hero__actions">
            <ActionButton href="#work">See the POV</ActionButton>
            <ActionButton href={CONFIG.contact.instagram} external variant="ghost">
              DM to book
            </ActionButton>
          </div>
          <div className="hero__facts" aria-label="Capture format">
            <p>
              <span>01</span>
              Eye-level
            </p>
            <p>
              <span>02</span>
              Hands-free
            </p>
            <p>
              <span>03</span>
              Human-first
            </p>
          </div>
        </div>
      </div>
      <div className="hero__foot shell" aria-hidden="true">
        <span>Scroll to enter</span>
        <i />
        <span>01 / 10</span>
      </div>
    </section>
  )
}
