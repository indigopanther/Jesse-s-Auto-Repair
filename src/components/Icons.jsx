// Lightweight inline SVG icon set (stroke-based, inherits currentColor).
const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  oil: (
    <>
      <path d="M3 13h7l2-2h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M12 11V6h4" />
      <path d="M16 6c1.5 1.8 2.5 3 2.5 4.2A2.5 2.5 0 0 1 14 11" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tire: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </>
  ),
  engine: (
    <>
      <path d="M5 11V9h3l2-2h3v2h3l2 2h2v4h-2v2h-5l-2 2H9v-3H6l-1-1z" />
      <path d="M13 7V5h3" />
    </>
  ),
  suspension: (
    <>
      <path d="M8 3v18M16 3v18" />
      <path d="M6 7h4M6 11h4M6 15h4" />
      <circle cx="16" cy="8" r="2" />
      <path d="M16 10v8" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" />
      <path d="M9 4l3 2 3-2M9 20l3-2 3 2M4 9l2 3-2 3M20 9l-2 3 2 3" />
    </>
  ),
  belt: (
    <>
      <circle cx="8" cy="12" r="4" />
      <circle cx="17" cy="12" r="2.5" />
      <path d="M8 8a8 8 0 0 1 9 1.5M8 16a8 8 0 0 0 9-1.5" />
    </>
  ),
  temp: (
    <>
      <path d="M12 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z" />
      <path d="M14 14V8" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 9v10" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L19 12l4 1.5V17a2 2 0 0 1-2 2A16 16 0 0 1 5 6a2 2 0 0 1 0-2z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="M5 12l4 4 10-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  facebook: <path d="M14 9V7c0-1 .5-2 2-2h2V2h-3c-3 0-4 2-4 4v3H8v3h3v9h3v-9h3l1-3z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l5 3-5 3z" />
    </>
  ),
}

export default function Icon({ name, size, className }) {
  const p = paths[name]
  if (!p) return null
  return (
    <svg
      {...base}
      width={size || base.width}
      height={size || base.height}
      className={className}
      aria-hidden="true"
    >
      {p}
    </svg>
  )
}
