import { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import AccordionItem from '../components/AccordionItem';
import CTAButton from '../components/CTAButton';
import FAQ_DATA from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SectionContainer bg="#0E0E12" maxWidth="720px">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            marginBottom: '16px',
          }}
        >
          COMMON QUESTIONS
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
          }}
        >
          Everything you want to know
        </h2>
      </div>

      <div style={{ marginBottom: '48px' }}>
        {FAQ_DATA.map((item, i) => (
          <AccordionItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <CTAButton>Get My Free Reading &rarr;</CTAButton>
      </div>
    </SectionContainer>
  );
}
