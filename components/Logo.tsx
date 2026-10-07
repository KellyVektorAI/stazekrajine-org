import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-forest-900 transition-opacity hover:opacity-80"
    >
      <Image
        src="/dokumenti/logo.svg"
        alt="Staze Krajine Logo"
        width={48}
        height={48}
        className="h-11 w-11 object-contain sm:h-12 sm:w-12"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="font-semibold tracking-tight text-forest-800 text-base sm:text-lg">
          Staze Krajine
        </span>
        <span className="text-[11px] uppercase tracking-wide text-forest-500">
          Udruženje građana
        </span>
      </span>
    </Link>
  );
}
