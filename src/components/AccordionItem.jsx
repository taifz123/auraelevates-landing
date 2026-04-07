import { ChevronDown } from 'lucide-react';

export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(240, 237, 230, 0.06)', padding: '20px 0' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            paddingRight: '16px',
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: 'var(--text-tertiary)',
            flexShrink: 0,
            transition: 'transform 200ms ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          transition: 'all 200ms ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            paddingTop: '12px',
            lineHeight: 1.7,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
