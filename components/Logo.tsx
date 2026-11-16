export function BulbMark({ className = "logo-mark" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 40" className={className} aria-hidden="true">
      <path d="M4 6c3-3 13-3 16 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="8" y="5" width="8" height="7" rx="1.2" fill="#6b5a3e" />
      <path d="M12 12c-6 4-8 11-6 17 1.5 4 4.5 7 6 9 1.5-2 4.5-5 6-9 2-6 0-13-6-17z" fill="var(--bulb)" />
      <path d="M10 18c-2 3-2.5 7-1.5 10" fill="none" stroke="#fff6dc" strokeWidth="1.4" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

export default function Logo() {
  return (
    <>
      <BulbMark />
      <span className="logo-text">
        <span className="logo-name">CMP</span>
        <span className="logo-sub">Holiday Lighting</span>
      </span>
    </>
  );
}
