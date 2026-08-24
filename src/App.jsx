import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Reframe from './sections/Reframe'
import Method from './sections/Method'
import Product from './sections/Product'
import Confidence from './sections/Confidence'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Reframe />
        <Method />
        <Product />
        <Confidence />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
