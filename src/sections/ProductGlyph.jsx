// Product preview: a device mockup showing the guide's table of contents.
// This placeholder describes exactly what comes with the PDF.
function ProductGlyph() {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Tablet mockup showing the Stand Steady Guide contents"
    >
      {/* device frame */}
      <rect x="20" y="10" width="160" height="240" rx="14" strokeWidth="1.4" />
      <rect x="20" y="10" width="160" height="240" rx="14" stroke="rgba(127,179,171,0.4)" />
      {/* cover header band */}
      <rect x="34" y="24" width="132" height="52" rx="6" fill="rgba(127,179,171,0.16)" stroke="rgba(127,179,171,0.5)" />
      <text x="46" y="46" fill="rgba(244,241,232,0.85)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="1.5">STAND STEADY</text>
      <text x="46" y="60" fill="rgba(244,241,232,0.5)" fontSize="6.5" fontFamily="Inter, sans-serif" letterSpacing="1">A practical commuter guide</text>
      {/* contents label */}
      <text x="34" y="94" fill="rgba(244,241,232,0.4)" fontSize="6" fontFamily="Inter, sans-serif" letterSpacing="1.5">INSIDE THE GUIDE</text>
      {/* five contents rows with teal checkmarks */}
      {[
        { y: 112, t: 'Posture cues' },
        { y: 138, t: 'Foot position' },
        { y: 164, t: 'Balance drills' },
        { y: 190, t: 'Braking & turning' },
        { y: 216, t: 'Confidence routine' },
      ].map((r) => (
        <g key={r.y}>
          <path d={`M38 ${r.y - 4}l3 3 6-7`} stroke="rgba(127,179,171,0.85)" strokeWidth="1.4" />
          <line x1="56" y1={r.y - 2} x2="166" y2={r.y - 2} stroke="rgba(244,241,232,0.28)" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  )
}

export default ProductGlyph
