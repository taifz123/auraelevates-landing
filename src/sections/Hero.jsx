import { useMemo } from 'react';
import CTAButton from '../components/CTAButton';

const SUBHEADLINES = {
  path: "Your birth date holds a blueprint for your entire life. Discover your Life Path number — the single most important number in numerology — free.",
  love: "Why do you attract the same patterns in relationships? Your numerology profile reveals the answer — and what to do about it. Free reading.",
  career: "Feeling stuck or unfulfilled in your work? Your Life Path number reveals the career directions you're naturally wired for. Free reading.",
  2026: "2026 is a pivotal year for your numbers. Discover what's coming — and how to prepare — with your free personalised reading.",
};

const DEFAULT_SUBHEADLINE = "Discover your Life Path number in 60 seconds — free. Learn what your birth date reveals about your personality, purpose, and what's coming next.";

export default function Hero() {
  const subheadline = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    return (ref && SUBHEADLINES[ref]) || DEFAULT_SUBHEADLINE;
  }, []);

  return (
    <section
      id="hero"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(201, 169, 110, 0.03) 0%, transparent 70%), #08090E',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        {/* Subtle brand mark */}
        <img
          src="/logo.jpg"
          alt="AuraElevates"
          style={{
            width: '48px',
            height: '48px',
            objectFit: 'cover',
            borderRadius: '8px',
            opacity: 0.7,
            margin: '0 auto 32px',
            display: 'block',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            marginBottom: '24px',
          }}
        >
          PERSONALISED NUMEROLOGY READING
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          The numbers behind your name already know your story
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}
        >
          {subheadline}
        </p>

        <CTAButton large>Discover My Life Path &rarr;</CTAButton>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'var(--text-tertiary)',
            marginTop: '16px',
          }}
        >
          Free &bull; Takes 60 seconds &bull; 4,000+ years of wisdom
        </p>
      </div>
    </section>
  );
}
