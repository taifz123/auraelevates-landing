import React, { useState } from 'react'
import Reveal from '../components/Reveal'
import { Plus } from '../components/icons'

const faqs = [
  {
    q: 'Who is this guide for?',
    a: 'For adults who commute by public transport and want to feel steadier, calmer and more confident when standing on moving buses and trains. You do not need any fitness background to start.',
  },
  {
    q: 'Do I need to be fit to use it?',
    a: 'No. The guide focuses on simple posture cues, foot position and gentle balance awareness you can practise at home. Nothing extreme, no gym and no equipment required.',
  },
  {
    q: 'Is this only for train commuters?',
    a: 'No. The principles apply to buses, trams, trains and ferries. The same posture, foot placement and stability cues help on any moving vehicle where you need to stand.',
  },
  {
    q: 'How will I receive the guide?',
    a: 'After purchase you get instant digital access to the PDF through Payhip. Read it on your phone, tablet or computer, and refer back to it any time before your next commute.',
  },
  {
    q: 'Is this medical advice?',
    a: 'No. AuraElevates provides general educational fitness and movement guidance. It is not medical advice. People with pain, injuries, dizziness, balance concerns or a medical condition should speak with a qualified health professional.',
  },
]

function FaqItem({ q, a, open, onToggle, id }) {
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button
        className="faq-q"
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        id={`faq-button-${id}`}
        onClick={onToggle}
      >
        <span>{q}</span>
        <Plus className="ic" aria-hidden="true" />
      </button>
      <div className="faq-a" id={`faq-panel-${id}`} role="region" aria-labelledby={`faq-button-${id}`}>
        <div className="faq-a__inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="shell faq">
        <Reveal className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Questions</span>
          <h2>Good to know.</h2>
        </Reveal>
        <Reveal className="faq__list">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              {...item}
              id={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
