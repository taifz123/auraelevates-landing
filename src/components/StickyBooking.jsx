import { useEffect, useState } from 'react'
import CONFIG from '../data/config'

export default function StickyBooking() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#top')
    const contact = document.querySelector('#contact')
    if (!hero) return undefined

    let heroVisible = true
    let contactVisible = false
    const update = () => setVisible(!heroVisible && !contactVisible)

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting
        update()
      },
      { threshold: 0.05 },
    )
    const contactObserver = contact
      ? new IntersectionObserver(
          ([entry]) => {
            contactVisible = entry.isIntersecting
            update()
          },
          { threshold: 0.08 },
        )
      : null

    heroObserver.observe(hero)
    if (contact && contactObserver) contactObserver.observe(contact)

    return () => {
      heroObserver.disconnect()
      contactObserver?.disconnect()
    }
  }, [])

  return (
    <a
      className="sticky-booking"
      data-visible={visible}
      href={CONFIG.contact.instagram}
      target="_blank"
      rel="noreferrer"
    >
      <span>DM to book</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
