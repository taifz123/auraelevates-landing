import CONFIG from '../data/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <p className="footer__brand">{CONFIG.brand.name}</p>
          <nav className="footer__links" aria-label="Footer navigation">
            <a href="#perspective">Perspective</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#services">Services</a>
            <a href={CONFIG.contact.bookingUrl}>Email</a>
            <a href="#top">Back to top</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {year} {CONFIG.brand.name}</span>
          <span>Independent filming service · not affiliated with Meta</span>
          <span>{CONFIG.contact.serviceArea}</span>
        </div>
      </div>
    </footer>
  )
}
