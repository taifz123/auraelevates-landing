import CONFIG from '../data/config';

export default function CTAButton({ children, variant = 'primary', large = false }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontSize: large ? '17px' : '15px',
    fontWeight: 600,
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 150ms ease',
    padding: large ? '18px 40px' : '16px 32px',
  };

  const primaryStyle = {
    ...base,
    backgroundColor: 'var(--accent)',
    color: 'var(--accent-text)',
    boxShadow: '0 2px 8px rgba(201, 169, 110, 0.2)',
    border: 'none',
  };

  const secondaryStyle = {
    ...base,
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border)',
  };

  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <a
      href={CONFIG.affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(201, 169, 110, 0.25)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        } else {
          e.currentTarget.style.borderColor = 'var(--border-hover)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--accent)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(201, 169, 110, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
        } else {
          e.currentTarget.style.borderColor = 'var(--border)';
        }
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(201, 169, 110, 0.15)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(201, 169, 110, 0.25)';
      }}
    >
      {children}
    </a>
  );
}
