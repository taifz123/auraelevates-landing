import React from 'react'
import logoUrl from '../assets/logo.jpg'

// Brand lockup: faceless logo mark + AuraElevates wordmark.
// The mark is imported as a module asset so it resolves under any host path.
export default function Logo({ compact = false }) {
  return (
    <a href="#top" className="brand" aria-label="AuraElevates, home">
      <img
        src={logoUrl}
        alt="AuraElevates logo, a faceless figure reaching upward"
        className="brand__mark"
        width="30"
        height="30"
        loading="eager"
        decoding="async"
      />
      {!compact && <span>{'AuraElevates'}</span>}
    </a>
  )
}
