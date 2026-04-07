import SectionContainer from '../components/SectionContainer';
import CTAButton from '../components/CTAButton';

const STEPS = [
  {
    number: '01',
    title: 'Enter your birth date and full name',
    description: "That's all the system needs to calculate your core numbers.",
  },
  {
    number: '02',
    title: 'Receive your personalised reading instantly',
    description: 'Your Life Path, personality profile, and key insights — generated in seconds, unique to you.',
  },
  {
    number: '03',
    title: 'Understand yourself on a deeper level',
    description: "Use your reading to make clearer decisions about relationships, career, and what's next.",
  },
];

export default function HowItWorks() {
  return (
    <SectionContainer bg="#0C0B09" maxWidth="720px">
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
          IT TAKES 60 SECONDS
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
          Three steps to your reading
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {STEPS.map((step) => (
          <div
            key={step.number}
            style={{
              borderLeft: '2px solid rgba(201, 169, 110, 0.15)',
              paddingLeft: '24px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 600,
                color: '#C9A96E',
                marginBottom: '8px',
              }}
            >
              {step.number}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: 1.3,
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <CTAButton>Start My Free Reading &rarr;</CTAButton>
      </div>
    </SectionContainer>
  );
}
