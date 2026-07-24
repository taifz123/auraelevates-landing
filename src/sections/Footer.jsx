import BrandLogo from '../components/BrandLogo'
import CONFIG from '../data/config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <a href="#top" aria-label="AuraElevates, back to top">
          <BrandLogo />
        </a>
        <p>First-person event filming. Captured from inside the moment.</p>
        <a href={CONFIG.contact.instagram} target="_blank" rel="noreferrer">
          Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="shell footer__bottom">
        <p>© {new Date().getFullYear()} AuraElevates</p>
        <p>
          AuraElevates is an independent filming company and is not affiliated with or endorsed by
          Ray-Ban, Meta, or EssilorLuxottica.
        </p>
      </div>
    </footer>
  )
}
