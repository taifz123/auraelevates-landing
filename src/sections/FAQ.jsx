import { useState } from 'react'
import Reveal from '../components/Reveal'
import FAQ_DATA from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="shell faq__layout">
        <Reveal className="faq__intro">
          <p className="section-label">Useful, before it is cinematic</p>
          <h2 className="title" id="faq-title">
            Questions worth asking.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="faq__list">
            {FAQ_DATA.map((item, index) => {
              const open = openIndex === index
              const panelId = `faq-panel-${index}`

              return (
                <article className="faq-item" key={item.question}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      className="faq-item__button"
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-item__icon" aria-hidden="true">
                        +
                      </span>
                    </button>
                  </h3>
                  <div className="faq-item__answer" data-open={open} id={panelId}>
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
