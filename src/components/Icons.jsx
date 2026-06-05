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
  wrench: (
    <>
      <path d="M15.5 4.5a4 4 0 0 0-5 5L4 16l4 4 6.5-6.5a4 4 0 0 0 5-5l-2.6 2.6-2.5-.5-.5-2.5z" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    </>
  ),
  engine: (
    <>
      <path d="M5 11V9h3l2-2h3v2h3l2 2h2v4h-2v2h-5l-2 2H9v-3H6l-1-1z" />
      <path d="M13 7V5h3" />
    </>
  ),
  oil: (
    <>
      <path d="M3 13h7l2-2h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M12 11V6h4" />
      <path d="M16 6c1.5 1.8 2.5 3 2.5 4.2A2.5 2.5 0 0 1 14 11" />
    </>
  ),
  tire: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </>
  ),
  belt: (
    <>
      <circle cx="8" cy="12" r="4" />
      <circle cx="17" cy="12" r="2.5" />
      <path d="M8 8a8 8 0 0 1 9 1.5M8 16a8 8 0 0 0 9-1.5" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="8" width="16" height="9" rx="2" />
      <path d="M18 11h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2" />
      <path d="M6 6V4M14 6V4M7 12.5h2M8 11.5v2M14 12.5h2" />
    </>
  ),
  temp: (
    <>
      <path d="M12 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z" />
      <path d="M14 14V8" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  window: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 9v10" />
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
  car: (
    <>
      <path d="M3 13l1.8-4.6A2 2 0 0 1 6.7 7h10.6a2 2 0 0 1 1.9 1.4L21 13v4h-2.2M5.2 17H3v-4M5 17a2 2 0 0 0 4 0M15 17a2 2 0 0 0 4 0M9 17h6" />
      <path d="M3 13h18" />
    </>
  ),
  message: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v12M15 9a3 2.2 0 0 0-3-1.6c-1.7 0-3 1-3 2.3s1.3 2 3 2.3 3 1 3 2.3-1.3 2.3-3 2.3A3 2.2 0 0 1 9 15.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8.2 6h6.3a3 3 0 0 1 0 6H9.5a3 3 0 0 0 0 6h6.3" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L19 12l4 1.5V17a2 2 0 0 1-2 2A16 16 0 0 1 5 6a2 2 0 0 1 0-2z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M5 12l4 4 10-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  star: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" />,
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
