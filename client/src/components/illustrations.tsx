// Flat character illustrations for the assistant action cards.

import { COLORS } from "../utils/color";


function Head({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y - 14} r={7} fill={COLORS.HAIR} />
      <circle cx={x} cy={y} r={11} fill={COLORS.SKIN} />
      <path d={`M${x - 11} ${y - 1}a11 11 0 0 1 22 0c-4-5-12-7-22 0z`} fill={COLORS.HAIR} />
    </g>
  )
}

export function SummaryIllustration() {
  return (
    <svg viewBox="0 0 120 110" className="h-full w-full">
      <ellipse cx="60" cy="102" rx="40" ry="5" fill="#ede9fe" />
      {/* chart bubble */}
      <rect x="74" y="10" width="36" height="26" rx="5" fill="#ede9fe" />
      <path d="M80 30V22M87 30V16M94 30V24M101 30V19" stroke={COLORS.PURPLE} strokeWidth="3" strokeLinecap="round" />
      {/* body */}
      <path d="M44 56c0-8 7-12 16-12s16 4 16 12v22H44z" fill={COLORS.SHIRT} />
      <path d="M46 78h28l-2 22h-9l-3-14-3 14h-9z" fill={COLORS.PANTS} />
      <Head x={60} y={34} />
      {/* tablet + arms */}
      <rect x="50" y="56" width="22" height="16" rx="2" fill="#312e81" transform="rotate(-12 61 64)" />
      <path d="M46 60c2 8 6 10 8 10M74 60c-2 8-6 10-8 10" stroke={COLORS.SKIN} strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function TalkIllustration() {
  return (
    <svg viewBox="0 0 120 110" className="h-full w-full">
      <ellipse cx="55" cy="102" rx="38" ry="5" fill="#ede9fe" />
      {/* sound waves */}
      <path d="M86 44v8M92 38v20M98 42v12M104 46v4" stroke={COLORS.PURPLE} strokeWidth="3" strokeLinecap="round" />
      <circle cx="74" cy="28" r="4" fill={COLORS.PURPLE} />
      <path d="M74 32v6" stroke={COLORS.PURPLE} strokeWidth="2" />
      {/* body */}
      <path d="M38 58c0-8 7-12 16-12s16 4 16 12v22H38z" fill={COLORS.SHIRT} />
      <path d="M40 80h28l-2 20h-9l-3-12-3 12h-9z" fill={COLORS.PANTS} />
      <Head x={54} y={36} />
      {/* arm holding mic */}
      <path d="M68 60c4-4 4-12 4-18" stroke={COLORS.SKIN} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M40 62c-2 8 2 12 6 14" stroke={COLORS.SKIN} strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function HelpIllustration() {
  return (
    <svg viewBox="0 0 120 110" className="h-full w-full">
      <ellipse cx="60" cy="102" rx="38" ry="5" fill="#ede9fe" />
      {/* question bubble */}
      <circle cx="30" cy="22" r="12" fill="#ede9fe" />
      <text x="30" y="28" textAnchor="middle" fontSize="16" fontWeight="700" fill={COLORS.PURPLE}>?</text>
      {/* body */}
      <path d="M44 58c0-8 7-12 16-12s16 4 16 12v22H44z" fill={COLORS.SHIRT} />
      <path d="M46 80h28l-2 20h-9l-3-12-3 12h-9z" fill={COLORS.PANTS} />
      <Head x={60} y={36} />
      {/* raised arm */}
      <path d="M74 54c6-6 8-18 6-30" stroke={COLORS.SKIN} strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="80" cy="22" r="4" fill={COLORS.SKIN} />
      <path d="M46 60c-4 6-2 12 2 14" stroke={COLORS.SKIN} strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function TeachIllustration() {
  return (
    <svg viewBox="0 0 120 110" className="h-full w-full">
      <ellipse cx="60" cy="102" rx="46" ry="5" fill="#ede9fe" />
      {/* student */}
      <path d="M20 62c0-7 6-10 13-10s13 3 13 10v18H20z" fill={COLORS.SHIRT} />
      <Head x={33} y={42} />
      {/* teacher */}
      <path d="M74 60c0-7 6-10 13-10s13 3 13 10v20H74z" fill="#1e1b4b" />
      <circle cx="87" cy="40" r="10" fill="#6b4226" />
      <path d="M77 38a10 10 0 0 1 20 0c-4-3-12-4-20 0z" fill={COLORS.HAIR} />
      {/* table */}
      <rect x="14" y="78" width="92" height="6" rx="2" fill={COLORS.PANTS} />
      <path d="M22 84v16M98 84v16" stroke={COLORS.PANTS} strokeWidth="4" />
      {/* open book */}
      <path d="M48 76l12-4 12 4v-10l-12-4-12 4z" fill="#fff" stroke={COLORS.PURPLE} strokeWidth="1.5" />
      <path d="M60 62v10" stroke={COLORS.PURPLE} strokeWidth="1.5" />
      {/* arms */}
      <path d="M44 64c4 4 6 8 8 10M76 64c-4 4-6 8-8 10" stroke={COLORS.SKIN} strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
