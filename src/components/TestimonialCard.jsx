export default function TestimonialCard({ name, descriptor, quote }) {
  return (
    <div
      style={{
        background: '#131318',
        border: '1px solid rgba(240, 237, 230, 0.06)',
        borderRadius: '12px',
        padding: '32px',
        minWidth: '300px',
        flexShrink: 0,
        transition: 'border-color 200ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(240, 237, 230, 0.06)';
      }}
    >
      {/* Decorative quote mark */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '48px',
          lineHeight: 1,
          color: 'rgba(201, 169, 110, 0.2)',
          display: 'block',
          marginBottom: '8px',
        }}
      >
        &ldquo;
      </span>

      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '18px',
          lineHeight: 1.5,
          color: 'var(--text-primary)',
          marginBottom: '20px',
        }}
      >
        {quote}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '2px',
        }}
      >
        {name}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontWeight: 400,
          color: 'var(--text-tertiary)',
        }}
      >
        {descriptor}
      </p>
    </div>
  );
}
