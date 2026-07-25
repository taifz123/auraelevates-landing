import { useEffect, useRef } from 'react'
import CONFIG from '../data/config'

const PRODUCT_VIEWS = [
  {
    src: CONFIG.product.views.left,
    className: 'product-orbit__image--left',
  },
  {
    src: CONFIG.product.views.front,
    className: 'product-orbit__image--front',
  },
  {
    src: CONFIG.product.views.right,
    className: 'product-orbit__image--right',
  },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export default function MetaGlasses() {
  const root = useRef(null)
  const stage = useRef(null)
  const images = useRef([])
  const pointer = useRef({ active: false, x: 0, y: 0 })

  useEffect(() => {
    const element = root.current
    const object = stage.current
    const productImages = images.current
    if (!element || !object || productImages.length !== PRODUCT_VIEWS.length) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame
    let visible = true
    let pose = 0
    let tiltY = 0
    let tiltX = 0

    const render = (time = 0) => {
      if (!visible && !reducedMotion) return

      const ambientPose = reducedMotion ? 0 : Math.sin(time * 0.00032) * 0.67
      const targetPose = pointer.current.active ? pointer.current.x : ambientPose
      const targetTiltY = targetPose * 7
      const targetTiltX = pointer.current.active
        ? pointer.current.y * -4
        : Math.sin(time * 0.00028) * 0.8

      pose += (targetPose - pose) * 0.05
      tiltY += (targetTiltY - tiltY) * 0.055
      tiltX += (targetTiltX - tiltX) * 0.055

      const sideWeight = clamp(Math.abs(pose), 0, 1)
      const transition = clamp((sideWeight - 0.5) / 0.18, 0, 1)
      const easedTransition = transition * transition * (3 - 2 * transition)

      productImages[0].style.opacity = `${pose < 0 ? easedTransition : 0}`
      productImages[1].style.opacity = `${1 - easedTransition}`
      productImages[2].style.opacity = `${pose > 0 ? easedTransition : 0}`

      object.style.setProperty('--orbit-x', `${tiltX.toFixed(3)}deg`)
      object.style.setProperty('--orbit-y', `${tiltY.toFixed(3)}deg`)
      object.style.setProperty('--orbit-shift', `${(pose * 1.1).toFixed(3)}%`)
      object.style.setProperty('--light-shift', `${(40 + (pose + 1) * 10).toFixed(2)}%`)

      if (!reducedMotion) frame = window.requestAnimationFrame(render)
    }

    const updatePointer = (event) => {
      const bounds = element.getBoundingClientRect()
      pointer.current.x = clamp(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -1, 1)
      pointer.current.y = clamp(((event.clientY - bounds.top) / bounds.height) * 2 - 1, -1, 1)
      pointer.current.active = true
      if (reducedMotion) render()
    }

    const clearPointer = () => {
      pointer.current.active = false
      if (reducedMotion) render()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !reducedMotion) {
          window.cancelAnimationFrame(frame)
          frame = window.requestAnimationFrame(render)
        } else if (!visible) {
          window.cancelAnimationFrame(frame)
        }
      },
      { rootMargin: '120px' },
    )

    const onVisibilityChange = () => {
      visible = !document.hidden && element.getBoundingClientRect().bottom > 0
      if (visible && !reducedMotion) {
        window.cancelAnimationFrame(frame)
        frame = window.requestAnimationFrame(render)
      } else {
        window.cancelAnimationFrame(frame)
      }
    }

    observer.observe(element)
    document.addEventListener('visibilitychange', onVisibilityChange)
    element.addEventListener('pointermove', updatePointer)
    element.addEventListener('pointerleave', clearPointer)
    render()

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      element.removeEventListener('pointermove', updatePointer)
      element.removeEventListener('pointerleave', clearPointer)
    }
  }, [])

  return (
    <div
      className="product-orbit"
      ref={root}
      role="img"
      aria-label="Ray-Ban Meta Wayfarer smart glasses in shiny black with clear lenses"
    >
      <div className="product-orbit__halo" aria-hidden="true" />
      <div className="product-orbit__stage" ref={stage} aria-hidden="true">
        <div className="product-orbit__shadow" />
        {PRODUCT_VIEWS.map((view, index) => (
          <img
            key={view.src}
            ref={(element) => {
              images.current[index] = element
            }}
            className={`product-orbit__image ${view.className}`}
            src={view.src}
            alt=""
            width="1200"
            height="1200"
            draggable="false"
            loading={index === 1 ? 'eager' : 'lazy'}
            fetchPriority={index === 1 ? 'high' : 'low'}
          />
        ))}
        <div className="product-orbit__spectral" />
      </div>
      <div className="product-orbit__caption" aria-hidden="true">
        <span>Accurate product views</span>
        <i />
        <span>Move to inspect</span>
      </div>
    </div>
  )
}
