import { lazy, Suspense, useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import Manifesto from './sections/Manifesto'
import Perspective from './sections/Perspective'
import UseCases from './sections/UseCases'
import Showreel from './sections/Showreel'
import Process from './sections/Process'
import Services from './sections/Services'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const GlassesScene = lazy(() => import('./components/GlassesScene'))

function HeroVisual() {
  const [enhanced, setEnhanced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    const canvas = document.createElement('canvas')
    const hasWebGL = Boolean(
      canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl'),
    )
    const update = () => setEnhanced(media.matches && hasWebGL)

    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  if (!enhanced) return <div className="glasses-fallback" aria-hidden="true" />

  return (
    <Suspense fallback={<div className="glasses-fallback" aria-hidden="true" />}>
      <GlassesScene />
    </Suspense>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <Hero>
          <HeroVisual />
        </Hero>
        <Manifesto />
        <Perspective />
        <UseCases />
        <Showreel />
        <Process />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
