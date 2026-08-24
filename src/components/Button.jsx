import React from 'react'
import CONFIG from '../data/config'
import { ArrowRight } from './icons'

// Primary conversion CTA. Always links to the Payhip product URL.
export default function Button({
  children = 'Get the guide',
  href = CONFIG.payhipUrl,
  variant = 'primary',
  withArrow = true,
  external = true,
  className = '',
  ...rest
}) {
  const rel = external ? 'noopener noreferrer' : undefined
  const target = external ? '_blank' : undefined
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`btn ${variant === 'ghost' ? 'btn--ghost' : ''} ${className}`}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight className="arrow" width="16" height="16" aria-hidden="true" />
      )}
    </a>
  )
}
