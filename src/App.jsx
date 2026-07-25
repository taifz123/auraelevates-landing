import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import StickyBooking from './components/StickyBooking'
import CaseStudy from './sections/CaseStudy'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Offer from './sections/Offer'
import Process from './sections/Process'
import ProductStory from './sections/ProductStory'
import UseCases from './sections/UseCases'

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
        <CaseStudy />
        <Offer />
        <ProductStory />
        <UseCases />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyBooking />
    </>
  )
}
