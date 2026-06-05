// ──────────────────────────────────────────────────────────────────────────
// Monochrome (black) car-make marks, drawn inline so they always render crisp,
// scale cleanly and need no external CDN. Colour is inherited via currentColor,
// so the logo wall stays a single, consistent black.
// ──────────────────────────────────────────────────────────────────────────

const word = (label, opts = {}) => ({
  viewBox: '0 0 200 64',
  emblem: false,
  content: (
    <text
      x="100"
      y="34"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="Inter, system-ui, sans-serif"
      fontWeight="800"
      fontSize={opts.size || 38}
      letterSpacing={opts.tracking ?? 1}
      fontStyle={opts.italic ? 'italic' : 'normal'}
      fill="currentColor"
    >
      {label}
    </text>
  ),
})

const fordWord = {
  viewBox: '0 0 200 64',
  emblem: true,
  content: (
    <>
      <ellipse cx="100" cy="32" rx="92" ry="26" fill="none" stroke="currentColor" strokeWidth="3" />
      <text
        x="100"
        y="34"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="34"
        letterSpacing="1"
        fill="currentColor"
      >
        Ford
      </text>
    </>
  ),
}

export const brandLogos = {
  Toyota: {
    viewBox: '0 0 120 84',
    emblem: true,
    content: (
      <g fill="none" stroke="currentColor" strokeWidth="5">
        <ellipse cx="60" cy="42" rx="56" ry="36" />
        <ellipse cx="60" cy="38" rx="40" ry="13" />
        <ellipse cx="60" cy="44" rx="14" ry="33" />
      </g>
    ),
  },
  Honda: {
    viewBox: '0 0 120 84',
    emblem: true,
    content: (
      <path
        fill="currentColor"
        d="M20 14h20v20h40V14h20v56H80V46H40v24H20z"
      />
    ),
  },
  Ford: fordWord,
  Chevrolet: {
    viewBox: '0 0 140 70',
    emblem: true,
    content: (
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M6 27H55V13H85V27H134V43H85V57H55V43H6Z"
      />
    ),
  },
  Nissan: {
    viewBox: '0 0 120 84',
    emblem: true,
    content: (
      <g fill="none" stroke="currentColor" strokeWidth="5">
        <circle cx="60" cy="42" r="36" />
        <rect x="18" y="34" width="84" height="16" rx="2" fill="currentColor" stroke="none" />
        <rect x="24" y="37" width="72" height="10" fill="#fff" stroke="none" />
      </g>
    ),
  },
  Hyundai: {
    viewBox: '0 0 130 84',
    emblem: true,
    content: (
      <g fill="none" stroke="currentColor" strokeWidth="5">
        <ellipse cx="65" cy="42" rx="58" ry="34" transform="rotate(-12 65 42)" />
        <path d="M40 56c-4-10-4-18 6-24 8-5 22-3 34 2 8 3 6 9-4 13" strokeWidth="9" strokeLinecap="round" />
      </g>
    ),
  },
  Kia: word('KIA', { size: 42, tracking: 2 }),
  Jeep: word('Jeep', { size: 40, tracking: 1 }),
  GMC: word('GMC', { size: 40, tracking: 3 }),
  Dodge: word('DODGE', { size: 30, tracking: 1 }),
  Ram: word('RAM', { size: 42, tracking: 3 }),
  Subaru: {
    viewBox: '0 0 130 84',
    emblem: true,
    content: (
      <g fill="currentColor">
        <ellipse cx="65" cy="42" rx="60" ry="33" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M30 42l5-3 1-6 4 4 6-1-3 5 3 5-6-1-4 4-1-6z" />
        <path d="M58 30l4-3 1-5 3 4 5-1-2 5 2 4-5-1-4 3v-5z" />
        <path d="M84 36l4-2 1-5 3 4 5-1-2 4 2 4-5-1-4 3v-5z" />
        <path d="M70 52l4-2 1-5 3 4 5-1-2 4 2 4-5-1-4 3v-5z" />
        <path d="M96 50l3-2 1-4 3 3 4-1-2 4 2 3-4-1-3 3-1-4z" />
      </g>
    ),
  },
  Mazda: {
    viewBox: '0 0 130 84',
    emblem: true,
    content: (
      <g fill="none" stroke="currentColor" strokeWidth="4">
        <ellipse cx="65" cy="42" rx="60" ry="33" />
        <path
          d="M22 36c14-2 28 4 43 14 15-10 29-16 43-14-14 6-26 14-43 24-17-10-29-18-43-24z"
          fill="currentColor"
          stroke="none"
        />
      </g>
    ),
  },
  Volkswagen: {
    viewBox: '0 0 120 84',
    emblem: true,
    content: (
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="60" cy="42" r="36" />
        <path d="M30 22l14 38 8-22h16l8 22 14-38" />
      </g>
    ),
  },
  BMW: {
    viewBox: '0 0 120 84',
    emblem: true,
    content: (
      <g>
        <circle cx="60" cy="42" r="36" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M60 12a30 30 0 0 1 0 60z" fill="currentColor" opacity="0.12" />
        <path d="M60 42 V12 A30 30 0 0 1 90 42 Z" fill="currentColor" />
        <path d="M60 42 V72 A30 30 0 0 1 30 42 Z" fill="currentColor" />
      </g>
    ),
  },
  'Mercedes-Benz': {
    viewBox: '0 0 120 84',
    emblem: true,
    content: (
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
        <circle cx="60" cy="42" r="36" />
        <path d="M60 42V8M60 42L31 60M60 42L89 60" />
      </g>
    ),
  },
}

export default function BrandLogo({ name, className }) {
  const logo = brandLogos[name]
  if (!logo) return null
  return (
    <svg
      viewBox={logo.viewBox}
      className={className}
      role="img"
      aria-label={`${name} logo`}
      preserveAspectRatio="xMidYMid meet"
    >
      {logo.content}
    </svg>
  )
}
