import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import StickyBooking from './components/StickyBooking'
import Comparison from './sections/Comparison'
import Contact from './sections/Contact'
import Difference from './sections/Difference'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import LatestWork from './sections/LatestWork'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import Trust from './sections/Trust'
import UseCases from './sections/UseCases'
import VisualProof from './sections/VisualProof'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <Hero />
        <VisualProof />
        <Difference />
        <Portfolio />
        <Process />
        <Comparison />
        <UseCases />
        <Trust />
        <FAQ />
        <LatestWork />
        <Contact />
      </main>
      <Footer />
      <StickyBooking />
    </>
  )
}
