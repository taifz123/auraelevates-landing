import { useEffect, useRef } from 'react';
import Hero from './sections/Hero';
import WhatIsNumerology from './sections/WhatIsNumerology';
import WhatYouDiscover from './sections/WhatYouDiscover';
import Testimonials from './sections/Testimonials';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import StickyMobileBar from './components/StickyMobileBar';

function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 500ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealWrapper({ children }) {
  return <div data-reveal>{children}</div>;
}

export default function App() {
  const appRef = useScrollReveal();

  return (
    <div ref={appRef}>
      <Hero />
      <RevealWrapper><WhatIsNumerology /></RevealWrapper>
      <RevealWrapper><WhatYouDiscover /></RevealWrapper>
      <RevealWrapper><Testimonials /></RevealWrapper>
      <RevealWrapper><HowItWorks /></RevealWrapper>
      <RevealWrapper><FAQ /></RevealWrapper>
      <RevealWrapper><FinalCTA /></RevealWrapper>
      <StickyMobileBar />
    </div>
  );
}
