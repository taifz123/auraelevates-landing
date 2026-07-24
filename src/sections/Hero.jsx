import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ActionButton from '../components/ActionButton'
import CONFIG from '../data/config'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.from('.hero__copy > *', {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.09,
      })

      gsap.from('.hero__lens-shell', {
        opacity: 0,
        scale: 0.88,
        duration: 1.25,
        ease: 'power3.out',
        delay: 0.15,
      })

      gsap.to('.hero__lens-shell', {
        scale: 1.42,
        yPercent: 22,
        opacity: 0.22,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      })

      gsap.to('.hero__reflection', {
        rotate: 35,
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
      <div className="hero__grid shell">
        <div className="hero__copy">
          <p className="eyebrow">
            <span />
            First-person event filming
          </p>
          <h1>
            Your event,
            <br />
            <em>from inside</em> the moment.
          </h1>
          <p className="hero__lede">
            Hands-free POV footage captured with Ray-Ban Meta smart glasses and edited into a
            polished highlight reel.
          </p>
          <div className="hero__actions">
            <ActionButton href="#work">See the POV</ActionButton>
            <ActionButton href={CONFIG.contact.instagram} external variant="ghost">
              DM to book
            </ActionButton>
          </div>
        </div>

        <div className="hero__visual" aria-label="AuraElevates brand mark">
          <div className="hero__lens-shell">
            <div className="hero__reflection" aria-hidden="true" />
            <div className="hero__lens-rim" aria-hidden="true" />
            <div className="hero__lens-core">
              <img
                src={CONFIG.brand.logo}
                alt="AuraElevates"
                width="760"
                height="760"
                fetchPriority="high"
              />
            </div>
            <div className="hero__focus hero__focus--horizontal" aria-hidden="true" />
            <div className="hero__focus hero__focus--vertical" aria-hidden="true" />
          </div>
          <p className="hero__visual-note">POV / FILM / EDIT</p>
        </div>
      </div>
      <div className="hero__foot shell" aria-hidden="true">
        <span>Scroll to enter the perspective</span>
        <i />
        <span>01 / 10</span>
      </div>
    </section>
  )
}
