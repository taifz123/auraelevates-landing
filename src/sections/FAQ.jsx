import { useState } from 'react'
import Reveal from '../components/Reveal'
import FAQ_ITEMS from '../data/faq'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section" id="faq">
      <div className="shell faq__grid">
        <Reveal className="faq__heading">
          <p className="eyebrow">
            <span />
            The practical details
          </p>
          <h2>
            Before the
            <br />
            <em>camera rolls.</em>
          </h2>
        </Reveal>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, index) => {
            const expanded = index === open
            return (
              <Reveal key={item.question} delay={index * 45}>
                <article className="faq__item" data-open={expanded}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpen(expanded ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <i aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="faq__answer" id={`faq-answer-${index}`} hidden={!expanded}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
