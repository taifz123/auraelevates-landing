import { useState, useEffect } from 'react';
import CONFIG from '../data/config';

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: 'rgba(12, 13, 18, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(240, 237, 230, 0.08)',
        transition: 'transform 300ms ease',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
      }}
      className="md:!hidden"
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-primary)',
        }}
      >
        Free Numerology Reading
      </span>
      <a
        href={CONFIG.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: '#C9A96E',
          color: '#0A0A08',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-body)',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(201, 169, 110, 0.2)',
          transition: 'all 150ms ease',
        }}
      >
        Start Now &rarr;
      </a>
    </div>
  );
}
