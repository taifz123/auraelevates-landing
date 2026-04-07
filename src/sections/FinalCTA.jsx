import CTAButton from '../components/CTAButton';
import CONFIG from '../data/config';

export default function FinalCTA() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(201, 169, 110, 0.03) 0%, transparent 70%), #08090E',
        padding: '120px 20px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          Your numbers are already written. Are you ready to read them?
        </h2>

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
          Join 12 million people who&rsquo;ve discovered what their birth date reveals. Your personalised reading takes 60 seconds and costs nothing.
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
          100% free &bull; No credit card &bull; Instant results
        </p>

        <div
          style={{
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <a
            href={CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--text-tertiary)',
              textDecoration: 'none',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-tertiary)'; }}
          >
            Follow {CONFIG.handle} for daily wisdom
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--text-tertiary)',
            marginTop: '48px',
            maxWidth: '480px',
            margin: '48px auto 0',
            lineHeight: 1.6,
          }}
        >
          This page contains affiliate links. AuraElevates may earn a commission if you purchase a premium report through the links on this page, at no additional cost to you. Your free reading is always free.
        </p>
      </div>
    </section>
  );
}
