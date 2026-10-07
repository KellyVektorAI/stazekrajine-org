import Link from "next/link";
import Image from "next/image";

export function TrailMark({ className = "h-24 w-auto sm:h-28" }: { className?: string }) {
  return (
    <Image
      src="/dokumenti/logo.svg"
      alt="Staze Krajine Logo"
      width={400}
      height={150}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function Logo({ className = "h-24 w-auto sm:h-28" }: { className?: string }) {
  return (
    <Link
      href="/"
      className="flex items-center text-forest-900 transition-opacity hover:opacity-80"
    >
      <TrailMark className={className} />
    </Link>
  );
}
