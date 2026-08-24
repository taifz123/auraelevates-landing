import React, { useEffect, useRef, useState } from 'react'

// Lightweight scroll-reveal. Respects prefers-reduced-motion via CSS.
// Safety net: if IntersectionObserver never reports intersection (e.g. some
// headless renderers), the element is revealed after a short delay so
// content is never left hidden.
export default function Reveal({ as, children, className = '', ...rest }) {
  const Tag = as || 'div'
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  )

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    let io
    const fallback = setTimeout(() => setVisible(true), 1500)

    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      )
      io.observe(el)
    }

    return () => {
      clearTimeout(fallback)
      if (io) io.disconnect()
    }
  }, [visible])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
