import React from 'react'

// Intentional placeholder media block.
// Replace the inner glyph with a real <img> later. The `label` and `alt`
// describe exactly what asset should go here, so swaps are unambiguous.
//
// Usage:
//   <Placeholder ratio="hero" label="Hero - commuter in train" alt="...">
//     <glyph svg />
//   </Placeholder>
export default function Placeholder({
  ratio = 'wide',
  label,
  alt,
  children,
  className = '',
}) {
  return (
    <figure className={`ph ph--${ratio} ${className}`} role="img" aria-label={alt}>
      <div className="ph__glyph" aria-hidden="true">
        {children ?? <DefaultGlyph />}
      </div>
      {label && (
        <figcaption className="ph__label">
          <span className="dot" aria-hidden="true" />
          {label}
        </figcaption>
      )}
    </figure>
  )
}

function DefaultGlyph() {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="60" cy="42" r="14" />
      <path d="M60 56v34M44 70l16-6 16 6M50 90h20" strokeLinecap="round" />
    </svg>
  )
}
