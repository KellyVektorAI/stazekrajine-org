import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={64}
      height={64}
      className={`${className} object-contain`}
      priority
    />
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3.5 text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className="h-14 w-14 sm:h-16 sm:w-16" />
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight text-forest-800 sm:text-2xl">
          Staze Krajine
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-forest-600 sm:text-sm">
          Udruženje građana
        </span>
      </span>
    </Link>
  );
}
