/**
 * Clean geometric SVG line icons — no emojis, no AI-generated illustrations.
 * Thin-stroke, minimal, professional. Consistent 24×24 grid on 1.5px strokes.
 */

const defaults = { size: 24, stroke: '#1a2e4a', strokeWidth: 1.5 };

/* ── Research Specialisations ───────────────────────────── */

export const IconIslamPolitics = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Minaret / tower form */}
    <rect x="8" y="10" width="8" height="11" />
    <path d="M 7,10 C 7,6 9,4 12,3 C 15,4 17,6 17,10" />
    <line x1="12" y1="3" x2="12" y2="1.5" />
    {/* Crescent */}
    <path d="M 10.5,7 A 2,2 0 0 0 13.5,7 A 1.5,1.5 0 0 1 10.5,7 Z" fill={color} stroke="none" />
    {/* Base */}
    <line x1="5" y1="21" x2="19" y2="21" />
    {/* Door */}
    <path d="M 10,21 L 10,16 Q 12,14 14,16 L 14,21" />
  </svg>
);

export const IconReligiousLiteracy = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Open book */}
    <path d="M 2,4 L 2,20 Q 7,18 12,20 Q 17,18 22,20 L 22,4 Q 17,2 12,4 Q 7,2 2,4 Z" />
    <line x1="12" y1="4" x2="12" y2="20" />
    {/* Text lines left page */}
    <line x1="5" y1="9" x2="10" y2="9" />
    <line x1="5" y1="12" x2="10" y2="12" />
    <line x1="5" y1="15" x2="9" y2="15" />
    {/* Text lines right page */}
    <line x1="14" y1="9" x2="19" y2="9" />
    <line x1="14" y1="12" x2="19" y2="12" />
    <line x1="14" y1="15" x2="18" y2="15" />
  </svg>
);

export const IconInternationalAffairs = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Globe */}
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <path d="M 3.5,8 Q 7.5,10 12,9.5 Q 16.5,9 20.5,8" />
    <path d="M 3.5,16 Q 7.5,14 12,14.5 Q 16.5,15 20.5,16" />
  </svg>
);

export const IconEthics = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Balance scale */}
    <line x1="12" y1="3" x2="12" y2="20" />
    <line x1="4" y1="20" x2="20" y2="20" />
    {/* Beam */}
    <line x1="5" y1="8" x2="19" y2="8" />
    {/* Left pan */}
    <line x1="5" y1="8" x2="5" y2="13" />
    <path d="M 2.5,13 Q 5,15 7.5,13" />
    {/* Right pan */}
    <line x1="19" y1="8" x2="19" y2="13" />
    <path d="M 16.5,13 Q 19,15 21.5,13" />
    {/* Centre pivot */}
    <circle cx="12" cy="8" r="1" fill={color} stroke="none" />
  </svg>
);

export const IconSustainability = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Leaf */}
    <path d="M 12,21 C 12,21 4,16 4,9 C 4,5 8,2 12,2 C 16,2 20,5 20,9 C 20,16 12,21 12,21 Z" />
    {/* Midrib */}
    <line x1="12" y1="21" x2="12" y2="7" />
    {/* Veins */}
    <line x1="12" y1="11" x2="8" y2="8" />
    <line x1="12" y1="14" x2="16" y2="11" />
    <line x1="12" y1="17" x2="9" y2="15" />
  </svg>
);

export const IconInterfaith = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Two overlapping speech-circles = dialogue */}
    <path d="M 9,4 C 4,4 2,7 2,10 C 2,13 4,16 9,16 L 9,20 L 14,16 C 16,16 18,15 18,13" />
    <path d="M 15,2 C 20,2 22,5 22,8 C 22,11 20,13 15,13 L 15,17 L 10,13 C 8,13 6,12 6,10" />
  </svg>
);

/* ── Education ──────────────────────────────────────────── */
export const IconGradCap = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12,3 22,9 12,15 2,9" />
    <path d="M 6,11.5 L 6,17 Q 12,21 18,17 L 18,11.5" />
    <line x1="22" y1="9" x2="22" y2="14" />
  </svg>
);

/* ── Actions ────────────────────────────────────────────── */
export const IconDownload = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 12,3 L 12,15 M 7,11 L 12,16 L 17,11" />
    <path d="M 3,17 L 3,21 L 21,21 L 21,17" />
  </svg>
);

export const IconMail = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

/* ── Home Highlights ────────────────────────────────────── */
export const IconBooks = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Stack of books */}
    <rect x="3" y="14" width="10" height="7" rx="1" />
    <rect x="5" y="9" width="10" height="6" rx="1" />
    <rect x="7" y="3" width="13" height="7" rx="1" />
    <line x1="5" y1="14" x2="13" y2="14" />
    <line x1="7" y1="9" x2="15" y2="9" />
  </svg>
);

export const IconMicrophone = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M 5,11 A 7,7 0 0 0 19,11" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
);

export const IconLeaf = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 12,21 C 12,21 4,16 4,9 C 4,5 8,2 12,2 C 16,2 20,5 20,9 C 20,16 12,21 12,21 Z" />
    <line x1="12" y1="21" x2="12" y2="7" />
    <line x1="12" y1="11" x2="8" y2="8" />
    <line x1="12" y1="14" x2="16" y2="11" />
  </svg>
);

