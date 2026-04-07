import { Compass, Heart, Briefcase, Moon, Users, Sparkles } from 'lucide-react';
import SectionContainer from '../components/SectionContainer';
import NumberCard from '../components/NumberCard';
import CTAButton from '../components/CTAButton';

const FEATURES = [
  { icon: Compass, title: 'Life Path Number', description: 'The single most important number in your chart — your core purpose and direction' },
  { icon: Heart, title: 'Relationship Patterns', description: 'Why you attract who you attract, and what you actually need in a partner' },
  { icon: Briefcase, title: 'Career Alignment', description: "The work you're naturally wired for — and why your current path may feel off" },
  { icon: Moon, title: 'Hidden Challenges', description: "The blind spots and recurring lessons your numbers reveal you're here to master" },
  { icon: Users, title: 'Compatibility Insights', description: 'How your numbers interact with the people closest to you' },
  { icon: Sparkles, title: '2026 Forecast', description: 'What this year holds for your specific number — and how to make the most of it' },
];

export default function WhatYouDiscover() {
  return (
    <SectionContainer bg="#0A0A08" maxWidth="1080px">
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
          YOUR FREE READING INCLUDES
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
          Everything your birth date reveals
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}
      >
        {FEATURES.map((feature) => (
          <NumberCard
            key={feature.title}
            mode="feature"
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            warm
          />
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <CTAButton>Get My Free Reading &rarr;</CTAButton>
      </div>
    </SectionContainer>
  );
}
