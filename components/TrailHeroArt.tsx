/**
 * Dekorativna SVG ilustracija planinskih staza — koristi se na Hero sekciji
 * Početne stranice. Nacrtana ručno (bez fotografija/licenciranih slika) kako
 * bi sajt ostao lagan i brz za učitavanje, a vizuelno dočarao prirodu Krajine.
 */
export function TrailHeroArt() {
  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Ilustracija planinskih staza i prirode Krajine"
    >
      <rect width="640" height="420" rx="28" fill="var(--color-sand-100)" />
      <circle cx="500" cy="90" r="46" fill="var(--color-sand-200)" />
      <path d="M0 300 L140 150 L230 240 L300 170 L420 300 Z" fill="var(--color-forest-300)" />
      <path d="M0 340 L180 210 L260 280 L360 200 L520 340 Z" fill="var(--color-forest-500)" />
      <path d="M0 420 L120 300 L210 360 L340 260 L470 360 L640 260 L640 420 Z" fill="var(--color-forest-700)" />
      <path
        d="M40 420c60-70 110-90 150-70s70 40 110 10 90-80 140-60 110 90 170 60"
        stroke="var(--color-sand-50)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2 14"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}