export const IconBuilding = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="6" width="11" height="15" />
    <rect x="14" y="11" width="7" height="10" />
    <line x1="3" y1="21" x2="21" y2="21" />
    <rect x="6" y="9" width="2.5" height="2.5" />
    <rect x="10" y="9" width="2.5" height="2.5" />
    <rect x="6" y="14" width="2.5" height="2.5" />
    <rect x="10" y="14" width="2.5" height="2.5" />
    <rect x="16" y="14" width="2.5" height="2.5" />
    <path d="M 7,21 L 7,18 Q 9,16 11,18 L 11,21" />
  </svg>
);

/* ── Eco-Project Pillars ─────────────────────────────────── */
export const IconTree = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="22" x2="12" y2="13" />
    <path d="M 12,13 L 5,6 L 19,6 Z" />
    <path d="M 12,8 L 6,2 L 18,2 Z" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
);

export const IconSprout = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 7,20 C 7,20 7,13 12,10 C 17,7 20,9 20,9 C 20,9 18,14 12,14 C 10,14 8,13 7,11" />
    <line x1="12" y1="22" x2="12" y2="10" />
    <path d="M 12,16 C 10,18 7,19 5,18 C 4,15 5,12 7,11" />
  </svg>
);

export const IconDove = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Simple dove silhouette using paths */}
    <path d="M 3,12 Q 5,6 12,7 Q 18,8 20,6 Q 22,4 21,7 Q 20,10 16,11 Q 20,12 20,16 Q 17,18 14,16 Q 12,20 9,19 Q 6,18 5,15 L 3,12 Z" />
    <line x1="14" y1="9" x2="14" y2="9" strokeWidth="2" />
  </svg>
);

export const IconMeditation = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Seated figure */}
    <circle cx="12" cy="5" r="2.5" />
    <path d="M 12,7.5 C 12,7.5 10,10 8,12 C 11,12 13,12 16,12 C 14,10 12,7.5 12,7.5 Z" />
    <line x1="8" y1="12" x2="5" y2="14" />
    <line x1="16" y1="12" x2="19" y2="14" />
    {/* Base / lotus position */}
    <path d="M 5,16 Q 8,14 12,15 Q 16,14 19,16" />
    <line x1="3" y1="19" x2="21" y2="19" />
  </svg>
);

export const IconAcademic = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* College/university building */}
    <rect x="2" y="10" width="20" height="11" />
    <polygon points="12,3 2,10 22,10" />
    <rect x="9" y="15" width="6" height="6" />
    <line x1="12" y1="3" x2="12" y2="1" />
    <line x1="10" y1="1" x2="14" y2="1" />
  </svg>
);

export const IconHandshake = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 2,10 L 7,15 L 10,13 L 14,17 L 17,14 L 22,19" />
    <path d="M 2,10 L 6,6 L 10,8 L 14,4 L 18,6 L 22,10 L 17,14 L 14,11 L 10,13 L 7,10 L 2,14" />
  </svg>
);

/* ── Location / Date meta ───────────────────────────────── */
export const IconPin = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 21,10 C 21,17 12,23 12,23 C 12,23 3,17 3,10 A 9,9 0 0 1 21,10 Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconCalendar = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const IconSearch = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const IconExternalLink = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 18,13 L 18,19 A 2,2 0 0 1 16,21 L 5,21 A 2,2 0 0 1 3,19 L 3,8 A 2,2 0 0 1 5,6 L 11,6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const IconArrowRight = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

export const IconCheck = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export const IconSun = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const IconMoon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 21,12.79 A 9,9 0 1 1 11.21,3 A 7,7 0 0 0 21,12.79 Z" />
  </svg>
);

export const IconCamera = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 23,19 A 2,2 0 0 1 21,21 L 3,21 A 2,2 0 0 1 1,19 L 1,8 A 2,2 0 0 1 3,6 L 7,6 L 9,3 L 15,3 L 17,6 L 21,6 A 2,2 0 0 1 23,8 Z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const IconWarning = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 10.29,3.86 L 1.82,18 A 2,2 0 0 0 3.64,21 L 20.36,21 A 2,2 0 0 0 22.18,18 L 13.71,3.86 A 2,2 0 0 0 10.29,3.86 Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const IconEdit = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 11,4 H 4 A 2,2 0 0 0 2,6 V 20 A 2,2 0 0 0 4,22 H 18 A 2,2 0 0 0 20,20 V 13" />
    <path d="M 18.5,2.5 A 2.121,2.121 0 0 1 21,5 L 12,14 L 8,15 L 9,11 Z" />
  </svg>
);

export const IconTrash = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3,6 5,6 21,6" />
    <path d="M 19,6 L 18,20 A 2,2 0 0 1 16,22 H 8 A 2,2 0 0 1 6,20 L 5,6" />
    <path d="M 9,6 L 9,3 L 15,3 L 15,6" />
  </svg>
);

export const IconGlobe = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M 12,2 A 15.3,15.3 0 0 1 16,12 A 15.3,15.3 0 0 1 12,22 A 15.3,15.3 0 0 1 8,12 A 15.3,15.3 0 0 1 12,2 Z" />
  </svg>
);

export const IconHome = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M 3,9 L 12,2 L 21,9 L 21,20 A 1,1 0 0 1 20,21 L 15,21 L 15,16 L 9,16 L 9,21 L 4,21 A 1,1 0 0 1 3,20 Z" />
  </svg>
);

export const IconImage = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

export const IconMicSmall = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M 5,11 A 7,7 0 0 0 19,11" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
);
