export default function NumberCard({ mode = 'stat', stat, descriptor, icon: Icon, title, description, warm = false }) {
  const bg = warm ? '#141210' : '#131318';

  if (mode === 'stat') {
    return (
      <div
        style={{
          background: bg,
          border: '1px solid rgba(240, 237, 230, 0.06)',
          borderTop: '1px solid rgba(201, 169, 110, 0.15)',
          borderRadius: '12px',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '36px',
            fontWeight: 500,
            color: '#C9A96E',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          {stat}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--text-secondary)',
          }}
        >
          {descriptor}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: bg,
        border: '1px solid rgba(240, 237, 230, 0.06)',
        borderRadius: '12px',
        padding: '28px',
        transition: 'border-color 200ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(240, 237, 230, 0.06)';
      }}
    >
      <div style={{ marginBottom: '16px', color: '#C9A96E' }}>
        {Icon && <Icon size={24} strokeWidth={1.5} />}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 400,
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}
