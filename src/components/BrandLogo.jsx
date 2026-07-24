import CONFIG from '../data/config'

export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''} ${className}`.trim()}>
      <img src={CONFIG.brand.logo} alt="" width="760" height="760" />
      {!compact && (
        <span className="brand-lockup__type">
          <span>AURA</span>
          <span>ELEVATES</span>
        </span>
      )}
    </span>
  )
}
