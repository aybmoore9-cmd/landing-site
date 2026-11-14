// Drawn night scene of a house outlined in warm C9 lights.
// Placeholder until real install photos are available.

type Pt = [number, number];

function along(a: Pt, b: Pt, spacing: number): Pt[] {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const n = Math.max(1, Math.round(len / spacing));
  return Array.from({ length: n + 1 }, (_, i) => [a[0] + ((b[0] - a[0]) * i) / n, a[1] + ((b[1] - a[1]) * i) / n]);
}

function dedupe(points: Pt[]): Pt[] {
  return points.filter((p, i) => points.findIndex((q) => Math.abs(q[0] - p[0]) < 1 && Math.abs(q[1] - p[1]) < 1) === i);
}

const COLORS = ["#ffd88a", "#fff1c9", "#ffc966"];

// Rooflines: main gable, porch gable, garage eave.
const roofBulbs = dedupe([
  ...along([92, 214], [300, 96], 17),
  ...along([300, 96], [508, 214], 17),
  ...along([226, 262], [300, 214], 15),
  ...along([300, 214], [374, 262], 15),
  ...along([508, 238], [602, 238], 17),
]);

const stars: Pt[] = [
  [40, 40], [120, 70], [210, 30], [380, 50], [460, 24], [540, 80], [600, 36], [80, 120], [520, 140], [250, 64],
];

export default function HouseIllustration() {
  return (
    <svg
      className="house"
      viewBox="0 0 640 420"
      role="img"
      aria-label="Illustration of a house outlined in warm white Christmas lights at night"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1430" />
          <stop offset="1" stopColor="#1b2550" />
        </linearGradient>
        <radialGradient id="window" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#ffe3a3" />
          <stop offset="1" stopColor="#e9a74a" />
        </radialGradient>
        <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="640" height="420" rx="24" fill="url(#sky)" />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.2} fill="#fff" opacity={0.7} className="star" style={{ animationDelay: `${i * 0.37}s` }} />
      ))}
      <circle cx="560" cy="62" r="22" fill="#f4f1e6" opacity="0.9" />
      <circle cx="570" cy="56" r="20" fill="#0f1a3a" />

      {/* Snowy ground */}
      <path d="M0 350 Q160 330 320 344 T640 340 V420 H0 Z" fill="#e8eef8" />
      <path d="M0 372 Q200 356 360 368 T640 364 V420 H0 Z" fill="#d5deee" />

      {/* Garage */}
      <rect x="508" y="238" width="94" height="110" fill="#2a2f48" />
      <rect x="522" y="270" width="66" height="78" rx="3" fill="#353b5a" />
      {[284, 300, 316, 332].map((y) => (
        <line key={y} x1="522" x2="588" y1={y} y2={y} stroke="#2a2f48" strokeWidth="2" />
      ))}

      {/* House body and roof */}
      <rect x="112" y="210" width="376" height="138" fill="#30365a" />
      <polygon points="80,218 300,90 520,218" fill="#232842" />
      <rect x="352" y="120" width="26" height="54" fill="#3a2d33" />

      {/* Windows */}
      {[
        [146, 236],
        [404, 236],
      ].map(([x, y]) => (
        <g key={x}>
          <rect x={x} y={y} width="54" height="62" rx="3" fill="url(#window)" />
          <line x1={x + 27} x2={x + 27} y1={y} y2={y + 62} stroke="#30365a" strokeWidth="4" />
          <line x1={x} x2={x + 54} y1={y + 31} y2={y + 31} stroke="#30365a" strokeWidth="4" />
        </g>
      ))}
      <circle cx="300" cy="166" r="20" fill="url(#window)" />

      {/* Porch gable and door */}
      <polygon points="220,266 300,208 380,266" fill="#232842" />
      <rect x="236" y="266" width="128" height="82" fill="#2b3150" />
      <rect x="278" y="276" width="44" height="72" rx="3" fill="#7a2e2e" />
      <circle cx="314" cy="314" r="2.5" fill="#e9c46a" />

      {/* Wreath */}
      <circle cx="300" cy="298" r="13" fill="none" stroke="#2f6b3f" strokeWidth="7" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={deg}
          cx={300 + 13 * Math.cos((deg * Math.PI) / 180)}
          cy={298 + 13 * Math.sin((deg * Math.PI) / 180)}
          r="2.2"
          fill="#ffd88a"
          filter="url(#glow)"
        />
      ))}
      <path d="M296 309 l4 6 l4 -6 z" fill="#c0392b" />

      {/* Bushes with mini lights */}
      {[
        [150, 346, 44],
        [450, 346, 44],
        [222, 350, 28],
        [378, 350, 28],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.62} fill="#1f4a33" />
          {Array.from({ length: 9 }, (_, j) => {
            const a = (j / 9) * Math.PI * 2 + i;
            const rr = r * (0.35 + ((j * 37) % 10) / 20);
            return (
              <circle
                key={j}
                cx={cx + Math.cos(a) * rr}
                cy={cy - Math.abs(Math.sin(a)) * rr * 0.55}
                r="1.8"
                fill="#fff1c9"
                filter="url(#glow)"
                className="twinkle"
                style={{ animationDelay: `${(i * 9 + j) * 0.21}s` }}
              />
            );
          })}
        </g>
      ))}

      {/* Roofline C9 bulbs */}
      <g filter="url(#glow)">
        {roofBulbs.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4.6"
            fill={COLORS[i % COLORS.length]}
            className={i % 4 === 0 ? "twinkle" : undefined}
            style={i % 4 === 0 ? { animationDelay: `${i * 0.13}s` } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}
