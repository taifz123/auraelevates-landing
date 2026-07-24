import { useEffect, useState } from 'react'
import CONFIG from '../data/config'

export default function StickyBooking() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#top')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      className="sticky-booking"
      data-visible={visible}
      href={CONFIG.contact.instagram}
      target="_blank"
      rel="noreferrer"
    >
      <span>Discuss your event</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
