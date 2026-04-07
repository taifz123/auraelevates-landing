import SectionContainer from '../components/SectionContainer';
import TestimonialCard from '../components/TestimonialCard';
import TESTIMONIALS from '../data/testimonials';

export default function Testimonials() {
  return (
    <SectionContainer bg="#08090E" maxWidth="1080px">
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
          WHAT PEOPLE ARE SAYING
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
          }}
        >
          &ldquo;I didn&rsquo;t expect it to be this accurate&rdquo;
        </h2>
      </div>

      {/* Mobile: horizontal scroll. Desktop: 3-col grid */}
      <div
        className="testimonial-grid"
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '8px',
          scrollSnapType: 'x mandatory',
        }}
      >
        {TESTIMONIALS.map((t) => (
          <div key={t.name} style={{ scrollSnapAlign: 'start', flex: '0 0 auto' }} className="testimonial-item">
            <TestimonialCard name={t.name} descriptor={t.descriptor} quote={t.quote} />
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .testimonial-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            overflow: visible !important;
          }
          .testimonial-item {
            flex: unset !important;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .testimonial-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            overflow: visible !important;
          }
          .testimonial-item {
            flex: unset !important;
          }
        }
      `}</style>

      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--text-tertiary)',
          marginTop: '40px',
        }}
      >
        Join 12 million+ people who&rsquo;ve discovered their numbers
      </p>
    </SectionContainer>
  );
}
