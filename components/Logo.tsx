import Link from "next/link";

/**
 * Jednostavna, brendirana ikona udruženja — stilizovana planinska staza.
 * Nacrtana kao inline SVG (bez eksternih slika) da bi sajt bio lagan i brz.
 */
export function TrailMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" fill="var(--color-forest-700)" />
      <path
        d="M6 32 L17 16 L23 25 L28 18 L42 32"
        stroke="var(--color-sand-50)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 34c4-2 7-2 10 0s7 2 11 0 7-2 10 0"
        stroke="var(--color-forest-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark />
      <span className="flex flex-col leading-tight">
        <span className="font-semibold tracking-tight text-forest-800 text-base sm:text-lg">
          Staze Krajine
        </span>
        <span className="text-[11px] uppercase tracking-wide text-forest-500 hidden sm:block">
          Udruženje građana
        </span>
      </span>
    </Link>
  );
}
