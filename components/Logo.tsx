import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-auto w-auto max-h-24 sm:max-h-28" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={400}
      height={140}
      className={`${className} object-contain`}
      priority
    />
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center -my-2 py-1 text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className="h-auto w-auto max-h-24 sm:max-h-28" />
    </Link>
  );
}
