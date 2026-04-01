/**
 * Partner institution logos — clean typographic treatment.
 * No illustrations, no AI-generated marks.
 * Each is simply the institution's abbreviation or short-name in
 * a carefully chosen typeface, weight, and color — a deliberate design
 * choice used by premium agencies when source files are unavailable.
 */

const Logo = ({ abbr, name, bg, fg, fontSize = 13, letterSpacing = '0.05em', size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    aria-label={name}
    style={{ display: 'block' }}
  >
    <rect width="64" height="64" fill={bg} />
    {/* Bottom accent rule */}
    <rect x="0" y="60" width="64" height="4" fill={fg} opacity="0.15" />
    <text
      x="32"
      y="38"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={fg}
      fontSize={fontSize}
      fontWeight="700"
      fontFamily="Georgia, 'Times New Roman', serif"
      letterSpacing={letterSpacing}
    >
      {abbr}
    </text>
  </svg>
);

export const LogoEU         = ({ size = 64 }) => <Logo size={size} abbr="EU"    name="European Union"                 bg="#003399" fg="#ffffff" fontSize={18} />;
export const LogoDoS        = ({ size = 64 }) => <Logo size={size} abbr="DoS"   name="US Department of State"         bg="#3C3B6E" fg="#ffffff" fontSize={15} />;
export const LogoUNDP       = ({ size = 64 }) => <Logo size={size} abbr="UNDP"  name="United Nations Development Programme" bg="#009EDB" fg="#ffffff" fontSize={11} letterSpacing="0.1em" />;
export const LogoASEAN      = ({ size = 64 }) => <Logo size={size} abbr="ASEAN" name="ASEAN Secretariat"              bg="#1a3a6e" fg="#ffffff" fontSize={10} letterSpacing="0.12em" />;
export const LogoFord       = ({ size = 64 }) => <Logo size={size} abbr="Ford"  name="Ford Foundation"                bg="#1a1a1a" fg="#c9a96e" fontSize={14} letterSpacing="0.2em" />;
export const LogoLuce       = ({ size = 64 }) => <Logo size={size} abbr="Luce"  name="Henry Luce Foundation"          bg="#8b0000" fg="#ffffff" fontSize={13} letterSpacing="0.1em" />;
export const LogoCarnegie   = ({ size = 64 }) => <Logo size={size} abbr="CC"    name="Carnegie Council"               bg="#1e3a5f" fg="#c9a96e" fontSize={18} />;
export const LogoGreenpeace = ({ size = 64 }) => <Logo size={size} abbr="GP"    name="Greenpeace"                     bg="#007b3a" fg="#ffffff" fontSize={18} />;
export const LogoTNC        = ({ size = 64 }) => <Logo size={size} abbr="TNC"   name="The Nature Conservancy"         bg="#1a5c34" fg="#ffffff" fontSize={14} letterSpacing="0.1em" />;
export const LogoGlobethics = ({ size = 64 }) => <Logo size={size} abbr="GE"    name="Globethics"                     bg="#1b4332" fg="#90ee90" fontSize={18} />;
export const LogoUGM        = ({ size = 64 }) => <Logo size={size} abbr="UGM"   name="Universitas Gadjah Mada"        bg="#003087" fg="#c9a96e" fontSize={15} letterSpacing="0.08em" />;
export const LogoWCC        = ({ size = 64 }) => <Logo size={size} abbr="WCC"   name="World Council of Churches"      bg="#4a1a6e" fg="#ffffff" fontSize={15} letterSpacing="0.1em" />;
