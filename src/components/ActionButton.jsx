export default function ActionButton({ href, children, external = false }) {
  return (
    <a
      className="button"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
