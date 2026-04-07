import SectionContainer from '../components/SectionContainer';
import NumberCard from '../components/NumberCard';

export default function WhatIsNumerology() {
  return (
    <SectionContainer bg="#0C0D12" maxWidth="1080px">
      <div style={{ maxWidth: '720px', margin: '0 auto 48px', textAlign: 'center' }}>
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
          AN ANCIENT SCIENCE
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          Numbers have shaped civilisations for 4,000 years
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          Pythagoras — the father of mathematics — believed numbers were the language of the universe. The Egyptians, Babylonians, and Chinese all developed numerological systems independently. Today, millions of people use numerology to understand themselves, make better decisions, and navigate life transitions with clarity.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '48px',
        }}
      >
        <NumberCard mode="stat" stat="4,000+" descriptor="Years of practice across civilisations" />
        <NumberCard mode="stat" stat="12M+" descriptor="Readings generated worldwide" />
        <NumberCard mode="stat" stat="60 sec" descriptor="To discover your Life Path number" />
      </div>

      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '16px',
          color: 'var(--text-tertiary)',
        }}
      >
        This isn&rsquo;t fortune-telling. It&rsquo;s self-knowledge through the mathematics of your birth.
      </p>
    </SectionContainer>
  );
}
