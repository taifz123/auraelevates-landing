import { useEffect, useRef } from 'react'

const PRODUCT_VIEWS = [
  {
    src: '/product/meta-wayfarer-left.webp',
    className: 'product-orbit__image--left',
  },
  {
    src: '/product/meta-wayfarer-front.webp',
    className: 'product-orbit__image--front',
  },
  {
    src: '/product/meta-wayfarer-right.webp',
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
    let pose = 0
    let tiltY = 0
    let tiltX = 0

    const render = (time = 0) => {
      const ambientPose = reducedMotion ? 0 : Math.sin(time * 0.00042) * 0.72
      const targetPose = pointer.current.active ? pointer.current.x : ambientPose
      const targetTiltY = targetPose * 8
      const targetTiltX = pointer.current.active ? pointer.current.y * -4.5 : Math.sin(time * 0.00031) * 1.2

      pose += (targetPose - pose) * 0.055
      tiltY += (targetTiltY - tiltY) * 0.06
      tiltX += (targetTiltX - tiltX) * 0.06

      const sideWeight = clamp(Math.abs(pose), 0, 1)
      const frontWeight = clamp(1 - sideWeight * 1.22, 0, 1)
      const leftWeight = pose < 0 ? sideWeight : 0
      const rightWeight = pose > 0 ? sideWeight : 0
      const weightTotal = frontWeight + leftWeight + rightWeight || 1

      productImages[0].style.opacity = `${leftWeight / weightTotal}`
      productImages[1].style.opacity = `${frontWeight / weightTotal}`
      productImages[2].style.opacity = `${rightWeight / weightTotal}`

      object.style.setProperty('--orbit-x', `${tiltX.toFixed(3)}deg`)
      object.style.setProperty('--orbit-y', `${tiltY.toFixed(3)}deg`)
      object.style.setProperty('--orbit-shift', `${(pose * 1.25).toFixed(3)}%`)
      object.style.setProperty('--light-shift', `${(38 + (pose + 1) * 12).toFixed(2)}%`)

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
      if (reducedMotion) {
        pointer.current.x = 0
        pointer.current.y = 0
        render()
      }
    }

    render()
    element.addEventListener('pointermove', updatePointer)
    element.addEventListener('pointerleave', clearPointer)

    return () => {
      window.cancelAnimationFrame(frame)
      element.removeEventListener('pointermove', updatePointer)
      element.removeEventListener('pointerleave', clearPointer)
    }
  }, [])

  return (
    <div
      className="product-orbit"
      ref={root}
      role="img"
      aria-label="Ray-Ban Meta Wayfarer Gen 1 smart glasses in shiny black with clear lenses"
    >
      <div className="product-orbit__instrument" aria-hidden="true">
        <span>RW4006</span>
        <span>50–22</span>
      </div>
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
            fetchPriority={index === 1 ? 'high' : 'auto'}
          />
        ))}
        <div className="product-orbit__spectral" />
      </div>
      <div className="product-orbit__caption" aria-hidden="true">
        <span>Move to inspect</span>
        <i />
        <span>Verified product views</span>
      </div>
    </div>
  )
}
