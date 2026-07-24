export default function ActionButton({
  href,
  children,
  external = false,
  variant = 'primary',
  className = '',
}) {
  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3.5 8h9M8.7 4.2l3.8 3.8-3.8 3.8" />
      </svg>
    </a>
  )
}
