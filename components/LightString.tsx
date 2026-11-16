// A hand-drawn-looking strand of C9 bulbs, used as a section divider.
const W = 1200;
const SPAN = 240; // distance between clips
const SAG = 18;

function wireY(x: number) {
  const t = (x % SPAN) / SPAN;
  return 8 + 4 * SAG * t * (1 - t); // matches the quadratic curve below
}

export default function LightString({ className = "" }: { className?: string }) {
  const clips = Array.from({ length: W / SPAN + 1 }, (_, i) => i * SPAN);
  const d = clips
    .slice(0, -1)
    .map((x) => `M${x} 8 Q${x + SPAN / 2} ${8 + SAG * 2} ${x + SPAN} 8`)
    .join(" ");
  const bulbs = Array.from({ length: W / 40 }, (_, i) => 20 + i * 40).filter((x) => x % SPAN > 10 && x % SPAN < SPAN - 10);
  return (
    <svg className={`light-string ${className}`} viewBox={`0 0 ${W} 64`} preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ffc861" stopOpacity=".55" />
          <stop offset="1" stopColor="#ffc861" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={d} fill="none" stroke="#2e3a2c" strokeWidth="2" />
      {bulbs.map((x, i) => {
        const y = wireY(x);
        const tilt = ((i * 37) % 11) - 5; // slight irregular tilt, like real bulbs
        return (
          <g key={x} transform={`translate(${x} ${y}) rotate(${tilt})`}>
            <circle cx="0" cy="17" r="16" fill="url(#glow)" />
            <rect x="-3" y="0" width="6" height="6" rx="1" fill="#2e3a2c" />
            <path d="M0 5c-5 3-6.5 9-5 13.5C-4 22 -1.5 25 0 26.5 1.5 25 4 22 5 18.5 6.5 14 5 8 0 5z" fill="#ffd27a" />
          </g>
        );
      })}
    </svg>
  );
}
