import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={220}
      height={70}
      className={`${className} object-contain`}
      priority
    />
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className="h-14 w-auto sm:h-16" />
    </Link>
  );
}
